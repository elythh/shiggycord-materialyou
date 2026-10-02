(() => {
    // Theme ids must be URLs: other plugins (Cloud Sync) validate them as such. Nothing is hosted
    // here on purpose, so ShiggyCord's startup refresh of installed themes fails for this id and
    // keeps the colors the plugin wrote instead of replacing them.
    const THEME_ID = "https://raw.githubusercontent.com/elythh/shiggycord-materialyou/main/plugin/live-theme.json";
    const LEGACY_THEME_ID = "materialyou-plugin";
    const TEMPLATE = {"name":"Catppuccin Mocha Lavender","description":"Catppuccin Mocha Lavender for Shiggycord","version":"1.0","authors":[{"name":"eightbitbang","id":"000000000000000000"}],"semanticColors":{"ANDROID_RIPPLE":["#b4befe"],"CHAT_BACKGROUND":["#1e1e2e"],"BACKGROUND_ACCENT":["#313244"],"BACKGROUND_FLOATING":["#181825"],"MESSAGE_MENTIONED_BACKGROUND_DEFAULT":["rgba(180,190,254,0.12)"],"BACKGROUND_MENTIONED_HOVER":["rgba(180,190,254,0.16)"],"BACKGROUND_MESSAGE_HOVER":["#FFFFFF0D"],"BACKGROUND_NESTED_FLOATING":["#11111b"],"BACKGROUND_MOBILE_PRIMARY":["#1e1e2e"],"BACKGROUND_MOBILE_SECONDARY":["#181825"],"BACKGROUND_MODIFIER_ACCENT":["#FFFFFF12"],"BACKGROUND_MODIFIER_ACTIVE":["#FFFFFF14"],"BACKGROUND_MODIFIER_HOVER":["#FFFFFF0F"],"BACKGROUND_MODIFIER_SELECTED":["#45475a"],"BACKGROUND_PRIMARY":["#1e1e2e"],"BACKGROUND_SECONDARY":["#181825"],"BACKGROUND_SECONDARY_ALT":["#11111b"],"BACKGROUND_TERTIARY":["#11111b"],"BACKGROUND_BASE_LOWEST":["#11111b"],"BG_BASE_PRIMARY":["#1e1e2e"],"BG_BACKDROP":["#000000b2"],"BG_BASE_SECONDARY":["#181825"],"BG_BASE_TERTIARY":["#11111b"],"HOME_BACKGROUND":["#1e1e2e"],"BORDER_FAINT":["#313244"],"BORDER_SUBTLE":["#45475a"],"BORDER_STRONG":["#585b70"],"CARD_PRIMARY_BG":["#1e1e2e"],"CARD_SECONDARY_BG":["#181825"],"CHANNELS_DEFAULT":["#bac2de"],"CHANNEL_ICON":["#a6adc8"],"CHANNELTEXTAREA_BACKGROUND":["#181825"],"EMBED_BACKGROUND":["#181825"],"HEADER_PRIMARY":["#cdd6f4"],"HEADER_SECONDARY":["#bac2de"],"INTERACTIVE_ACTIVE":["#b4befe"],"INTERACTIVE_HOVER":["#cdd6f4"],"INTERACTIVE_MUTED":["#6c7086"],"INTERACTIVE_NORMAL":["#bac2de"],"MENTION_BACKGROUND":["rgba(180,190,254,0.12)"],"MENTION_FOREGROUND":["#b4befe"],"MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT":["rgba(180,190,254,0.10)"],"MESSAGE_HIGHLIGHT_BACKGROUND_HOVER":["rgba(180,190,254,0.14)"],"REDESIGN_ACTIVITY_CARD_BACKGROUND":["#181825"],"REDESIGN_ACTIVITY_CARD_BACKGROUND_PRESSED":["#313244"],"REDESIGN_BUTTON_SECONDARY_ALT_BACKGROUND":["#313244"],"REDESIGN_BUTTON_SECONDARY_BACKGROUND":["#181825"],"REDESIGN_BUTTON_SECONDARY_BORDER":["#45475a"],"REDESIGN_BUTTON_DANGER_BACKGROUND":["#f38ba8"],"REDESIGN_CHANNEL_CATEGORY_NAME_TEXT":["#a6adc8"],"REDESIGN_CHANNEL_NAME_TEXT":["#cdd6f4"],"REDESIGN_CHAT_INPUT_BACKGROUND":["#181825"],"SPOILER_HIDDEN_BACKGROUND":["#11111b"],"STATUS_DANGER":["#f38ba8"],"STATUS_DANGER_BACKGROUND":["#f38ba8"],"STATUS_DANGER_TEXT":["#1e1e2e"],"POLLS_NORMAL_FILL_HOVER":["#313244"],"POLLS_NORMAL_IMAGE_BACKGROUND":["#181825"],"POLLS_VICTOR_FILL":["#a6e3a180"],"TEXT_LINK":["#b4befe"],"TEXT_MUTED":["#6c7086"],"TEXT_NORMAL":["#cdd6f4"],"TEXT_PRIMARY":["#cdd6f4"],"TEXT_SECONDARY":["#bac2de"],"BG_MOD_FAINT":["#FFFFFF12"],"KEYBOARD":["#181825"],"BACKGROUND_MODIFIER_ACCEPT":["#a6e3a133"],"BACKGROUND_MODIFIER_ACCEPT_HOVER":["#a6e3a14d"],"AUTOMOD_QUEUED_FOR_REVIEW_BACKGROUND":["#f9e2af33"],"AUTOMOD_QUEUED_FOR_REVIEW_BACKGROUND_HOVER":["#f9e2af4d"],"SCROLLBAR_AUTO_THUMB":["#585b70"],"SCROLLBAR_AUTO_TRACK":["transparent"],"SCROLLBAR_THIN_THUMB":["#585b70"],"SCROLLBAR_THIN_TRACK":["transparent"]},"rawColors":{"BLUE_260":"#89b4fa","BLUE_300":"#89b4fa","BLUE_330":"#89b4fa","BLUE_345":"#89b4fa","BLUE_360":"#89b4fa","BLUE_400":"#89b4fa","BLUE_430":"#89b4fa","BLUE_460":"#89b4fa","BLUE_500":"#89b4fa","BLUE_530":"#89b4fa","BLUE_560":"#89b4fa","BLUE_600":"#89b4fa","BLUE_630":"#89b4fa","BLUE_660":"#89b4fa","BLUE_700":"#89b4fa","BLACK_500":"#000000b2","BRAND_200":"#b4befe","BRAND_260":"#b4befe","BRAND_300":"#b4befe","BRAND_330":"#b4befe","BRAND_345":"#b4befe","BRAND_360":"#b4befe","BRAND_400":"#b4befe","BRAND_430":"#b4befe","BRAND_460":"#b4befe","BRAND_500":"#b4befe","BRAND_530":"#b4befe","BRAND_560":"#a6adc8","BRAND_600":"#b4befe","BRAND_630":"#b4befe","BRAND_660":"#b4befe","BRAND_700":"#b4befe","BRAND_730":"#cdd6f4","PLUM_1":"#cdd6f4","PLUM_3":"#b4befe","PLUM_4":"#cdd6f4","PLUM_6":"#cdd6f4","PLUM_9":"#bac2de","PLUM_10":"#bac2de","PLUM_11":"#bac2de","PLUM_13":"#bac2de","PLUM_15":"#b4befe","PLUM_16":"#1e1e2e","PLUM_17":"#181825","PLUM_18":"#181825","PLUM_19":"#11111b","PLUM_20":"#11111b","PLUM_21":"#1e1e2e","PLUM_22":"#181825","PLUM_24":"#11111b","PLUM_25":"#11111b","PRIMARY_100":"#cdd6f4","PRIMARY_200":"#bac2de","PRIMARY_300":"#a6adc8","PRIMARY_330":"#bac2de","PRIMARY_360":"#a6adc8","PRIMARY_400":"#9399b2","PRIMARY_460":"#7f849c","PRIMARY_500":"#6c7086","PRIMARY_530":"#585b70","PRIMARY_600":"#45475a","PRIMARY_630":"#313244","PRIMARY_645":"#313244","PRIMARY_660":"#181825","PRIMARY_700":"#11111b","PRIMARY_730":"#bac2de","PRIMARY_800":"#181825","GREEN_260":"#a6e3a1","GREEN_300":"#a6e3a1","GREEN_330":"#a6e3a1","GREEN_345":"#a6e3a1","GREEN_360":"#a6e3a1","GREEN_400":"#a6e3a1","GREEN_430":"#a6e3a1","GREEN_460":"#a6e3a1","GREEN_500":"#a6e3a1","GREEN_530":"#a6e3a1","GREEN_560":"#a6e3a1","GREEN_600":"#a6e3a1","GREEN_630":"#a6e3a1","GREEN_660":"#a6e3a1","GREEN_700":"#a6e3a1","GUILD_BOOSTING_PINK":"#f5c2e7","GUILD_BOOSTING_PURPLE":"#cba6f7","GUILD_BOOSTING_PURPLE_FOR_GRADIENTS":"#cba6f7","RED_260":"#f38ba8","RED_300":"#f38ba8","RED_330":"#f38ba8","RED_345":"#f38ba8","RED_360":"#f38ba8","RED_400":"#f38ba8","RED_430":"#f38ba8","RED_460":"#f38ba8","RED_500":"#f38ba8","RED_530":"#f38ba8","RED_560":"#f38ba8","RED_600":"#f38ba8","RED_630":"#f38ba8","RED_660":"#f38ba8","RED_700":"#f38ba8","ORANGE_260":"#fab387","ORANGE_300":"#fab387","ORANGE_330":"#fab387","ORANGE_345":"#fab387","ORANGE_360":"#fab387","ORANGE_400":"#fab387","ORANGE_430":"#fab387","ORANGE_460":"#fab387","ORANGE_500":"#fab387","ORANGE_530":"#fab387","ORANGE_560":"#fab387","ORANGE_600":"#fab387","ORANGE_630":"#fab387","ORANGE_660":"#fab387","ORANGE_700":"#fab387","YELLOW_260":"#f9e2af","YELLOW_300":"#f9e2af","YELLOW_330":"#f9e2af","YELLOW_345":"#f9e2af","YELLOW_360":"#f9e2af","YELLOW_400":"#f9e2af","YELLOW_430":"#f9e2af","YELLOW_460":"#f9e2af","YELLOW_500":"#f9e2af","YELLOW_530":"#f9e2af","YELLOW_560":"#f9e2af","YELLOW_600":"#f9e2af","YELLOW_630":"#f9e2af","YELLOW_660":"#f9e2af","YELLOW_700":"#f9e2af","WHITE_500":"#cdd6f4","WHITE_630":"#bac2de","ROLE_DEFAULT":"#b4befe"},"fonts":{},"plus":{"version":0,"iconpack":"null","mentionLineColor":"#b4befe","icons":{"ic_new_pins":"#b4befe","StatusStreaming":"#cba6f7","StatusMobileOnline":"#a6e3a1","StatusIdle":"#f9e2af","StatusDND":"#f38ba8","StatusOffline":"#6c7086","StatusOnline":"#a6e3a1"}},"spec":2};
    // Semantic keys newer Discord versions use that the template lacks (extra-semantic.json):
    // role name, or #hex for colors with a fixed meaning.
    const EXTRA_SEMANTIC = {"_comment":"Semantic keys newer Discord versions use that the Catppuccin template does not set. Values are Material You role names, or #hex for colors that keep a fixed meaning. Key list from alpine-vortex/rain-themes tools/reference_keys.json.","BACKGROUND_BASE_LOW":"surface_container","CHANNEL_BACKGROUND_DEFAULT":"surface_container","STANDALONE_CHANNEL_CONTENT_BACKGROUND":"surface_container","BACKGROUND_BASE_LOWER":"surface_container_low","CHAT_BANNER_BG":"surface_container_low","BACKGROUND_SURFACE_HIGH":"surface_container_high","MODAL_BACKGROUND":"surface_container_high","MODAL_FOOTER_BACKGROUND":"surface_container_high","MOBILE_ACTIONSHEET_BACKGROUND":"surface_container_high","MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT":"surface_container_high","CARD_BACKGROUND_DEFAULT":"surface_container_high","MOBILE_EMBED_BACKGROUND_DEFAULT":"surface_container_high","BG_SURFACE_OVERLAY":"surface_container_high","BG_SURFACE_OVERLAY_TMP":"surface_container_high","BACKGROUND_SURFACE_HIGHEST":"surface_container_highest","CHAT_INPUT_BACKGROUND":"surface_container_highest","CHAT_INPUT_CONTAINER_BACKGROUND":"surface_container_highest","INPUT_BACKGROUND":"surface_container_highest","INPUT_BACKGROUND_DEFAULT":"surface_container_highest","BACKGROUND_MOD_SUBTLE":"surface_container_highest","BG_MOD_SUBTLE":"surface_container_highest","BACKGROUND_MOD_MUTED":"surface_container_highest","BACKGROUND_MOD_NORMAL":"surface_bright","BACKGROUND_MOD_STRONG":"surface_bright","BG_MOD_STRONG":"surface_bright","MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED":"secondary_container","MOBILE_BACKGROUND_SCRIM_OPAQUE":"surface","BORDER_MUTED":"outline_variant","TEXT_DEFAULT":"on_surface","ICON_DEFAULT":"on_surface","TEXT_STRONG":"on_surface","ICON_STRONG":"on_surface","INTERACTIVE_TEXT_HOVER":"on_surface","INTERACTIVE_ICON_HOVER":"on_surface","INTERACTIVE_TEXT_ACTIVE":"on_surface","INTERACTIVE_ICON_ACTIVE":"on_surface","TEXT_SUBTLE":"on_surface_variant","ICON_SUBTLE":"on_surface_variant","INTERACTIVE_TEXT_DEFAULT":"on_surface_variant","INTERACTIVE_ICON_DEFAULT":"on_surface_variant","ICON_MUTED":"outline","INPUT_PLACEHOLDER_TEXT":"outline","INPUT_PLACEHOLDER_TEXT_DEFAULT":"outline","CHANNEL_TEXT_AREA_PLACEHOLDER":"outline","BG_BRAND":"primary","BACKGROUND_BRAND":"primary","REDESIGN_BUTTON_PRIMARY_BACKGROUND":"primary","CONTROL_PRIMARY_BACKGROUND_DEFAULT":"primary","CONTROL_BRAND_FOREGROUND":"primary","CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND":"primary","BADGE_BACKGROUND_BRAND":"primary","FOCUS_PRIMARY":"primary","BORDER_FOCUS":"primary","INPUT_BORDER_ACTIVE":"primary","TEXT_BRAND":"primary","REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND":"primary_container","CONTROL_PRIMARY_BACKGROUND_ACTIVE":"primary_container","REDESIGN_BUTTON_PRIMARY_TEXT":"on_primary","CONTROL_PRIMARY_TEXT_DEFAULT":"on_primary","BADGE_TEXT_BRAND":"on_primary","CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT":"on_primary","TEXT_DANGER":"error","TEXT_FEEDBACK_CRITICAL":"error","ICON_FEEDBACK_CRITICAL":"error","INFO_DANGER_TEXT":"error","INFO_DANGER_FOREGROUND":"error","CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT":"error","STATUS_DND":"error","ICON_STATUS_DND":"error","TEXT_POSITIVE":"#a6e3a1","TEXT_FEEDBACK_POSITIVE":"#a6e3a1","ICON_FEEDBACK_POSITIVE":"#a6e3a1","INFO_POSITIVE_TEXT":"#a6e3a1","INFO_POSITIVE_FOREGROUND":"#a6e3a1","STATUS_POSITIVE":"#a6e3a1","STATUS_ONLINE":"#a6e3a1","ICON_STATUS_ONLINE":"#a6e3a1","TEXT_STATUS_ONLINE":"#a6e3a1","TEXT_WARNING":"#f9e2af","TEXT_FEEDBACK_WARNING":"#f9e2af","ICON_FEEDBACK_WARNING":"#f9e2af","INFO_WARNING_TEXT":"#f9e2af","INFO_WARNING_FOREGROUND":"#f9e2af","STATUS_WARNING":"#f9e2af","STATUS_IDLE":"#f9e2af","ICON_STATUS_IDLE":"#f9e2af","BACKGROUND_MENTIONED":"secondary_container","MESSAGE_MENTIONED_BACKGROUND_HOVER":"secondary_container"};
    // Discord's newer raw palettes (NEUTRAL_1-100 grays, BLURPLE_1-100 brand), which Discord 349
    // draws most surfaces from: [palette, tone], the tone being the stock color's CIELAB L*, so
    // each step keeps Discord's lightness and takes the wallpaper's hue (raw-tones.json).
    const RAW_TONES = {"BLURPLE_1":["accent1",39.1],"BLURPLE_2":["accent1",4.6],"BLURPLE_3":["accent1",91.0],"BLURPLE_4":["accent1",90.2],"BLURPLE_5":["accent1",89.2],"BLURPLE_6":["accent1",88.4],"BLURPLE_7":["accent1",87.4],"BLURPLE_8":["accent1",86.4],"BLURPLE_9":["accent1",85.7],"BLURPLE_10":["accent1",84.7],"BLURPLE_11":["accent1",83.9],"BLURPLE_12":["accent1",83.0],"BLURPLE_13":["accent1",81.9],"BLURPLE_14":["accent1",81.2],"BLURPLE_15":["accent1",80.2],"BLURPLE_16":["accent1",79.5],"BLURPLE_17":["accent1",78.5],"BLURPLE_18":["accent1",77.5],"BLURPLE_19":["accent1",76.8],"BLURPLE_20":["accent1",75.8],"BLURPLE_21":["accent1",74.9],"BLURPLE_22":["accent1",74.1],"BLURPLE_23":["accent1",73.2],"BLURPLE_24":["accent1",72.2],"BLURPLE_25":["accent1",71.5],"BLURPLE_26":["accent1",70.5],"BLURPLE_27":["accent1",69.5],"BLURPLE_28":["accent1",68.9],"BLURPLE_29":["accent1",67.9],"BLURPLE_30":["accent1",66.9],"BLURPLE_31":["accent1",66.2],"BLURPLE_32":["accent1",65.2],"BLURPLE_33":["accent1",64.3],"BLURPLE_34":["accent1",63.3],"BLURPLE_35":["accent1",62.6],"BLURPLE_36":["accent1",61.6],"BLURPLE_37":["accent1",60.7],"BLURPLE_38":["accent1",59.7],"BLURPLE_39":["accent1",59.0],"BLURPLE_40":["accent1",58.1],"BLURPLE_41":["accent1",57.1],"BLURPLE_42":["accent1",56.2],"BLURPLE_43":["accent1",55.3],"BLURPLE_44":["accent1",54.4],"BLURPLE_45":["accent1",53.7],"BLURPLE_46":["accent1",52.8],"BLURPLE_47":["accent1",51.9],"BLURPLE_48":["accent1",51.1],"BLURPLE_49":["accent1",50.1],"BLURPLE_50":["accent1",49.2],"BLURPLE_51":["accent1",48.2],"BLURPLE_52":["accent1",47.2],"BLURPLE_53":["accent1",46.1],"BLURPLE_54":["accent1",45.1],"BLURPLE_55":["accent1",44.1],"BLURPLE_56":["accent1",43.1],"BLURPLE_57":["accent1",42.4],"BLURPLE_58":["accent1",41.3],"BLURPLE_59":["accent1",40.3],"BLURPLE_60":["accent1",39.3],"BLURPLE_61":["accent1",38.3],"BLURPLE_62":["accent1",37.3],"BLURPLE_63":["accent1",36.4],"BLURPLE_64":["accent1",35.4],"BLURPLE_65":["accent1",34.4],"BLURPLE_66":["accent1",33.4],"BLURPLE_67":["accent1",32.4],"BLURPLE_68":["accent1",31.4],"BLURPLE_69":["accent1",30.4],"BLURPLE_70":["accent1",29.4],"BLURPLE_71":["accent1",28.4],"BLURPLE_72":["accent1",27.4],"BLURPLE_73":["accent1",26.4],"BLURPLE_74":["accent1",25.5],"BLURPLE_75":["accent1",24.5],"BLURPLE_76":["accent1",23.4],"BLURPLE_77":["accent1",22.7],"BLURPLE_78":["accent1",21.6],"BLURPLE_79":["accent1",20.6],"BLURPLE_80":["accent1",19.7],"BLURPLE_81":["accent1",18.6],"BLURPLE_82":["accent1",17.6],"BLURPLE_83":["accent1",16.5],"BLURPLE_84":["accent1",15.6],"BLURPLE_85":["accent1",14.9],"BLURPLE_86":["accent1",13.8],"BLURPLE_87":["accent1",12.8],"BLURPLE_88":["accent1",11.8],"BLURPLE_89":["accent1",10.7],"BLURPLE_90":["accent1",9.9],"BLURPLE_91":["accent1",9.0],"BLURPLE_92":["accent1",7.8],"BLURPLE_93":["accent1",6.8],"BLURPLE_94":["accent1",5.9],"BLURPLE_95":["accent1",4.9],"BLURPLE_96":["accent1",4.0],"BLURPLE_97":["accent1",3.0],"BLURPLE_98":["accent1",2.1],"BLURPLE_99":["accent1",0.9],"BLURPLE_100":["accent1",0.0],"NEUTRAL_1":["neutral1",100.0],"NEUTRAL_2":["neutral1",98.6],"NEUTRAL_3":["neutral1",97.3],"NEUTRAL_4":["neutral1",95.9],"NEUTRAL_5":["neutral1",94.5],"NEUTRAL_6":["neutral1",93.3],"NEUTRAL_7":["neutral1",92.0],"NEUTRAL_8":["neutral1",90.6],"NEUTRAL_9":["neutral1",89.3],"NEUTRAL_10":["neutral1",87.8],"NEUTRAL_11":["neutral1",86.7],"NEUTRAL_12":["neutral1",85.3],"NEUTRAL_13":["neutral1",83.9],"NEUTRAL_14":["neutral1",82.5],"NEUTRAL_15":["neutral1",81.4],"NEUTRAL_16":["neutral1",79.9],"NEUTRAL_17":["neutral1",78.6],"NEUTRAL_18":["neutral1",77.1],"NEUTRAL_19":["neutral1",75.9],"NEUTRAL_20":["neutral1",74.5],"NEUTRAL_21":["neutral1",73.1],"NEUTRAL_22":["neutral1",71.9],"NEUTRAL_23":["neutral1",70.4],"NEUTRAL_24":["neutral1",69.1],"NEUTRAL_25":["neutral1",67.8],"NEUTRAL_26":["neutral1",66.4],"NEUTRAL_27":["neutral1",65.2],"NEUTRAL_28":["neutral1",63.7],"NEUTRAL_29":["neutral1",62.6],"NEUTRAL_30":["neutral1",61.1],"NEUTRAL_31":["neutral1",59.9],"NEUTRAL_32":["neutral1",58.4],"NEUTRAL_33":["neutral1",57.2],"NEUTRAL_34":["neutral1",55.7],"NEUTRAL_35":["neutral1",54.5],"NEUTRAL_36":["neutral1",53.0],"NEUTRAL_37":["neutral1",51.8],"NEUTRAL_38":["neutral1",50.2],"NEUTRAL_39":["neutral1",49.0],"NEUTRAL_40":["neutral1",47.8],"NEUTRAL_41":["neutral1",46.2],"NEUTRAL_42":["neutral1",45.0],"NEUTRAL_43":["neutral1",43.8],"NEUTRAL_44":["neutral1",42.2],"NEUTRAL_45":["neutral1",41.0],"NEUTRAL_46":["neutral1",39.7],"NEUTRAL_47":["neutral1",38.4],"NEUTRAL_48":["neutral1",36.8],"NEUTRAL_49":["neutral1",35.5],"NEUTRAL_50":["neutral1",34.3],"NEUTRAL_51":["neutral1",33.4],"NEUTRAL_52":["neutral1",33.0],"NEUTRAL_53":["neutral1",32.1],"NEUTRAL_54":["neutral1",31.7],"NEUTRAL_55":["neutral1",30.8],"NEUTRAL_56":["neutral1",30.3],"NEUTRAL_57":["neutral1",29.5],"NEUTRAL_58":["neutral1",28.7],"NEUTRAL_59":["neutral1",28.2],"NEUTRAL_60":["neutral1",27.3],"NEUTRAL_61":["neutral1",26.8],"NEUTRAL_62":["neutral1",25.9],"NEUTRAL_63":["neutral1",25.5],"NEUTRAL_64":["neutral1",24.6],"NEUTRAL_65":["neutral1",24.1],"NEUTRAL_66":["neutral1",23.2],"NEUTRAL_67":["neutral1",22.7],"NEUTRAL_68":["neutral1",21.9],"NEUTRAL_69":["neutral1",21.4],"NEUTRAL_70":["neutral1",20.5],"NEUTRAL_71":["neutral1",19.9],"NEUTRAL_72":["neutral1",19.2],"NEUTRAL_73":["neutral1",18.6],"NEUTRAL_74":["neutral1",17.8],"NEUTRAL_75":["neutral1",17.1],"NEUTRAL_76":["neutral1",16.3],"NEUTRAL_77":["neutral1",15.8],"NEUTRAL_78":["neutral1",15.2],"NEUTRAL_79":["neutral1",14.4],"NEUTRAL_80":["neutral1",13.8],"NEUTRAL_81":["neutral1",12.9],"NEUTRAL_82":["neutral1",12.4],"NEUTRAL_83":["neutral1",11.8],"NEUTRAL_84":["neutral1",10.9],"NEUTRAL_85":["neutral1",10.3],"NEUTRAL_86":["neutral1",9.4],"NEUTRAL_87":["neutral1",8.9],"NEUTRAL_88":["neutral1",8.3],"NEUTRAL_89":["neutral1",7.4],"NEUTRAL_90":["neutral1",6.9],"NEUTRAL_91":["neutral1",6.3],"NEUTRAL_92":["neutral1",5.5],"NEUTRAL_93":["neutral1",4.8],"NEUTRAL_94":["neutral1",4.0],"NEUTRAL_95":["neutral1",3.4],"NEUTRAL_96":["neutral1",2.8],"NEUTRAL_97":["neutral1",2.0],"NEUTRAL_98":["neutral1",1.4],"NEUTRAL_99":["neutral1",0.6],"NEUTRAL_100":["neutral1",0.0]};

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
