import { top, bottom, left, right, center } from './keyword'
import { Length } from '../../../../dist/CSSValue/length/Lingth'
import { Percentage } from '../../../CSSValue/Percentage'
import { GlobalCSSValues } from '../../../CSSValue/types'
export type Edge = top | bottom | left | right
export type LengthAndNumber = Length | number | Percentage
export type BackgroundPositionRestValue =
  // 一个值的语法
  | [center | Edge | LengthAndNumber]
  // 两个值的语法
  | [Edge, LengthAndNumber]
  | [LengthAndNumber, LengthAndNumber | Edge]
  // 三值语法
  | [Edge | center, LengthAndNumber | Edge | center, LengthAndNumber]
  // 四值语法
  | [Edge, LengthAndNumber, Edge, LengthAndNumber]
  // 其他
  | [GlobalCSSValues]
  | [center, center]
  | [Edge, Edge]
