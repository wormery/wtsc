import {
  _static,
  relative,
  absolute,
  sticky,
  fixed,
} from '../../CSSValue/types'
export type PositionValue = _static | relative | absolute | sticky | fixed

export interface PositionInterface<R> {
  position(value: PositionValue): R
}
