import { warn } from '..'
import { Inject } from '../inject/inject'
import { GetObjInjectValue } from '../inject/types'
import { ProviderStorage } from '../inject/providerApi'
import {
  ThemeList,
  GetTheKey,
  ThemeOptions,
  ThemeName,
  ThemeMode,
} from './option'
import { ThemeKeys } from './tpyes'

export const choice = Symbol('choice')

export class Theme<
  Options extends ThemeOptions,
  TheType extends ThemeKeys = GetTheKey<Options>
> extends Inject {
  the: TheType
  themeList: ThemeList<Options>
  constructor(options: Options, storage: ProviderStorage) {
    super(options, storage)
    this.the = options.defThemeKeys?.(this) ?? ({} as any)

    const defaul = this.depInject(this.the as any)

    this.themeList = options.themeList ?? ({} as any)

    this.themeList.default = { [choice]: defaul }

    const _themeList = this.themeList as any

    // 初始化选中主题
    Object.keys(_themeList).forEach((key) => {
      _themeList[key][choice] = this.theFirstOne(_themeList[key]) ?? defaul
    })
  }

  private theFirstOne(o: object): any {
    const keys = Object.keys(o)

    if (keys.length <= 0) {
      return undefined
    } else {
      return (o as any)[keys[0]]
    }
  }

  setTheme(mode: ThemeMode<Options>): void

  setTheme(name: ThemeName<Options>): void

  setTheme<T extends ThemeMode<Options>>(
    mode: T,
    name: ThemeName<Options, T>
  ): void
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
