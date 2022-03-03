import { Inject } from '../inject/inject'
import { InjectOptions } from '../inject/option'
import { GetObjInjectValue } from '../inject/types'
import { choice } from './theme'
import { ThemeKeys } from './tpyes'

export interface ThemeOptions<Options extends ThemeOptions<Options>>
  extends InjectOptions {
  defThemeKeys?: (inject: Inject) => ThemeKeys
  themeList?: {
    dark: Themes<Options>
    bright: Themes<Options>
    [choice]?: GetObjInjectValue<GetThemeKeys<Options>>
  }
}
export interface Themes<Options extends ThemeOptions<Options>> {
  [choice]?: GetObjInjectValue<GetThemeKeys<Options>>
  [k: string]: GetObjInjectValue<GetThemeKeys<Options>>
}
export type GetThemeKeys<Options extends ThemeOptions<Options>> =
  Options['defThemeKeys'] extends (...rest: any[]) => infer __ThemeKeys
    ? __ThemeKeys
    : {}

export type GetThemeList<
  _ThemeOptions extends ThemeOptions<_ThemeOptions>,
  _ThemeList extends { dark?: any; bright?: any } = DefaultType<
    _ThemeOptions['themeList'],
    { dark: {}; bright: {} }
  >
> = _ThemeList

export type DefaultType<T, Default = {}> = T extends undefined ? Default : T

export type ThemeMode<Options extends ThemeOptions<Options>> =
  keyof GetThemeList<Options>

export type ThemeName<
  Options extends ThemeOptions<Options>,
  T extends ThemeMode<Options> = ThemeMode<Options>
> = {
  [k in keyof GetThemeList<Options>]: k extends T
    ? keyof GetThemeList<Options>[k]
    : never
} extends {
  [k in T]: infer FT
}
  ? FT
  : never
