import { defInjKey } from '../inject/injectKey'
import { Data } from '../inject/types'
import { StyleData } from '../render/styleData'
import { uniteClassNames, uniteClassSelectors } from '../../utils/cssUtils'
import { styleToString } from './styleTostringApi'
import { CSSStyle } from './types'
import { getStyleData } from './WTSCPrototype'
export interface SelectorData {
  name: string
  selector: string
  pseudoClass?: Data<string, string>
  style: string
}

export const selectorDataInj = defInjKey<SelectorData>(false)

export function addClassSelectorData(
  w: any,
  className: string,
  global?: boolean
): void {
  const styleData = getStyleData(w)
  w.provide(
    createClassSelectorData(styleData, className, w.outStyle(), global),
    selectorDataInj
  )
}

/**
 * 创建 SelectorData
 * @author meke
 * @export
 * @param {StyleData} styleData
 * @param {string} className
 * @param {*} style
 * @return {*}  {SelectorData}
 */
export function createClassSelectorData(
  styleData: StyleData,
  className: string,
  style: CSSStyle,
  isGlobal?: boolean
): SelectorData {
  if (isGlobal) {
    return {
      name: className,
      selector: uniteClassSelectors('', className),
      style: styleToString(style),
    }
  }
  return {
    name: uniteClassNames(styleData.classNames, className),
    selector: uniteClassSelectors(styleData.classSelectors, className),
    style: styleToString(style),
  }
}

/**
 * 为selectorData添加PseudoClass
 * @author meke
 * @export
 * @param {SelectorData} selectorData
 * @param {string} pseudo
 * @param {*} style
 */
export function selectorDataPushPseudoClass(
  selectorData: SelectorData,
  pseudo: string,
  style: any
): void {
  pseudoClassPush(
    selectorData.pseudoClass ??
      (selectorData.pseudoClass = { [pseudo]: styleToString(style) }),
    pseudo,
    style
  )
}

export function pseudoClassPush(
  pseudoClass: Data<string, string>,
  pseudo: string,
  style: any
): void {
  pseudoClass[pseudo] = styleToString(style)
}
