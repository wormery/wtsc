// http://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#%E7%B3%BB%E7%BB%9F%E9%A2%9C%E8%89%B2

export type ActiveText = 'ActiveText'

//		Text of active links

export type ButtonFace = 'ButtonFace'

//		Background of push buttons

export type ButtonText = 'ButtonText'

//		Text of push buttons

export type Canvas = 'Canvas'

//		Background of application content or documents

export type CanvasText = 'CanvasText'

//		Text in application content or documents

export type Field = 'Field'

//		Background of input fields

export type FieldText = 'FieldText'

//		Text in input fields

export type GrayText = 'GrayText'

//		Text that is disabled

export type Highlight = 'Highlight'

//		Background of items that are selected in a control

export type HighlightText = 'HighlightText'

//		Text of items that are selected in a control

export type LinkText = 'LinkText'

//		Text of non_active, non_visited links

export type VisitedText = 'VisitedText'

//		Text of visited links

//		Deprecated system color keywords
export type ActiveBorder = 'ActiveBorder'

//		Active window border.

export type ActiveCaption = 'ActiveCaption'

//		Active window caption. Should be used with CaptionText as foreground color.

export type AppWorkspace = 'AppWorkspace'

//		Background color of multiple document interface.

export type Background = 'Background'

//		Desktop background.

export type ButtonHighlight = 'ButtonHighlight'

//		The color of the border facing the light source for 3_D elements that appear 3_D due to that layer of surrounding border.

export type ButtonShadow = 'ButtonShadow'

//		The color of the border away from the light source for 3_D elements that appear 3_D due to that layer of surrounding border.

export type CaptionText = 'CaptionText'

//		Text in caption, size box, and scrollbar arrow box. Should be used with the ActiveCaption background color.

export type InactiveBorder = 'InactiveBorder'

//		Inactive window border.

export type InactiveCaption = 'InactiveCaption'

//		Inactive window caption. Should be used with the InactiveCaptionText foreground color.

export type InactiveCaptionText = 'InactiveCaptionText'

//		Color of text in an inactive caption. Should be used with the InactiveCaption background color.

export type InfoBackground = 'InfoBackground'

//		Background color for tooltip controls. Should be used with the InfoText foreground color.

export type InfoText = 'InfoText'

//		Text color for tooltip controls. Should be used with the InfoBackground background color.

export type Menu = 'Menu'

//		Menu background. Should be used with the MenuText or _moz_MenuBarText foreground color.

export type MenuText = 'MenuText'

//		Text in menus. Should be used with the Menu background color.

export type Scrollbar = 'Scrollbar'

//		Background color of scroll bars.

export type ThreeDDarkShadow = 'ThreeDDarkShadow'

//		The color of the darker (generally outer) of the two borders away from the light source for 3_D elements that appear 3_D due to two concentric layers of surrounding border.

export type ThreeDFace = 'ThreeDFace'

//		The face background color for 3_D elements that appear 3_D due to two concentric layers of surrounding border. Should be used with the ButtonText foreground color.

export type ThreeDHighlight = 'ThreeDHighlight'

//		The color of the lighter (generally outer) of the two borders facing the light source for 3_D elements that appear 3_D due to two concentric layers of surrounding border.

export type ThreeDLightShadow = 'ThreeDLightShadow'

//		The color of the darker (generally inner) of the two borders facing the light source for 3_D elements that appear 3_D due to two concentric layers of surrounding border.

export type ThreeDShadow = 'ThreeDShadow'

//		The color of the lighter (generally inner) of the two borders away from the light source for 3_D elements that appear 3_D due to two concentric layers of surrounding border.

export type Window = 'Window'

//		Window background. Should be used with the WindowText foreground color.

export type WindowFrame = 'WindowFrame'

//		Window frame.

export type WindowText = 'WindowText'

//		Text in windows. Should be used with the Window background color.

//		Mozilla System Color Extensions
export type _moz_ButtonDefault = '-moz-ButtonDefault'

//		The border color that goes around buttons that represent the default action for a dialog box.

export type _moz_ButtonHoverFace = '-moz-ButtonHoverFace'

