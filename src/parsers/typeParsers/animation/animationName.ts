import { none, GlobalCSSValues } from '../../../CSSValue/types'
import { Keyframes } from '../../../CSSValue/keyframs'
export type AnimationNameValue = GlobalCSSValues | none | Keyframes
export interface AnimationNameInterface<R> {
  animationName(value: AnimationNameValue): R
}
