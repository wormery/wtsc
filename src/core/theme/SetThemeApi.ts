import { ThemeOptions, ThemeName, ThemeMode } from './option'
import { Theme, choice } from './theme'
import { warn } from '../error/warn'
export interface SetThemeFunction<Options extends ThemeOptions> {
  (mode: ThemeMode<Options>): void

  (name: ThemeName<Options>): void

  <T extends ThemeMode<Options>>(mode: T, name: ThemeName<Options, T>): void
}

export function defSetThemeFunction<
  Options extends ThemeOptions
>(): SetThemeFunction<Options> {
  return function setTheme(
    this: Theme<Options>,
    r1: any,
    r2: any = choice
  ): void {
    const themeList = this.themeList as any
    try {
      // 输入的第一项如果是模式
      if (r1 in themeList) {
        // 选择到当前色彩模式主题
        themeList[choice] = themeList[r1]

        // 选择当前模式主题
        themeList[choice][choice] = themeList[choice][r2]

        this.setup(themeList[choice][choice])
        return
      }

      // 输入的第一项如果不是模式，就要在颜色列表里搜寻需要的颜色方案
      for (const modeKey in themeList) {
        const modeValue = themeList[modeKey]
        if (!(r1 in modeValue)) {
          continue
        }
        // 选择到当前色彩模式主题
        themeList[choice] = themeList[modeKey]

        // 选择当前模式主题
        themeList[choice][choice] = themeList[modeKey][r1]

        // 当然两个都选好了就直接使用选择的主题就好了
        this.setup(themeList[choice][choice])
      }
    } catch {
      warn('警告设置失败可能没有这个主题')
    }
  }
}