//		The background color of a button that the mouse pointer is over (which would be ThreeDFace or ButtonFace when the mouse pointer is not over it). Should be used with the _moz_ButtonHoverText foreground color.

export type _moz_ButtonHoverText = '-moz-ButtonHoverText'

//		The text color of a button that the mouse pointer is over (which would be ButtonText when the mouse pointer is not over it). Should be used with the _moz_ButtonHoverFace background color.

export type _moz_CellHighlight = '-moz-CellHighlight'

//		Background color for selected item in a tree widget. Should be used with the _moz_CellHighlightText foreground color. See also _moz_html_CellHighlight.

export type _moz_CellHighlightText = '-moz-CellHighlightText'

//		Text color for a selected item in a tree. Should be used with the _moz_CellHighlight background color. See also _moz_html_CellHighlightText.

export type _moz_Combobox = '-moz-Combobox'

//		Background color for combo_boxes. Should be used with the _moz_ComboboxText foreground color. In versions prior to 1.9.2, use _moz_Field instead.

export type _moz_ComboboxText = '-moz-ComboboxText'

//		Text color for combo_boxes. Should be used with the _moz_Combobox background color. In versions prior to 1.9.2, use _moz_FieldText instead.

export type _moz_Dialog = '-moz-Dialog'

//		Background color for dialog boxes. Should be used with the _moz_DialogText foreground color.

export type _moz_DialogText = '-moz-DialogText'

//		Text color for dialog boxes. Should be used with the _moz_Dialog background color.

export type _moz_dragtargetzone = '-moz-dragtargetzone'
export type _moz_EvenTreeRow = '-moz-EvenTreeRow'

//		Background color for even_numbered rows in a tree. Should be used with the _moz_FieldText foreground color. In Gecko versions prior to 1.9, use _moz_Field. See also _moz_OddTreeRow.

export type _moz_html_CellHighlight = '-moz-html-CellHighlight'

//		Background color for highlighted item in HTML <select>s. Should be used with the _moz_html_CellHighlightText foreground color. Prior to Gecko 1.9, use _moz_CellHighlight.

export type _moz_html_CellHighlightText = '-moz-html-CellHighlightText'

//		Text color for highlighted items in HTML <select>s. Should be used with the _moz_html_CellHighlight background color. Prior to Gecko 1.9, use _moz_CellHighlightText.

export type _moz_mac_accentdarkestshadow = '-moz-mac-accentdarkestshadow'
export type _moz_mac_accentdarkshadow = '-moz-mac-accentdarkshadow'
export type _moz_mac_accentface = '-moz-mac-accentface'
export type _moz_mac_accentlightesthighlight =
  '-moz-mac-accentlightesthighlight'
export type _moz_mac_accentlightshadow = '-moz-mac-accentlightshadow'
export type _moz_mac_accentregularhighlight = '-moz-mac-accentregularhighlight'
export type _moz_mac_accentregularshadow = '-moz-mac-accentregularshadow'
export type _moz_mac_chrome_active = '-moz-mac-chrome-active'
export type _moz_mac_chrome_inactive = '-moz-mac-chrome-inactive'
export type _moz_mac_focusring = '-moz-mac-focusring'
export type _moz_mac_menuselect = '-moz-mac-menuselect'
export type _moz_mac_menushadow = '-moz-mac-menushadow'
export type _moz_mac_menutextselect = '-moz-mac-menutextselect'
export type _moz_MenuHover = '-moz-MenuHover'

//		Background color for hovered menu items. Often similar to Highlight. Should be used with the _moz_MenuHoverText or _moz_MenuBarHoverText foreground color.

export type _moz_MenuHoverText = '-moz-MenuHoverText'

//		Text color for hovered menu items. Often similar to HighlightText. Should be used with the _moz_MenuHover background color.

export type _moz_MenuBarText = '-moz-MenuBarText'

//		Text color in menu bars. Often similar to MenuText. Should be used on top of Menu background.

export type _moz_MenuBarHoverText = '-moz-MenuBarHoverText'

//		Color for hovered text in menu bars. Often similar to _moz_MenuHoverText. Should be used on top of _moz_MenuHover background.

