import { GlobalCSSValues } from '../../../CSSValue/types'
import { ToString } from 'src/core/WTSC/types'

export declare type FlexGrow = GlobalCSSValues | number

export interface FlexGrowInterface<R> {
  flexGrow(flexGrow: FlexGrow): R
}
