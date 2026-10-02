// Material You theme for ShiggyCord. Built into ../plugin/index.js by build_plugin.py, which
// replaces __TEMPLATE__ with the Catppuccin theme JSON. ShiggyCord evaluates this file as one
// expression (`vendetta => { return <file> }`), so it must stay a single IIFE.
(() => {
    // Theme ids must be URLs: other plugins (Cloud Sync) validate them as such. Nothing is hosted
    // here on purpose, so ShiggyCord's startup refresh of installed themes fails for this id and
    // keeps the colors the plugin wrote instead of replacing them.
    const THEME_ID = "https://raw.githubusercontent.com/elythh/shiggycord-materialyou/main/plugin/live-theme.json";
    const LEGACY_THEME_ID = "materialyou-plugin";
    const TEMPLATE = __TEMPLATE__;
    // Semantic keys newer Discord versions use that the template lacks (extra-semantic.json):
    // role name, or #hex for colors with a fixed meaning.
    const EXTRA_SEMANTIC = __EXTRA_SEMANTIC__;
    // Discord's newer raw palettes (NEUTRAL_1-100 grays, BLURPLE_1-100 brand), which Discord 349
    // draws most surfaces from: [palette, tone], the tone being the stock color's CIELAB L*, so
    // each step keeps Discord's lightness and takes the wallpaper's hue (raw-tones.json).
    const RAW_TONES = __RAW_TONES__;

    // Material You dark roles as [palette, tone]. Tones measured from the roles Android 16+
    // generates (Material 3 Expressive, 2025 spec); Android 12-15 used slightly lighter surfaces.
    const ROLES = {
        surface: ["neutral1", 4],
        surface_container_low: ["neutral1", 6],
        surface_container: ["neutral1", 9],
        surface_container_high: ["neutral1", 12],
        surface_container_highest: ["neutral1", 15],
        surface_bright: ["neutral1", 18],
        outline_variant: ["neutral2", 30],
        outline: ["neutral2", 49],
        on_surface_variant: ["neutral2", 70],
        on_secondary_container: ["accent2", 78],
        on_surface: ["neutral1", 91],
        primary: ["accent1", 80],
        primary_container: ["accent1", 35],
        on_primary: ["accent1", 27],
        secondary_container: ["accent2", 25],
        secondary: ["accent2", 80],
        tertiary: ["accent3", 92],
        tertiary_container: ["accent3", 87],
    };
    // Android does not export its error palette; this is the 2025 dark error role.
    const ERROR = "#F97758";

    // Catppuccin Mocha color -> role (same mapping as generate.py). Green, yellow and orange keep
    // their Catppuccin values: they mean online, idle and warning.
    const ROLE_FOR = {
        "#11111b": "surface",
        "#181825": "surface_container_low",
        "#1e1e2e": "surface_container",
        "#313244": "surface_container_highest",
        "#45475a": "surface_bright",
        "#585b70": "outline_variant",
        "#6c7086": "outline",
        "#7f849c": "outline",
        "#9399b2": "on_surface_variant",
        "#a6adc8": "on_surface_variant",
        "#bac2de": "on_secondary_container",
        "#cdd6f4": "on_surface",
        "#b4befe": "primary",
        "#89b4fa": "secondary",
        "#cba6f7": "tertiary",
        "#f5c2e7": "tertiary_container",
        "#f38ba8": "error",
    };
    const LAVENDER_RGBA = /^rgba\(180,190,254,([0-9.]+)\)$/;

    // Android exports 13 shades per palette; shade N is tone 100 - N / 10.
    const SHADES = [0, 10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    // vendetta.logger is Discord's internal logger, invisible to adb; console goes to logcat
    // (tag ReactNativeJS), which makes problems on a device diagnosable.
    const log = (level, ...args) => {
        console[level === "warn" ? "warn" : level === "error" ? "error" : "log"]("[MaterialYouTheme]", ...args);
        vendetta.logger[level]?.(...args);
    };

    function getSysColors() {
        const sources = [globalThis.__PYON_LOADER__?.sysColors, globalThis.__vendetta_syscolors];
        return sources.find(c => c && Array.isArray(c.accent1) && c.accent1.length === SHADES.length) ?? null;
    }

    // Tones between shades are interpolated in CIELAB, whose L* is the Material tone axis.
    function tone(sys, palette, t) {
        for (let i = 0; i < SHADES.length - 1; i++) {
            const upper = 100 - SHADES[i] / 10;
            const lower = 100 - SHADES[i + 1] / 10;
            if (t > upper || t < lower) continue;
            if (t === upper) return sys[palette][i].toLowerCase();
            if (t === lower) return sys[palette][i + 1].toLowerCase();
            const a = toLab(sys[palette][i]);
            const b = toLab(sys[palette][i + 1]);
            const f = (upper - t) / (upper - lower);
            return fromLab(a.map((v, k) => v + (b[k] - v) * f));
        }
        throw new Error("Tone out of range: " + t);
    }

    const WHITE = [95.047, 100, 108.883];
    const lin = c => { c /= 255; return (c <= 0.040449936 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)) * 100; };
    const delin = v => {
        const c = v / 100;
        const s = c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
        return Math.max(0, Math.min(255, Math.round(s * 255)));
    };
    const labF = t => t > 216 / 24389 ? Math.cbrt(t) : (24389 / 27 * t + 16) / 116;
    const labInv = f => { const c = f * f * f; return c > 216 / 24389 ? c : (116 * f - 16) / (24389 / 27); };

    function toLab(hex) {
        const n = parseInt(hex.slice(1), 16);
        const r = lin((n >> 16) & 255), g = lin((n >> 8) & 255), b = lin(n & 255);
        const x = 0.41233895 * r + 0.35762064 * g + 0.18051042 * b;
        const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        const z = 0.01932141 * r + 0.11916382 * g + 0.95034478 * b;
        const fx = labF(x / WHITE[0]), fy = labF(y / WHITE[1]), fz = labF(z / WHITE[2]);
        return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
    }

    function fromLab([l, a, bStar]) {
        const fy = (l + 16) / 116, fx = a / 500 + fy, fz = fy - bStar / 200;
        const x = labInv(fx) * WHITE[0], y = labInv(fy) * WHITE[1], z = labInv(fz) * WHITE[2];
        const r = 3.2413774792388685 * x - 1.5376652402851851 * y - 0.49885366846268053 * z;
        const g = -0.9691452513005321 * x + 1.8758853451067872 * y + 0.04156585616912061 * z;
        const b = 0.05562093689691305 * x - 0.20395524564742123 * y + 1.0571799111220335 * z;
        return "#" + [r, g, b].map(v => delin(v).toString(16).padStart(2, "0")).join("");
    }

    function resolveRoles(sys) {
        const roles = { error: ERROR.toLowerCase() };
        for (const [name, [palette, t]] of Object.entries(ROLES)) roles[name] = tone(sys, palette, t);
        return roles;
    }

    function recolor(value, roles) {
        if (typeof value !== "string") return value;
        const low = value.toLowerCase();
        if (ROLE_FOR[low]) return roles[ROLE_FOR[low]];
        if (low.length === 9 && ROLE_FOR[low.slice(0, 7)]) return roles[ROLE_FOR[low.slice(0, 7)]] + low.slice(7);
        const rgba = low.replace(/\s/g, "").match(LAVENDER_RGBA);
        if (rgba) {
            const n = parseInt(roles.primary.slice(1), 16);
            return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${rgba[1]})`;
        }
        return value;
    }

    function buildTheme(sys) {
        const roles = resolveRoles(sys);
        const theme = JSON.parse(JSON.stringify(TEMPLATE));
        theme.name = "Material You (live)";
        theme.description = `Follows your wallpaper. Now: primary ${roles.primary}, background ${roles.surface_container}`;
        theme.authors = [{ name: "elythh", id: "000000000000000000" }];
        for (const key in theme.semanticColors) {
            theme.semanticColors[key] = theme.semanticColors[key].map(v => v && recolor(v, roles));
        }
        for (const key in theme.rawColors) theme.rawColors[key] = recolor(theme.rawColors[key], roles);
        for (const [key, [palette, t]] of Object.entries(RAW_TONES)) {
            theme.rawColors[key] = tone(sys, palette, Math.max(0, Math.min(100, t)));
        }
        for (const [key, value] of Object.entries(EXTRA_SEMANTIC)) {
            if (key.startsWith("_")) continue;
            theme.semanticColors[key] = [value.startsWith("#") ? value : roles[value]];
        }
        if (theme.plus) {
            if (theme.plus.mentionLineColor) theme.plus.mentionLineColor = recolor(theme.plus.mentionLineColor, roles);
            for (const key in theme.plus.icons ?? {}) theme.plus.icons[key] = recolor(theme.plus.icons[key], roles);
        }
        return theme;
    }

    // ShiggyCord only swaps semantic colors (backgrounds, text) in while Discord's appearance is
    // its theme key, and on Discord 349 the appearance stays "darker", so only raw colors
    // (accents, buttons) changed. This patch resolves the theme's colors directly for every
    // dark appearance while the Material You theme is selected.
    let colorPatch = null;
    let active = null; // { semantic: {NAME: hex}, raw: {NAME: hex} }

    const toHex = value => {
        const rgba = typeof value === "string" && value.replace(/\s/g, "").match(/^rgba\((\d+),(\d+),(\d+),([0-9.]+)\)$/i);
        if (!rgba) return value;
        const hex = [rgba[1], rgba[2], rgba[3]].map(n => Number(n).toString(16).padStart(2, "0")).join("");
        return "#" + hex + Math.round(Number(rgba[4]) * 255).toString(16).padStart(2, "0");
    };
    const withOpacity = (hex, opacity) => opacity == null || opacity >= 1 || hex.length !== 7
        ? hex
        : hex + Math.round(opacity * 255).toString(16).padStart(2, "0");

    function setActiveColors(data) {
        const semantic = {};
        for (const [key, values] of Object.entries(data.semanticColors ?? {})) {
            if (values?.[0]) semantic[key] = toHex(values[0]);
        }
        const raw = {};
        for (const [key, value] of Object.entries(data.rawColors ?? {})) raw[key] = toHex(value);
        active = { semantic, raw };
    }

    function installColorPatch() {
        if (colorPatch) return true;
        const tokens = vendetta.metro.findByProps("SemanticColor");
        const target = tokens?.default?.meta ?? tokens?.default?.internal;
        if (!target?.resolveSemanticColor) return false;
        let nameSymbol;
        colorPatch = vendetta.patcher.instead("resolveSemanticColor", target, (args, orig) => {
            const [themeName, colorObj] = args;
            if (!active || typeof themeName !== "string" || themeName === "light" || !colorObj) {
                return orig(...args);
            }
            try {
                nameSymbol ??= Object.getOwnPropertySymbols(colorObj)[0];
                const name = colorObj[nameSymbol];
                if (active.semantic[name]) return active.semantic[name];
                const def = tokens.SemanticColor[name]?.[themeName];
                const raw = def && active.raw[def.raw];
                if (raw) return withOpacity(raw, def.opacity);
            } catch (e) {
                log("error", "color patch", String(e));
            }
            return orig(...args);
        });
        return true;
    }

    // Re-render with the patched colors: re-apply Discord's current appearance.
    function refreshAppearance() {
        const appearance = vendetta.metro.findByProps("updateTheme");
        const themeStore = vendetta.metro.findByStoreName("ThemeStore");
        if (appearance?.updateTheme && themeStore?.theme) appearance.updateTheme(themeStore.theme);
    }

    function apply() {
        const loader = globalThis.__PYON_LOADER__;
        log("log", "start", JSON.stringify({
            loader: typeof loader, loaderName: loader?.loaderName, keys: loader ? Object.keys(loader) : null,
            vdSysColors: typeof globalThis.__vendetta_syscolors,
        }));
        const sys = getSysColors();
        if (!sys) {
            log("warn", "No Material You colors from the loader (needs Android 12+ and ShiggyXposed)");
            return;
        }
        const { themes } = vendetta.themes;
        const storage = vendetta.plugin.storage;
        const data = buildTheme(sys);
        // ShiggyCord's parser edits a theme's colors in place (it adds Android alpha keys), so
        // comparing against the stored theme always differs; compare the inputs instead.
        const fingerprint = JSON.stringify(sys);
        // Move a theme stored under the old non-URL id, keeping whether it was selected.
        const legacy = themes[LEGACY_THEME_ID];
        if (legacy) {
            if (!themes[THEME_ID]) themes[THEME_ID] = { ...legacy, id: THEME_ID };
            delete themes[LEGACY_THEME_ID];
            delete storage.fingerprint;
        }
        const existing = themes[THEME_ID];
        const changed = !existing || storage.fingerprint !== fingerprint;
        const themeStore = vendetta.metro?.findByStoreName?.("ThemeStore");
        log("log", "theme", JSON.stringify({
            existing: !!existing, selected: existing?.selected, changed,
            hasThemeSupport: globalThis.__PYON_LOADER__?.hasThemeSupport,
            storedTheme: globalThis.__PYON_LOADER__?.storedTheme?.id ?? null,
            discordTheme: themeStore?.theme,
        }));
        if (changed) {
            themes[THEME_ID] = { id: THEME_ID, selected: existing?.selected ?? false, data };
            storage.fingerprint = fingerprint;
        }

        // Select it the first time; afterwards re-apply it on every start while it is the
        // selected theme. ShiggyCord only resolves semantic colors (backgrounds, text) while
        // Discord's appearance is set to the theme's key, and selectTheme is what sets it;
        // without this, a restart leaves only the raw colors (buttons, brand) themed.
        // Picking another theme is respected: an unselected theme is only kept up to date.
        const before = themeStore?.theme;
        if (!existing || existing.selected) {
            vendetta.themes.selectTheme(THEME_ID);
            log("log", "selected", JSON.stringify({ discordTheme: themeStore?.theme }));
            if (changed) {
                vendetta.ui?.toasts?.showToast?.(existing
                    ? "Material You theme updated to your wallpaper."
                    : "Material You theme applied.");
            }
        }
        const current = themes[THEME_ID];
        let patched = false;
        if (current?.selected) {
            setActiveColors(changed ? data : current.data);
            patched = installColorPatch();
            refreshAppearance();
        } else {
            active = null;
        }

        if (!changed) return;
        log("log", `Material You theme ${existing ? "updated" : "installed"}: ${data.description}`);
    }

    return {
        onLoad() {
            try {
                apply();
            } catch (e) {
                log("error", "Failed to apply the Material You theme", String(e), e?.stack);
            }
        },
        onUnload() {
            colorPatch?.();
            colorPatch = null;
            active = null;
            const { themes } = vendetta.themes;
            if (themes[THEME_ID]?.selected || themes[LEGACY_THEME_ID]?.selected) vendetta.themes.selectTheme("default");
            delete themes[THEME_ID];
            delete themes[LEGACY_THEME_ID];
            delete vendetta.plugin.storage.fingerprint;
        },
        // Exposed for testing outside Discord.
        _test: { buildTheme, resolveRoles, tone },
    };
})()
