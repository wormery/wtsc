import { Theme, choice } from './theme'
import { ThemeOptions } from './option'
import { injectPrototype } from '../inject/api'
import { defSetThemeFunction } from './SetThemeApi'
import { ProviderStorage, createInjectStorage } from '../inject/providerApi'

export function defThemePrototype<Options extends ThemeOptions>(
  options: Options
): Theme<Options> {
  const example: Theme<Options> = {
    ...injectPrototype,
    the: undefined as any,
    themeList: undefined as any,
    setup(theme) {
      this.depProvide(theme, this.the as any)
    },
    setTheme: defSetThemeFunction<Options>(),
  }

  return example
}

export interface ThemeStorage<Options extends ThemeOptions>
  extends Theme<Options>,
    ProviderStorage {}

export function toBeCreateTheme<Options extends ThemeOptions>(
  options: Options
): ThemeStorage<Options> {
  const example = createInjectStorage(undefined, defThemePrototype(options))

  initDefThemeKeys(options, example, example)

  return example
}

export function initDefThemeKeys<Options extends ThemeOptions>(
  options: Options,
  example: ThemeStorage<Options>,
  prototype: Theme<Options>
): void {
  prototype.the =
    options.defThemeKeys?.call(example, example.provide.bind(example)) ??
    ({} as any)

  const defaul = example.depInject(prototype.the)

  const themeList = options.themeList ?? ({} as any)

  themeList.default = { [choice]: defaul }

  // 初始化选中主题
  Object.keys(themeList).forEach((key) => {
    themeList[key][choice] = theFirstOne(themeList[key]) ?? defaul
  })

  prototype.themeList = themeList
}

function theFirstOne(o: object): any {
  const keys = Object.keys(o)

  if (keys.length <= 0) {
    return undefined
  } else {
    return (o as any)[keys[0]]
  }
}
