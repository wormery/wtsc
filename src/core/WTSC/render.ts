import { styleToString } from './styleTostringApi'
import { Data } from '../inject/types'
import { CSSStyle } from './types'
import nextTick from '../../utils/nextTick'
import { isBrowser } from '../../utils/utils'

export const styleData: Data<string, Data<string, CSSStyle>> = {}

// export const styleDom = document.createElement('style')
export let styleDom: HTMLStyleElement = {} as any
export type PseudoClass = '' | ':hover'

if (isBrowser) {
  const style = document.createElement('style')
  // 设置style属性
  styleDom.type = 'text/css'

  style.id = 'wtscStyle'

  // 将style样式存放到head标签
  document.getElementsByTagName('head')[0].appendChild(style)

  styleDom = style
}

export function render(): string {
  return Object.keys(styleData)
    .map((sconpeHash) =>
      Object.keys(styleData[sconpeHash])
        .map((selectors) =>
          styleToString(selectors, styleData[sconpeHash][selectors], true)
        )
        .join('\n')
    )
    .join('\n')
}

let isWillRun: boolean = false

export function update(
  scopeHash: string,
  selectors: string,
  cssStyle: CSSStyle
): void {
  ;(styleData[scopeHash] ?? (styleData[scopeHash] = {}))[selectors] = cssStyle

  if (isWillRun) {
    return
  }

  isWillRun = true

  nextTick(() => {
    styleDom.innerHTML = render()

    isWillRun = false
  })
}

export function initStyleDom(_styleDom: object): void {
  styleDom = _styleDom as any
}
