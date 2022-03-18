export type ColorKeyWord =
  | transparent // 透明
  | currentColor // 继承
  | black //	黑
  | silver //	银
  | gray //	灰
  | white //	白
  | maroon //	褐
  | red //	红
  | purple //	紫
  | fuchsia //	紫红
  | green //	绿
  | lime //	绿黄
  | olive //	橄榄绿
  | yellow //	黄
  | navy //	藏青
  | blue //	蓝
  | teal //	青
  | aqua //	水绿
  | orange //	橙
  | aliceblue //	浅灰蓝
  | antiquewhite //	古董白
  | aquamarine //	海蓝
  | azure //	蔚蓝
  | beige //	浅褐
  | bisque //	橘黄
  | blanchedalmond //	杏仁白
  | blueviolet //	蓝紫
  | brown //	褐
  | burlywood //	原木色
  | cadetblue //	灰蓝
  | chartreuse //	黄绿
  | chocolate //	巧克力色
  | coral //	珊瑚红
  | cornflowerblue //	矢车菊蓝
  | cornsilk //	玉米穗黄
  | crimson //	深红
  | darkblue //	深蓝
  | darkcyan //	深青
  | darkgoldenrod //	暗金
  | darkgray //	深灰
  | darkgreen //	深绿
  | darkgrey //	深灰
  | darkkhaki //	暗黄褐
  | darkmagenta //	深紫
  | darkolivegreen //	深橄榄绿
  | darkorange //	深橙
  | darkorchid //	深兰花紫
  | darkred //	深红
  | darksalmon //	深橙红
  | darkseagreen //	深海绿
  | darkslateblue //	暗灰蓝
  | darkslategray //	墨绿
  | darkslategrey //	墨绿
  | darkturquoise //	暗宝石绿
  | darkviolet //	深紫罗兰
  | deeppink //	深粉红
  | deepskyblue //	深天蓝
  | dimgray //	暗灰
  | dimgrey //	暗灰
  | dodgerblue //	遮板蓝
  | firebrick //	砖红
  | floralwhite //	花白
  | forestgreen //	丛林绿
  | gainsboro //	浅灰
  | ghostwhite //	幽灵白
  | gold //	金
  | goldenrod //	橘黄
  | greenyellow //	黄绿
  | grey //	灰
  | honeydew //	蜜瓜色
  | hotpink //	亮粉
  | indianred //	印第安红
  | indigo //	靛蓝
  | ivory //	象牙白
  | khaki //	卡其色
  | lavender //	淡紫
  | lavenderblush //	淡紫红
  | lawngreen //	草绿
  | lemonchiffon //	粉黄
  | lightblue //	淡蓝
  | lightcoral //	浅珊瑚色
  | lightcyan //	淡青
  | lightgoldenrodyellow //	浅金黄
  | lightgray //	浅灰
  | lightgreen //	浅绿
  | lightgrey //	浅灰
  | lightpink //	淡粉
  | lightsalmon //	浅肉色
  | lightseagreen //	浅海绿
  | lightskyblue //	浅天蓝
  | lightslategray //	浅青灰
  | lightslategrey //	浅青灰
  | lightsteelblue //	浅钢蓝
  | lightyellow //	浅黄
  | limegreen //	酸橙绿
  | linen //	亚麻色
  | mediumaquamarine //	中绿
  | mediumblue //	中蓝
  | mediumorchid //	间兰花紫
  | mediumpurple //	中紫
  | mediumseagreen //	间海绿
  | mediumslateblue //	中暗蓝
  | mediumspringgreen //	中春绿
  | mediumturquoise //	中海湖蓝
  | mediumvioletred //	中紫罗兰
  | midnightblue //	午夜蓝
  | mintcream //	薄荷乳白
  | mistyrose //	粉玫瑰红
  | moccasin //	鹿皮色
  | navajowhite //	纳瓦白
  | oldlace //	浅米色
  | olivedrab //	橄榄褐
  | orangered //	橙红
  | orchid //	兰花紫
  | palegoldenrod //	灰菊黄
  | palegreen //	苍绿
  | paleturquoise //	苍宝石绿
  | palevioletred //	苍紫罗兰
  | papayawhip //	木瓜色
  | peachpuff //	桃色
  | peru //	秘鲁色
  | pink //	粉
  | plum //	李子色
  | powderblue //	粉蓝
  | rosybrown //	玫瑰粽
  | royalblue //	宝蓝
  | saddlebrown //	马鞍棕
  | salmon //	鲑肉色
  | sandybrown //	沙褐色
  | seagreen //	海绿
  | seashell //	贝壳白
  | sienna //	赭
  | skyblue //	天蓝
  | slateblue //	青蓝
  | slategray //	青灰
  | slategrey //	青灰
  | snow //	雪白
  | springgreen //	春绿
  | steelblue //	铁青
  | tan //	棕褐
  | thistle //	苍紫
  | tomato //	番茄红
  | turquoise //	蓝绿
  | violet //	紫罗兰色
  | wheat //	麦色
  | whitesmoke //	烟白
  | yellowgreen //	黄绿
  | rebeccapurple //	利百加紫

