import { Inject } from '../inject/inject'
import { GetObjInjectValue } from '../inject/types'
import { ThemeList, GetTheKey, ThemeOptions } from './option'
import { ThemeKeys } from './tpyes'
import { SetThemeFunction } from './SetThemeApi'

export const choice = Symbol('choice')

export interface Theme<
  Options extends ThemeOptions,
  TheType extends ThemeKeys = GetTheKey<Options>
> extends Inject {
  the: TheType

  themeList: ThemeList<Options>

  setTheme: SetThemeFunction<Options>

  setup(theme: GetObjInjectValue<GetTheKey<Options>>): void
}
