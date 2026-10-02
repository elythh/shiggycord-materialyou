#!/usr/bin/env python3
"""Build the ShiggyCord plugin in plugin/ from plugin-src/index.js and the Catppuccin template."""
import hashlib
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
template = json.loads((HERE / "template-catppuccin-mocha-lavender.json").read_text())
source = (HERE / "plugin-src" / "index.js").read_text()
extra = json.loads((HERE / "extra-semantic.json").read_text())
assert source.count("__TEMPLATE__") == 2, "expected the placeholder in one comment and one assignment"
code = source.replace("const TEMPLATE = __TEMPLATE__;",
                      "const TEMPLATE = " + json.dumps(template, separators=(",", ":")) + ";")
code = code.replace("const EXTRA_SEMANTIC = __EXTRA_SEMANTIC__;",
                    "const EXTRA_SEMANTIC = " + json.dumps(extra, separators=(",", ":")) + ";")
assert "__EXTRA_SEMANTIC__;" not in code

# ShiggyCord evaluates `vendetta=>{return <file>}`: anything before the expression on its own
# line (like the header comment) would end the return statement, so start at the IIFE.
code = code[code.index("(() => {"):]

out = HERE / "plugin"
out.mkdir(exist_ok=True)
(out / "index.js").write_text(code)
manifest = {
    "name": "Material You Theme",
    "description": "Keeps a ShiggyCord theme in your Android wallpaper's Material You colors.",
    "authors": [{"name": "elythh", "id": "000000000000000000"}],
    "main": "index.js",
    "hash": hashlib.sha256(code.encode()).hexdigest(),
    "vendetta": {"icon": "ic_palette_24px"},
}
(out / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
print(f"{out}/index.js ({len(code)} bytes), hash {manifest['hash'][:12]}")
