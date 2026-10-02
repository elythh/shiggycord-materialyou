#!/usr/bin/env python3
"""Build a ShiggyCord (Bunny/Vendetta spec 2) theme from the phone's current Material You colors.

Reads the dark color roles Android generated for the current wallpaper (the
com.android.systemui:dynamic overlay) over adb, then swaps every Catppuccin Mocha color in
template-catppuccin-mocha-lavender.json for the matching Material role.

Usage: ./generate.py [-s ADB_SERIAL] [--roles roles.txt] [-o materialyou.json]
"""
import argparse
import json
import re
import subprocess
from pathlib import Path

HERE = Path(__file__).resolve().parent
TEMPLATE = HERE / "template-catppuccin-mocha-lavender.json"
EXTRA_SEMANTIC = HERE / "extra-semantic.json"

# Catppuccin Mocha color -> Material You dark role. Status colors with a fixed meaning
# (online green, idle yellow, warning orange) keep their Catppuccin value.
ROLE_FOR = {
    "#11111b": "surface",                     # crust
    "#181825": "surface_container_low",       # mantle
    "#1e1e2e": "surface_container",           # base
    "#313244": "surface_container_highest",   # surface0
    "#45475a": "surface_bright",              # surface1
    "#585b70": "outline_variant",             # surface2
    "#6c7086": "outline",                     # overlay0
    "#7f849c": "outline",                     # overlay1
    "#9399b2": "on_surface_variant",          # overlay2
    "#a6adc8": "on_surface_variant",          # subtext0
    "#bac2de": "on_secondary_container",      # subtext1
    "#cdd6f4": "on_surface",                  # text
    "#b4befe": "primary",                     # lavender: brand, links, mentions
    "#89b4fa": "secondary",                   # blue
    "#cba6f7": "tertiary",                    # mauve
    "#f5c2e7": "tertiary_container",          # pink
    "#f38ba8": "error",                       # red: danger
}
LAVENDER_RGB = "180,190,254"


def read_roles(serial):
    cmd = ["adb"] + (["-s", serial] if serial else []) + [
        "shell", "cmd", "overlay", "dump", "com.android.systemui:dynamic"]
    return parse_roles(subprocess.run(cmd, check=True, capture_output=True, text=True).stdout)


def parse_roles(text):
    roles = {}
    for value, name in re.findall(r"0xff([0-9a-f]{6}) \(color/system_([a-z_]+)_dark\)", text):
        roles[name] = "#" + value
    extra_roles = {v for k, v in json.loads(EXTRA_SEMANTIC.read_text()).items()
                   if not k.startswith("_") and not v.startswith("#")}
    missing = sorted((set(ROLE_FOR.values()) | extra_roles) - roles.keys())
    if missing:
        raise SystemExit(f"Missing Material roles {missing}; is this Android 14+ with dynamic color on?")
    return roles


def recolor(value, roles):
    low = value.lower()
    if low in ROLE_FOR:
        return roles[ROLE_FOR[low]]
    # #RRGGBBAA versions of a mapped color keep their alpha.
    if len(low) == 9 and low[:7] in ROLE_FOR:
        return roles[ROLE_FOR[low[:7]]] + low[7:]
    match = re.fullmatch(r"rgba\(" + LAVENDER_RGB + r",\s*([0-9.]+)\)", low.replace(" ", ""))
    if match:
        primary = roles["primary"]
        r, g, b = (int(primary[i:i + 2], 16) for i in (1, 3, 5))
        return f"rgba({r},{g},{b},{match.group(1)})"
    return value


def build(roles):
    theme = json.loads(TEMPLATE.read_text())
    theme["name"] = "Material You"
    theme["description"] = f"Your wallpaper's Material You colors (primary {roles['primary']})"
    theme["version"] = "1.0"
    theme["authors"] = [{"name": "elythh", "id": "000000000000000000"}]
    theme["semanticColors"] = {
        key: [recolor(v, roles) if v else v for v in values]
        for key, values in theme["semanticColors"].items()
    }
    theme["rawColors"] = {key: recolor(v, roles) for key, v in theme["rawColors"].items()}
    for key, value in json.loads(EXTRA_SEMANTIC.read_text()).items():
        if not key.startswith("_"):
            theme["semanticColors"][key] = [value if value.startswith("#") else roles[value]]
    plus = theme.get("plus", {})
    if "mentionLineColor" in plus:
        plus["mentionLineColor"] = recolor(plus["mentionLineColor"], roles)
    for key, v in plus.get("icons", {}).items():
        plus["icons"][key] = recolor(v, roles)
    return theme


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("-s", "--serial", help="adb device serial")
    parser.add_argument("--roles", type=Path, help="saved `cmd overlay dump` output instead of adb")
    parser.add_argument("-o", "--output", type=Path, default=HERE / "materialyou.json")
    args = parser.parse_args()

    roles = parse_roles(args.roles.read_text()) if args.roles else read_roles(args.serial)
    args.output.write_text(json.dumps(build(roles), indent=2) + "\n")
    print(f"{args.output} (primary {roles['primary']}, background {roles['surface_container']})")


if __name__ == "__main__":
    main()
