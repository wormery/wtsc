import { TimingFunction } from './timingFunction'
import { setPrototypeOf } from '../../utils/utils'
export interface CubicBezier extends TimingFunction {
  value: number[]
}

const cubicBezierPropoType = {
  out(this: CubicBezier) {
    return `cubic-bezier(${this.value.join(',')})`
  },
} as any as TimingFunction

export function cubicBezier(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): CubicBezier {
  return setPrototypeOf({ value: [x1, y1, x2, y2] }, cubicBezierPropoType)
}
