import { GlobalCSSValues } from '../../../CSSValue/types'
import { ToString } from '../../../core/WTSC/types'
export type FlexGrow = GlobalCSSValues | number
export interface FlexGrowInterface {
  flexGrow(flexGrow: FlexGrow): ToString
}