/**
 * 透明
 */
export type transparent = 'transparent'
/**
 * currentColor 关键字代表原始的 color 属性的计算值。它允许让继承自属性或子元素的属性颜色属
 * 性以默认值不再继承。它也能用于那些继承了元素的 color 属性计算值的属性，相当于在这些元素上
 * 使用 inherit 关键字，如果这些元素有该关键字的话。
 */
export type currentColor = 'currentColor'
/**
 *	黑
 */
export type black = 'black'
/**
 *	银
 */
export type silver = 'silver'
/**
 *	灰
 */
export type gray = 'gray'
/**
 *	白
 */
export type white = 'white'
/**
 *	褐
 */
export type maroon = 'maroon'
/**
 *	红
 */
export type red = 'red'
/**
 *	紫
 */
export type purple = 'purple'
/**
 *	紫红
 */
export type fuchsia = 'fuchsia'
/**
 *	绿
 */
export type green = 'green'
/**
 *	绿黄
 */
export type lime = 'lime'
/**
 *	橄榄绿
 */
export type olive = 'olive'
/**
 *	黄
 */
export type yellow = 'yellow'
/**
 *	藏青
 */
export type navy = 'navy'
/**
 *	蓝
 */
export type blue = 'blue'
/**
 *	青
 */
export type teal = 'teal'
/**
 *	水绿
 */
export type aqua = 'aqua'
/**
 *	橙
 */
export type orange = 'orange'
/**
 *	浅灰蓝
 */
export type aliceblue = 'aliceblue'
/**
 *	古董白
 */
export type antiquewhite = 'antiquewhite'
/**
 *	海蓝
 */
export type aquamarine = 'aquamarine'
/**
 *	蔚蓝
 */
export type azure = 'azure'
/**
 *	浅褐
 */
export type beige = 'beige'
/**
 *	橘黄
 */
export type bisque = 'bisque'
/**
 *	杏仁白
 */
export type blanchedalmond = 'blanchedalmond'
/**
 *	蓝紫
 */
export type blueviolet = 'blueviolet'
/**
 *	褐
 */
export type brown = 'brown'
/**
 *	原木色
 */
export type burlywood = 'burlywood'
/**
 *	灰蓝
 */
export type cadetblue = 'cadetblue'
/**
 *	黄绿
 */
export type chartreuse = 'chartreuse'
/**
 *	巧克力色
 */
export type chocolate = 'chocolate'
/**
 *	珊瑚红
 */
export type coral = 'coral'
/**
 *	矢车菊蓝
 */
export type cornflowerblue = 'cornflowerblue'
/**
 *	玉米穗黄
 */
export type cornsilk = 'cornsilk'
/**
 *	深红
 */
export type crimson = 'crimson'
/**
 *	深蓝
 */
export type darkblue = 'darkblue'
/**
 *	深青
 */
export type darkcyan = 'darkcyan'
/**
 *	暗金
 */
export type darkgoldenrod = 'darkgoldenrod'
/**
 *	深灰
 */
export type darkgray = 'darkgray'
/**
 *	深绿
 */
export type darkgreen = 'darkgreen'
/**
 *	深灰
 */
