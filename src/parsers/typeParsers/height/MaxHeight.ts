import {
  GlobalCSSValues,
  fixContent,
  auto,
  none,
  maxContent,
  minContent,
} from '../../../CSSValue/types'
import { Length } from '../../../CSSValue/length/Lingth'

export type MaxHeightValue =
  | GlobalCSSValues
  | Length
  | Performance
  | auto
  | none
  | maxContent
  | minContent
  | fixContent

export interface MaxHeightInterface<R> {
  maxHeight(value: MaxHeightValue): R
}
