# ShiggyCord Material You

A dark [ShiggyCord](https://github.com/kmmiio99o/ShiggyCord) theme in your Android wallpaper's
Material You colors, as a plugin that follows the wallpaper or as a static theme.

## Plugin: follow the wallpaper automatically (recommended)

The plugin rebuilds the theme from your wallpaper's colors every time Discord starts.

**Install:** in ShiggyCord, open **Settings → Plugins**, install a plugin from a URL, and paste:

```
https://raw.githubusercontent.com/elythh/shiggycord-materialyou/main/plugin/
```

On first start it adds and selects a theme called **Material You (live)**. After a wallpaper change,
close Discord fully and reopen it: the plugin updates the colors and shows a toast, and one more
restart applies them to the native parts of the app.

If you select a different theme, the plugin keeps the Material You theme up to date in the
background but doesn't switch back to it. Disabling the plugin removes the theme.

How it works: ShiggyXposed passes Android's Material You palettes (`system_accent1`–`3`,
`system_neutral1`–`2`, 13 shades each) to ShiggyCord when Discord loads. The plugin turns them into
Material roles, using the tones Android 16+ uses, and fills the color mapping below. ShiggyCord
themes only accept fixed colors, so this is as live as a theme can get.

To change the plugin, edit `plugin-src/index.js` and run `./build_plugin.py`; it embeds the template
and updates the hash in `plugin/manifest.json`, which ShiggyCord uses to detect updates.

## Static theme

**Install:** in ShiggyCord, open **Settings → Themes**, choose to install a theme from a URL, and paste:

```
https://raw.githubusercontent.com/elythh/shiggycord-materialyou/main/materialyou.json
```

The committed `materialyou.json` holds the colors of one specific wallpaper. To get your own,
regenerate it (below) and host the file yourself.

## Regenerate for your wallpaper

ShiggyCord themes only take fixed hex colors, so the theme can't follow the wallpaper live. The
generator reads the colors Android made for your current wallpaper and writes a new theme.

Requirements: Python 3, adb, and an Android 14+ phone with dynamic color on, connected with USB or
wireless debugging.

```sh
./generate.py            # -> materialyou.json
```

Commit and push the result. ShiggyCord re-downloads installed themes when it updates them, so the
same URL picks up the new colors.

## How the colors map

The theme is [Catppuccin Mocha Lavender for ShiggyCord](https://github.com/eightbitbang/Catppuccin-ShiggyCord)
with every Catppuccin color swapped for a Material You role:

| Catppuccin | Material You role | Used for |
|---|---|---|
| crust, mantle, base | `surface`, `surface_container_low`, `surface_container` | Backgrounds |
| surface0, surface1 | `surface_container_highest`, `surface_bright` | Cards, inputs |
| surface2, overlay0–1 | `outline_variant`, `outline` | Dividers, muted text |
| overlay2, subtext0–1, text | `on_surface_variant`, `on_secondary_container`, `on_surface` | Text |
| lavender | `primary` | Brand, links, mentions, active items |
| blue, mauve, pink | `secondary`, `tertiary`, `tertiary_container` | Other accents |
| red | `error` | Danger |
| green, yellow, orange | unchanged | Online, idle, warnings |

## Credits

- Theme structure: [Catppuccin-ShiggyCord](https://github.com/eightbitbang/Catppuccin-ShiggyCord) by
  eightbitbang (MIT), kept as `template-catppuccin-mocha-lavender.json`.
