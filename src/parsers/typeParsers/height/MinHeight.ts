import { Length } from '../../../CSSValue/length/Lingth'
import { Percentage } from '../../../CSSValue/Percentage'
import {
  GlobalCSSValues,
  auto,
  none,
  maxContent,
  minContent,
  fixContent,
} from '../../../CSSValue/types'

export type MinHeightValue =
  | GlobalCSSValues
  | Length
  | Percentage
  | auto
  | none
  | maxContent
  | minContent
  | fixContent

export interface MinHeightInterface<R> {
  minHeight(value: MinHeightValue): R
}
