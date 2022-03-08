import { ToString } from '../../../core/WTSC/types'
import {
  GlobalCSSValues,
  fixContent,
  auto,
  none,
  maxContent,
  minContent,
} from '../../../CSSValue/types'
import { Length } from '../../../CSSValue/Lingth'

export type MaxHeightValue =
  | GlobalCSSValues
  | Length
  | Performance
  | auto
  | none
  | maxContent
  | minContent
  | fixContent

export interface MaxHeightInterface {
  maxHeight(value: MaxHeightValue): ToString
}
