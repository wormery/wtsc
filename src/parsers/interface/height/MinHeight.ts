import { ToString } from '../../../core/WTSC/types'
import { Length } from '../../../CSSValue/Lingth'
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

export interface MinHeightInterface {
  minHeight(value: MinHeightInterface): ToString
}
