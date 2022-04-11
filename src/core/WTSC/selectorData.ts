import { defInjKey } from '../inject/injectKey'
import { Data } from '../inject/types'
interface SelectorData {
  name: string
  selector: string
  pseudoClass?: Data<string, string>
  style: string
}

export const selectorDataInj = defInjKey<SelectorData>(false)
