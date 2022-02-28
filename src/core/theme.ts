import { Inject, InjectOptions } from '..'
import { GetObjInjectValue, ObjInjectKey } from './inject'
type ThemeKeys = ObjInjectKey

interface ThemeOptions<_ThemeOptions extends ThemeOptions<_ThemeOptions>>
  extends InjectOptions {
  defThemeKeys?: (provide: Inject['provide']) => ThemeKeys
  themeList?: {
    dark: Themes<_ThemeOptions>
    bright: Themes<_ThemeOptions>
  }
}
const choice = Symbol('choice')

interface Themes<_ThemeOptions> {
  [choice]?: GetObjInjectValue<GetThemeKeys<_ThemeOptions>>
  [k: string]: GetObjInjectValue<GetThemeKeys<_ThemeOptions>>
}
class Theme<_ThemeOptions extends ThemeOptions<_ThemeOptions>> extends Inject {
  themeKeys: GetThemeKeys<_ThemeOptions>
  themeList: GetThemeList<_ThemeOptions>
  constructor(options: _ThemeOptions) {
    super(options)
    this.themeKeys = (options.defThemeKeys?.(this.provide) ?? {}) as any
    this.themeList =
      options.themeList ??
      ({
        dark: {
          [choice]: this.depInject(this.themeKeys as any),
        },
        bright: {
          [choice]: this.depInject(this.themeKeys as any),
        },
      } as any)
  }

  setTheme(name: ThemeName<_ThemeOptions>): void
  setTheme<T extends ThemeMode<_ThemeOptions> = undefined>(mode: T): void
  setTheme<T extends ThemeMode<_ThemeOptions> = undefined>(
    mode: T,
    name: ThemeName<_ThemeOptions, T>
  ): void

  setTheme(
    r1: string | symbol | number,
    r2: string | symbol | number = choice
  ): boolean {
    // 输入的第一项如果是模式
    if (r1 in this.themeList) {
      this.setup(this.themeList[r2][r2])
      return true
    }
    // 输入的第一项如果不是模式，就要在颜色列表里搜寻需要的颜色方案
    for (const modeKey in this.themeList) {
      if (Object.prototype.hasOwnProperty.call(this.themeList, modeKey)) {
        const modeValue = this.themeList[modeKey]
        for (const themeKey in modeValue) {
          if (Object.prototype.hasOwnProperty.call(modeValue, themeKey)) {
            if (themeKey === r1) {
              this.setup((this.defInjKey as any)[modeKey][r1])
              return true
            }
          }
        }
      }
    }
    return false
  }

  setup(theme: GetObjInjectValue<GetThemeKeys<_ThemeOptions>>): void {}
}

type ThemeMode<_ThemeOptions> = keyof GetThemeList<_ThemeOptions>
type ThemeName<
  _ThemeOptions,
  T extends ThemeMode<_ThemeOptions> = ThemeMode<_ThemeOptions>
> = {
  [k in keyof GetThemeList<_ThemeOptions>]: k extends T
    ? keyof GetThemeList<_ThemeOptions>[k]
    : never
} extends {
  [k in T]: infer FT
}
  ? FT
  : never

const test1 = new Theme({
  defThemeKeys(provide) {
    return { test3: provide('') }
  },
  themeList: {
    dark: { test3: { test3: '' } },
    bright: { test6: { test3: '' } },
  },
})

console.log(test1.setTheme('bright', 'test6'))
type GetThemeList<
  _ThemeOptions extends ThemeOptions<_ThemeOptions>,
  _ThemeList extends { dark?: any; bright?: any } = DefaultType<
    _ThemeOptions['themeList'],
    { dark: {}; bright: {} }
  >
> = _ThemeList

type DefaultType<T, Default = {}> = T extends undefined ? Default : T

type GetThemeKeys<_ThemeOptions extends ThemeOptions<_ThemeOptions>> =
  _ThemeOptions['defThemeKeys'] extends (...rest: any[]) => infer __ThemeKeys
    ? __ThemeKeys
    : {}