export type _moz_nativehyperlinktext = '-moz-nativehyperlinktext'

//		Default platform hyperlink color.

export type _moz_OddTreeRow = '-moz-OddTreeRow'

//		Background color for odd_numbered rows in a tree. Should be used with the _moz_FieldText foreground color. In Gecko versions prior to 1.9, use _moz_Field. See also _moz_EvenTreeRow.

export type _moz_win_communicationstext = '-moz-win-communicationstext'

//		Should be used for text in objects with _moz_appearance: _moz_win_communications_toolbox;.

export type _moz_win_mediatext = '-moz-win-mediatext'

//		Should be used for text in objects with _moz_appearance: _moz_win_media_toolbox.

export type _moz_win_accentcolor = '-moz-win-accentcolor'

//		Used to access the Windows 10 custom accent color that you can set on the start menu, taskbar, title bars, etc.

export type _moz_win_accentcolortext = '-moz-win-accentcolortext'

//		Used to access the color of text placed over the Windows 10 custom accent color in the start menu, taskbar, title bars, etc.

//		Mozilla Color Preference Extensions

export type _moz_activehyperlinktext = '-moz-activehyperlinktext'

//		User's preference for text color of active links. Should be used with the default document background color.

export type _moz_default_background_color = '-moz-default-background-color'

//		User's preference for the document background color.

export type _moz_default_color = '-moz-default-color'

//		User's preference for the text color.

export type _moz_hyperlinktext = '-moz-hyperlinktext'

//		User's preference for the text color of unvisited links. Should be used with the default document background color.

export type _moz_visitedhyperlinktext = '-moz-visitedhyperlinktext'
//		User's preference for the text color of visited links. Should be used with the default document background color.

export default SystemKeywordColor

export type SystemKeywordColor =
  | ActiveText
  | ButtonFace
  | ButtonText
  | Canvas
  | CanvasText
  | Field
  | FieldText
  | GrayText
  | Highlight
  | HighlightText
  | LinkText
  | VisitedText
  | ActiveBorder
  | ActiveCaption
  | AppWorkspace
  | Background
  | ButtonHighlight
  | ButtonShadow
  | CaptionText
  | InactiveBorder
  | InactiveCaption
  | InactiveCaptionText
  | InfoBackground
  | InfoText
  | Menu
  | MenuText
  | Scrollbar
  | ThreeDDarkShadow
  | ThreeDFace
  | ThreeDHighlight
  | ThreeDLightShadow
  | ThreeDShadow
  | Window
  | WindowFrame
  | WindowText
  | _moz_ButtonDefault
  | _moz_ButtonHoverFace
  | _moz_ButtonHoverText
  | _moz_CellHighlight
  | _moz_CellHighlightText
  | _moz_Combobox
  | _moz_ComboboxText
  | _moz_Dialog
  | _moz_DialogText
  | _moz_dragtargetzone
  | _moz_EvenTreeRow
  | _moz_html_CellHighlight
  | _moz_html_CellHighlightText
  | _moz_mac_accentdarkestshadow
  | _moz_mac_accentdarkshadow
  | _moz_mac_accentface
  | _moz_mac_accentlightesthighlight
  | _moz_mac_accentlightshadow
  | _moz_mac_accentregularhighlight
  | _moz_mac_accentregularshadow
  | _moz_mac_chrome_active
  | _moz_mac_chrome_inactive
  | _moz_mac_focusring
  | _moz_mac_menuselect
  | _moz_mac_menushadow
  | _moz_mac_menutextselect
  | _moz_MenuHover
  | _moz_MenuHoverText
  | _moz_MenuBarText
  | _moz_MenuBarHoverText
  | _moz_nativehyperlinktext
  | _moz_OddTreeRow
  | _moz_win_communicationstext
  | _moz_win_mediatext
  | _moz_win_accentcolor
  | _moz_win_accentcolortext
  | _moz_activehyperlinktext
  | _moz_default_background_color
  | _moz_default_color
  | _moz_hyperlinktext
  | _moz_visitedhyperlinktext
