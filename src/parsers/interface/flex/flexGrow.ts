import { GlobalCSSValues } from '../../../CSSValue/types'
export type FlexGrow = GlobalCSSValues | number
export interface FlexGrowInterface {
  flexGrow(flexGrow: FlexGrow): PRV
}