export type darkgrey = 'darkgrey'
/**
 *	暗黄褐
 */
export type darkkhaki = 'darkkhaki'
/**
 *	深紫
 */
export type darkmagenta = 'darkmagenta'
/**
 *	深橄榄绿
 */
export type darkolivegreen = 'darkolivegreen'
/**
 *	深橙
 */
export type darkorange = 'darkorange'
/**
 *	深兰花紫
 */
export type darkorchid = 'darkorchid'
/**
 *	深红
 */
export type darkred = 'darkred'
/**
 *	深橙红
 */
export type darksalmon = 'darksalmon'
/**
 *	深海绿
 */
export type darkseagreen = 'darkseagreen'
/**
 *	暗灰蓝
 */
export type darkslateblue = 'darkslateblue'
/**
 *	墨绿
 */
export type darkslategray = 'darkslategray'
/**
 *	墨绿
 */
export type darkslategrey = 'darkslategrey'
/**
 *	暗宝石绿
 */
export type darkturquoise = 'darkturquoise'
/**
 *	深紫罗兰
 */
export type darkviolet = 'darkviolet'
/**
 *	深粉红
 */
export type deeppink = 'deeppink'
/**
 *	深天蓝
 */
export type deepskyblue = 'deepskyblue'
/**
 *	暗灰
 */
export type dimgray = 'dimgray'
/**
 *	暗灰
 */
export type dimgrey = 'dimgrey'
/**
 *	遮板蓝
 */
export type dodgerblue = 'dodgerblue'
/**
 *	砖红
 */
export type firebrick = 'firebrick'
/**
 *	花白
 */
export type floralwhite = 'floralwhite'
/**
 *	丛林绿
 */
export type forestgreen = 'forestgreen'
/**
 *	浅灰
 */
export type gainsboro = 'gainsboro'
/**
 *	幽灵白
 */
export type ghostwhite = 'ghostwhite'
/**
 *	金
 */
export type gold = 'gold'
/**
 *	橘黄
 */
export type goldenrod = 'goldenrod'
/**
 *	黄绿
 */
export type greenyellow = 'greenyellow'
/**
 *	灰
 */
export type grey = 'grey'
/**
 *	蜜瓜色
 */
export type honeydew = 'honeydew'
/**
 *	亮粉
 */
export type hotpink = 'hotpink'
/**
 *	印第安红
 */
export type indianred = 'indianred'
/**
 *	靛蓝
 */
export type indigo = 'indigo'
/**
 *	象牙白
 */
export type ivory = 'ivory'
/**
 *	卡其色
 */
export type khaki = 'khaki'
/**
 *	淡紫
 */
export type lavender = 'lavender'
/**
 *	淡紫红
 */
export type lavenderblush = 'lavenderblush'
/**
 *	草绿
 */
export type lawngreen = 'lawngreen'
/**
 *	粉黄
 */
export type lemonchiffon = 'lemonchiffon'
/**
 *	淡蓝
 */
export type lightblue = 'lightblue'
/**
 *	浅珊瑚色
 */
export type lightcoral = 'lightcoral'
/**
 *	淡青
 */
export type lightcyan = 'lightcyan'
/**
 *	浅金黄
 */
export type lightgoldenrodyellow = 'lightgoldenrodyellow'
/**
 *	浅灰
 */
export type lightgray = 'lightgray'
/**
 *	浅绿
 */
export type lightgreen = 'lightgreen'
/**
 *	浅灰
 */
export type lightgrey = 'lightgrey'
/**
 *	淡粉
 */
export type lightpink = 'lightpink'
/**
 *	浅肉色
 */
export type lightsalmon = 'lightsalmon'
/**
 *	浅海绿
 */
export type lightseagreen = 'lightseagreen'
/**
 *	浅天蓝
 */
export type lightskyblue = 'lightskyblue'
/**
 *	浅青灰
 */
export type lightslategray = 'lightslategray'
/**
 *	浅青灰
 */
export type lightslategrey = 'lightslategrey'
/**
 *	浅钢蓝
 */
export type lightsteelblue = 'lightsteelblue'
/**
 *	浅黄
 */
export type lightyellow = 'lightyellow'
/**
 *	酸橙绿
 */
