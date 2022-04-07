import { TimingFunction } from './timingFunction'
export interface CubicBezier extends TimingFunction {
  vlaue: number[]
}

const cubicBezierPropoType = {
  out(this: CubicBezier) {
    return `cubic-bezier(${this.vlaue.join(', ')})`
  },
}

export function cubicBezier(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): CubicBezier {
  return Object.setPrototypeOf(
    { value: [x1, y1, x2, y2] },
    cubicBezierPropoType
  )
}
