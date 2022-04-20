import { renderData } from '.'
import { defInjKey } from '../inject/injectKey'
import { Data } from '../inject/types'
import {
  uniteClassSelectors,
  uniteHoxClassNames,
  uniteClassNames,
} from '../../utils/cssUtils'

export interface StyleData {
  id: symbol
  name: string
  hoxClassNames: string
  classNames: string
  classSelectors: string
  style: Data<string, string>
  part: Data<symbol, string>
  parent?: StyleData | undefined | null
}

export const styleDataInj = defInjKey<StyleData, true>(false)

export function defStyleData(
  name: string,
  parent: StyleData = renderData,
  id: symbol = Symbol('StyleDataId')
): StyleData {
  return {
    id,
    name,
    hoxClassNames: uniteHoxClassNames(parent.hoxClassNames, name),
    classNames: uniteClassNames(parent.classNames, name),
    classSelectors: uniteClassSelectors(parent.classSelectors, name),
    style: {},
    part: {},
    parent,
  }
}
