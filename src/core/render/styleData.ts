import { defInjKey } from '../inject/injectKey'
import { Data } from '../inject/types'

export interface StyleData {
  id: symbol
  name: string
  style: Data<string, string>
  part: Data<symbol, string>
  parent?: StyleData | undefined | null
}
export const styleDataInj = defInjKey<StyleData, true>(false)

export function defStyleData(
  name: string,
  parent?: StyleData | undefined | null,
  id: symbol = Symbol('StyleDataId')
): StyleData {
  return {
    id,
    name,
    style: {},
    part: {},
    parent,
  }
}
