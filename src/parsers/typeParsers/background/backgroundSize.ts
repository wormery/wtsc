import { contain, cover } from './keyword'
import { LengthOrPE, auto, GlobalCSSValues } from '../../../CSSValue/types'
export type BackgroundSizeRestValueType =
  //  keyword
  | [cover | contain]
  // 一个值
  | [LengthOrPE | auto]
  // 两个值
  | [LengthOrPE | auto, LengthOrPE | auto]
  // Other
  | [GlobalCSSValues]
