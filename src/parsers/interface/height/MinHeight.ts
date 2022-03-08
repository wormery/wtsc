import { ToString } from '../../../core/WTSC/types'
import { BaseParsers } from '../../BaseParsers'
import { Length } from '../../../CSSValue/Lingth'
import { Percentage } from '../../../CSSValue/Percentage'
import {
  auto,
  none,
  maxContent,
  minContent,
  fixContent,
} from '../../../CSSValue/types'

export type MinHeightValue =
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