export type limegreen = 'limegreen'
/**
 *	亚麻色
 */
export type linen = 'linen'
/**
 *	中绿
 */
export type mediumaquamarine = 'mediumaquamarine'
/**
 *	中蓝
 */
export type mediumblue = 'mediumblue'
/**
 *	间兰花紫
 */
export type mediumorchid = 'mediumorchid'
/**
 *	中紫
 */
export type mediumpurple = 'mediumpurple'
/**
 *	间海绿
 */
export type mediumseagreen = 'mediumseagreen'
/**
 *	中暗蓝
 */
export type mediumslateblue = 'mediumslateblue'
/**
 *	中春绿
 */
export type mediumspringgreen = 'mediumspringgreen'
/**
 *	中海湖蓝
 */
export type mediumturquoise = 'mediumturquoise'
/**
 *	中紫罗兰
 */
export type mediumvioletred = 'mediumvioletred'
/**
 *	午夜蓝
 */
export type midnightblue = 'midnightblue'
/**
 *	薄荷乳白
 */
export type mintcream = 'mintcream'
/**
 *	粉玫瑰红
 */
export type mistyrose = 'mistyrose'
/**
 *	鹿皮色
 */
export type moccasin = 'moccasin'
/**
 *	纳瓦白
 */
export type navajowhite = 'navajowhite'
/**
 *	浅米色
 */
export type oldlace = 'oldlace'
/**
 *	橄榄褐
 */
export type olivedrab = 'olivedrab'
/**
 *	橙红
 */
export type orangered = 'orangered'
/**
 *	兰花紫
 */
export type orchid = 'orchid'
/**
 *	灰菊黄
 */
export type palegoldenrod = 'palegoldenrod'
/**
 *	苍绿
 */
export type palegreen = 'palegreen'
/**
 *	苍宝石绿
 */
export type paleturquoise = 'paleturquoise'
/**
 *	苍紫罗兰
 */
export type palevioletred = 'palevioletred'
/**
 *	木瓜色
 */
export type papayawhip = 'papayawhip'
/**
 *	桃色
 */
export type peachpuff = 'peachpuff'
/**
 *	秘鲁色
 */
export type peru = 'peru'
/**
 *	粉
 */
export type pink = 'pink'
/**
 *	李子色
 */
export type plum = 'plum'
/**
 *	粉蓝
 */
export type powderblue = 'powderblue'
/**
 *	玫瑰粽
 */
export type rosybrown = 'rosybrown'
/**
 *	宝蓝
 */
export type royalblue = 'royalblue'
/**
 *	马鞍棕
 */
export type saddlebrown = 'saddlebrown'
/**
 *	鲑肉色
 */
export type salmon = 'salmon'
/**
 *	沙褐色
 */
export type sandybrown = 'sandybrown'
/**
 *	海绿
 */
export type seagreen = 'seagreen'
/**
 *	贝壳白
 */
export type seashell = 'seashell'
/**
 *	赭
 */
export type sienna = 'sienna'
/**
 *	天蓝
 */
export type skyblue = 'skyblue'
/**
 *	青蓝
 */
export type slateblue = 'slateblue'
/**
 *	青灰
 */
export type slategray = 'slategray'
/**
 *	青灰
 */
export type slategrey = 'slategrey'
/**
 *	雪白
 */
export type snow = 'snow'
/**
 *	春绿
 */
export type springgreen = 'springgreen'
/**
 *	铁青
 */
export type steelblue = 'steelblue'
/**
 *	棕褐
 */
export type tan = 'tan'
/**
 *	苍紫
 */
export type thistle = 'thistle'
/**
 *	番茄红
 */
export type tomato = 'tomato'
/**
 *	蓝绿
 */
export type turquoise = 'turquoise'
/**
 *	紫罗兰色
 */
export type violet = 'violet'
/**
 *	麦色
 */
export type wheat = 'wheat'
/**
 *	烟白
 */
export type whitesmoke = 'whitesmoke'
/**
 *	黄绿
 */
export type yellowgreen = 'yellowgreen'
/**
 *	利百加紫
 */
export type rebeccapurple = 'rebeccapurple'
