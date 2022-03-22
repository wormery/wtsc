import { Inject } from '../inject/inject'
import { InjectOptions } from '../inject/option'
import { GetObjInjectValue } from '../inject/types'
import { choice, Theme } from './theme'
import { ThemeKeys } from './tpyes'
import { InjectKey } from '../inject/injectKey'

export interface ThemeOptions<TheKey extends ThemeKeys = {}>
  extends InjectOptions {
  defThemeKeys?: (inject: Inject) => TheKey
  themeList?: {
    [mode in string]: Themes<TheKey>
  }
}
export interface Themes<TheKey> {
  [themeName: string]: GetObjInjectValue<TheKey>
}
export type TheType<Options extends ThemeOptions> =
  Options['defThemeKeys'] extends (...rest: any[]) => infer __ThemeKeys
    ? __ThemeKeys
    : {}

export type GetTheKey<O extends ThemeOptions> =
  unknown extends O['defThemeKeys']
    ? {}
    : O['defThemeKeys'] extends (rest: any) => infer TheKey
    ? TheKey extends ThemeKeys
      ? TheKey
      : {}
    : {}

type xxx = ThemeList<{ themeList: { xxx: { tmea: { sss: '55' } } } }>
export type ThemeList<
  O extends ThemeOptions,
  TheKey extends ThemeKeys = GetTheKey<O>,
  OptionsThemeList = unknown extends O['themeList'] ? {} : O['themeList']
> = Merge<
  {
    [choice]: Themes<TheKey>
    default: {
      [choice]: GetObjInjectValue<TheKey>
    }
  },
  {
    [mode in keyof OptionsThemeList]: OptionsThemeList[mode] extends object
      ? Merge<
          OptionsThemeList[mode],
          {
            [choice]: GetObjInjectValue<TheKey>
          }
        >
      : {}
  }
>

export type Merge<X extends object, Y extends object> = {
  [k in keyof X | keyof Y]: k extends keyof X
    ? X[k]
    : k extends keyof Y
    ? Y[k]
    : never
}

export type DefaultType<T, Default = {}> = T extends undefined ? Default : T

export type ThemeMode<Options extends ThemeOptions> =
  keyof ThemeList<Options> extends infer X
    ? X extends string
      ? X
      : never
    : never

export type ThemeName<
  Options extends ThemeOptions,
  Q extends ThemeMode<Options> = ThemeMode<Options>
> = Q extends string
  ? Q extends infer T
    ? T extends Q
      ? keyof ThemeList<Options>[T]
      : never
    : never
  : never
