import { GlobalCSSValues } from '../../../CSSValue/types'

export declare type FlexGrow = GlobalCSSValues | number

export interface FlexGrowInterface<R> {
  flexGrow(flexGrow: FlexGrow): R
}
