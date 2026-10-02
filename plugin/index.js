(() => {
    const THEME_ID = "materialyou-plugin";
    const TEMPLATE = {"name":"Catppuccin Mocha Lavender","description":"Catppuccin Mocha Lavender for Shiggycord","version":"1.0","authors":[{"name":"eightbitbang","id":"000000000000000000"}],"semanticColors":{"ANDROID_RIPPLE":["#b4befe"],"CHAT_BACKGROUND":["#1e1e2e"],"BACKGROUND_ACCENT":["#313244"],"BACKGROUND_FLOATING":["#181825"],"MESSAGE_MENTIONED_BACKGROUND_DEFAULT":["rgba(180,190,254,0.12)"],"BACKGROUND_MENTIONED_HOVER":["rgba(180,190,254,0.16)"],"BACKGROUND_MESSAGE_HOVER":["#FFFFFF0D"],"BACKGROUND_NESTED_FLOATING":["#11111b"],"BACKGROUND_MOBILE_PRIMARY":["#1e1e2e"],"BACKGROUND_MOBILE_SECONDARY":["#181825"],"BACKGROUND_MODIFIER_ACCENT":["#FFFFFF12"],"BACKGROUND_MODIFIER_ACTIVE":["#FFFFFF14"],"BACKGROUND_MODIFIER_HOVER":["#FFFFFF0F"],"BACKGROUND_MODIFIER_SELECTED":["#45475a"],"BACKGROUND_PRIMARY":["#1e1e2e"],"BACKGROUND_SECONDARY":["#181825"],"BACKGROUND_SECONDARY_ALT":["#11111b"],"BACKGROUND_TERTIARY":["#11111b"],"BACKGROUND_BASE_LOWEST":["#11111b"],"BG_BASE_PRIMARY":["#1e1e2e"],"BG_BACKDROP":["#000000b2"],"BG_BASE_SECONDARY":["#181825"],"BG_BASE_TERTIARY":["#11111b"],"HOME_BACKGROUND":["#1e1e2e"],"BORDER_FAINT":["#313244"],"BORDER_SUBTLE":["#45475a"],"BORDER_STRONG":["#585b70"],"CARD_PRIMARY_BG":["#1e1e2e"],"CARD_SECONDARY_BG":["#181825"],"CHANNELS_DEFAULT":["#bac2de"],"CHANNEL_ICON":["#a6adc8"],"CHANNELTEXTAREA_BACKGROUND":["#181825"],"EMBED_BACKGROUND":["#181825"],"HEADER_PRIMARY":["#cdd6f4"],"HEADER_SECONDARY":["#bac2de"],"INTERACTIVE_ACTIVE":["#b4befe"],"INTERACTIVE_HOVER":["#cdd6f4"],"INTERACTIVE_MUTED":["#6c7086"],"INTERACTIVE_NORMAL":["#bac2de"],"MENTION_BACKGROUND":["rgba(180,190,254,0.12)"],"MENTION_FOREGROUND":["#b4befe"],"MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT":["rgba(180,190,254,0.10)"],"MESSAGE_HIGHLIGHT_BACKGROUND_HOVER":["rgba(180,190,254,0.14)"],"REDESIGN_ACTIVITY_CARD_BACKGROUND":["#181825"],"REDESIGN_ACTIVITY_CARD_BACKGROUND_PRESSED":["#313244"],"REDESIGN_BUTTON_SECONDARY_ALT_BACKGROUND":["#313244"],"REDESIGN_BUTTON_SECONDARY_BACKGROUND":["#181825"],"REDESIGN_BUTTON_SECONDARY_BORDER":["#45475a"],"REDESIGN_BUTTON_DANGER_BACKGROUND":["#f38ba8"],"REDESIGN_CHANNEL_CATEGORY_NAME_TEXT":["#a6adc8"],"REDESIGN_CHANNEL_NAME_TEXT":["#cdd6f4"],"REDESIGN_CHAT_INPUT_BACKGROUND":["#181825"],"SPOILER_HIDDEN_BACKGROUND":["#11111b"],"STATUS_DANGER":["#f38ba8"],"STATUS_DANGER_BACKGROUND":["#f38ba8"],"STATUS_DANGER_TEXT":["#1e1e2e"],"POLLS_NORMAL_FILL_HOVER":["#313244"],"POLLS_NORMAL_IMAGE_BACKGROUND":["#181825"],"POLLS_VICTOR_FILL":["#a6e3a180"],"TEXT_LINK":["#b4befe"],"TEXT_MUTED":["#6c7086"],"TEXT_NORMAL":["#cdd6f4"],"TEXT_PRIMARY":["#cdd6f4"],"TEXT_SECONDARY":["#bac2de"],"BG_MOD_FAINT":["#FFFFFF12"],"KEYBOARD":["#181825"],"BACKGROUND_MODIFIER_ACCEPT":["#a6e3a133"],"BACKGROUND_MODIFIER_ACCEPT_HOVER":["#a6e3a14d"],"AUTOMOD_QUEUED_FOR_REVIEW_BACKGROUND":["#f9e2af33"],"AUTOMOD_QUEUED_FOR_REVIEW_BACKGROUND_HOVER":["#f9e2af4d"],"SCROLLBAR_AUTO_THUMB":["#585b70"],"SCROLLBAR_AUTO_TRACK":["transparent"],"SCROLLBAR_THIN_THUMB":["#585b70"],"SCROLLBAR_THIN_TRACK":["transparent"]},"rawColors":{"BLUE_260":"#89b4fa","BLUE_300":"#89b4fa","BLUE_330":"#89b4fa","BLUE_345":"#89b4fa","BLUE_360":"#89b4fa","BLUE_400":"#89b4fa","BLUE_430":"#89b4fa","BLUE_460":"#89b4fa","BLUE_500":"#89b4fa","BLUE_530":"#89b4fa","BLUE_560":"#89b4fa","BLUE_600":"#89b4fa","BLUE_630":"#89b4fa","BLUE_660":"#89b4fa","BLUE_700":"#89b4fa","BLACK_500":"#000000b2","BRAND_200":"#b4befe","BRAND_260":"#b4befe","BRAND_300":"#b4befe","BRAND_330":"#b4befe","BRAND_345":"#b4befe","BRAND_360":"#b4befe","BRAND_400":"#b4befe","BRAND_430":"#b4befe","BRAND_460":"#b4befe","BRAND_500":"#b4befe","BRAND_530":"#b4befe","BRAND_560":"#a6adc8","BRAND_600":"#b4befe","BRAND_630":"#b4befe","BRAND_660":"#b4befe","BRAND_700":"#b4befe","BRAND_730":"#cdd6f4","PLUM_1":"#cdd6f4","PLUM_3":"#b4befe","PLUM_4":"#cdd6f4","PLUM_6":"#cdd6f4","PLUM_9":"#bac2de","PLUM_10":"#bac2de","PLUM_11":"#bac2de","PLUM_13":"#bac2de","PLUM_15":"#b4befe","PLUM_16":"#1e1e2e","PLUM_17":"#181825","PLUM_18":"#181825","PLUM_19":"#11111b","PLUM_20":"#11111b","PLUM_21":"#1e1e2e","PLUM_22":"#181825","PLUM_24":"#11111b","PLUM_25":"#11111b","PRIMARY_100":"#cdd6f4","PRIMARY_200":"#bac2de","PRIMARY_300":"#a6adc8","PRIMARY_330":"#bac2de","PRIMARY_360":"#a6adc8","PRIMARY_400":"#9399b2","PRIMARY_460":"#7f849c","PRIMARY_500":"#6c7086","PRIMARY_530":"#585b70","PRIMARY_600":"#45475a","PRIMARY_630":"#313244","PRIMARY_645":"#313244","PRIMARY_660":"#181825","PRIMARY_700":"#11111b","PRIMARY_730":"#bac2de","PRIMARY_800":"#181825","GREEN_260":"#a6e3a1","GREEN_300":"#a6e3a1","GREEN_330":"#a6e3a1","GREEN_345":"#a6e3a1","GREEN_360":"#a6e3a1","GREEN_400":"#a6e3a1","GREEN_430":"#a6e3a1","GREEN_460":"#a6e3a1","GREEN_500":"#a6e3a1","GREEN_530":"#a6e3a1","GREEN_560":"#a6e3a1","GREEN_600":"#a6e3a1","GREEN_630":"#a6e3a1","GREEN_660":"#a6e3a1","GREEN_700":"#a6e3a1","GUILD_BOOSTING_PINK":"#f5c2e7","GUILD_BOOSTING_PURPLE":"#cba6f7","GUILD_BOOSTING_PURPLE_FOR_GRADIENTS":"#cba6f7","RED_260":"#f38ba8","RED_300":"#f38ba8","RED_330":"#f38ba8","RED_345":"#f38ba8","RED_360":"#f38ba8","RED_400":"#f38ba8","RED_430":"#f38ba8","RED_460":"#f38ba8","RED_500":"#f38ba8","RED_530":"#f38ba8","RED_560":"#f38ba8","RED_600":"#f38ba8","RED_630":"#f38ba8","RED_660":"#f38ba8","RED_700":"#f38ba8","ORANGE_260":"#fab387","ORANGE_300":"#fab387","ORANGE_330":"#fab387","ORANGE_345":"#fab387","ORANGE_360":"#fab387","ORANGE_400":"#fab387","ORANGE_430":"#fab387","ORANGE_460":"#fab387","ORANGE_500":"#fab387","ORANGE_530":"#fab387","ORANGE_560":"#fab387","ORANGE_600":"#fab387","ORANGE_630":"#fab387","ORANGE_660":"#fab387","ORANGE_700":"#fab387","YELLOW_260":"#f9e2af","YELLOW_300":"#f9e2af","YELLOW_330":"#f9e2af","YELLOW_345":"#f9e2af","YELLOW_360":"#f9e2af","YELLOW_400":"#f9e2af","YELLOW_430":"#f9e2af","YELLOW_460":"#f9e2af","YELLOW_500":"#f9e2af","YELLOW_530":"#f9e2af","YELLOW_560":"#f9e2af","YELLOW_600":"#f9e2af","YELLOW_630":"#f9e2af","YELLOW_660":"#f9e2af","YELLOW_700":"#f9e2af","WHITE_500":"#cdd6f4","WHITE_630":"#bac2de","ROLE_DEFAULT":"#b4befe"},"fonts":{},"plus":{"version":0,"iconpack":"null","mentionLineColor":"#b4befe","icons":{"ic_new_pins":"#b4befe","StatusStreaming":"#cba6f7","StatusMobileOnline":"#a6e3a1","StatusIdle":"#f9e2af","StatusDND":"#f38ba8","StatusOffline":"#6c7086","StatusOnline":"#a6e3a1"}},"spec":2};

    // Material You dark roles as [palette, tone]. Tones measured from the roles Android 16+
    // generates (Material 3 Expressive, 2025 spec); Android 12-15 used slightly lighter surfaces.
    const ROLES = {
        surface: ["neutral1", 4],
        surface_container_low: ["neutral1", 6],
        surface_container: ["neutral1", 9],
        surface_container_highest: ["neutral1", 15],
        surface_bright: ["neutral1", 18],
        outline_variant: ["neutral2", 30],
        outline: ["neutral2", 49],
        on_surface_variant: ["neutral2", 70],
        on_secondary_container: ["accent2", 78],
        on_surface: ["neutral1", 91],
        primary: ["accent1", 80],
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
        if (theme.plus) {
            if (theme.plus.mentionLineColor) theme.plus.mentionLineColor = recolor(theme.plus.mentionLineColor, roles);
            for (const key in theme.plus.icons ?? {}) theme.plus.icons[key] = recolor(theme.plus.icons[key], roles);
        }
        return theme;
    }

    function apply() {
        const sys = getSysColors();
        if (!sys) {
            vendetta.logger.warn("No Material You colors from the loader (needs Android 12+ and ShiggyXposed)");
            return;
        }
        const { themes } = vendetta.themes;
        const data = buildTheme(sys);
        const existing = themes[THEME_ID];
        const changed = !existing || JSON.stringify(existing.data) !== JSON.stringify(data);
        if (!changed) return;

        themes[THEME_ID] = { id: THEME_ID, selected: existing?.selected ?? false, data };
        // Select it the first time; afterwards only refresh it while it is the selected theme,
        // so picking another theme is respected.
        if (!existing || existing.selected) {
            vendetta.themes.selectTheme(THEME_ID);
            vendetta.ui?.toasts?.showToast?.(existing
                ? "Material You theme updated to your wallpaper. Restart Discord to apply it everywhere."
                : "Material You theme applied. Restart Discord to apply it everywhere.");
        }
        vendetta.logger.log(`Material You theme ${existing ? "updated" : "installed"}: ${data.description}`);
    }

    return {
        onLoad() {
            try {
                apply();
            } catch (e) {
                vendetta.logger.error("Failed to apply the Material You theme", e);
            }
        },
        onUnload() {
            const { themes } = vendetta.themes;
            if (themes[THEME_ID]?.selected) vendetta.themes.selectTheme("default");
            delete themes[THEME_ID];
        },
        // Exposed for testing outside Discord.
        _test: { buildTheme, resolveRoles, tone },
    };
})()
