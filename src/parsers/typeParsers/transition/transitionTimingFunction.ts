import { inherit } from '../../../CSSValue/types'
import { TimingFunction } from '../../../CSSValue/timingFunction/timingFunction'
import {
  ease,
  easeIn,
  easeOut,
  easeInOut,
  linear,
  stepStart,
  stepEnd,
} from './keyword'
export type transitionTimingFunctionValueType =
  | TimingFunction
  | inherit
  | ease
  | easeIn
  | easeOut
  | easeInOut
  | linear
  | stepStart
  | stepEnd
  | String
