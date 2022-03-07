import { warn } from '..'
import { Inject } from '../inject/inject'
import { GetObjInjectValue } from '../inject/types'
import { SetThemeApi } from './SetThemeApi'
import {
  ThemeOptions,
  GetThemeKeys,
  GetThemeList,
  ThemeName,
  ThemeMode,
} from './option'

export const choice = Symbol('choice')

export class Theme<Options extends ThemeOptions<Options>>
  extends Inject
  implements SetThemeApi<Options>
{
  the: GetThemeKeys<Options>
  themeList: GetThemeList<Options>
  constructor(options: Options) {
    super(options)
    this.the = (options.defThemeKeys?.(this) ?? {}) as any

    const defaul = this.depInject(this.the as any)

    this.themeList =
      options.themeList ??
      ({
        dark: {},
        bright: {},
      } as any)

    // 初始化 选中亮色
    ;(this.themeList as any)[choice] = this.themeList.bright
    // 在亮色中选中第一个主题
    ;(this.themeList as any).bright[choice] =
      this.theFirstOne((this.themeList as any).bright) ?? defaul
    // 在暗色中选中第一个主题
    ;(this.themeList as any).dark[choice] =
      this.theFirstOne((this.themeList as any).dark) ?? defaul
  }

  private theFirstOne(o: object): any {
    const keys = Object.keys(o)

    if (keys.length <= 0) {
      return undefined
    } else {
      return (o as any)[keys[0]]
    }
  }

  setTheme<T extends ThemeMode<Options>>(
    r1: any,
    r2: ThemeName<Options, T> = choice as any
  ): boolean {
    try {
      // 输入的第一项如果是模式
      if (r1 in this.themeList) {
        // 选择到当前色彩模式主题
        ;(this.themeList as any)[choice] = (this.themeList as any)[r1]

        // 选择当前模式主题
        ;(this.themeList as any)[choice][choice] = (this.themeList as any)[
          choice
        ][r2]

        this.setup((this.themeList as any)[choice][choice])
        return true
      }

      // 输入的第一项如果不是模式，就要在颜色列表里搜寻需要的颜色方案
      for (const modeKey in this.themeList) {
        if (Object.prototype.hasOwnProperty.call(this.themeList, modeKey)) {
          const modeValue = this.themeList[modeKey]
          for (const themeKey in modeValue) {
            if (Object.prototype.hasOwnProperty.call(modeValue, themeKey)) {
              if (themeKey === r1) {
                // 选择到当前色彩模式主题
                ;(this.themeList as any)[choice] = (this.themeList as any)[
                  modeKey
                ]

                // 选择当前模式主题
                ;(this.themeList as any)[choice][choice] = (
                  this.themeList as any
                )[modeKey][r1]

                // 当然两个都选好了就直接使用选择的主题就好了
                this.setup((this.themeList as any)[choice][choice])
                return true
              }
            }
          }
        }
      }
    } catch {
      warn('警告设置失败可能没有这个主题')
    }
    return false
  }

  setup(theme: GetObjInjectValue<GetThemeKeys<Options>>): void {
    this.depProvide(theme, this.the as any)
  }
}
