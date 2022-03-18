import { HWBColor } from './HWBColor'
import { Alpha } from './Color'
import { Angle } from '../angle/angle'
import { Percentage } from '../Percentage'
export interface HWBAColor extends HWBColor, Alpha {}

function out(this: HWBAColor): string {
  return `hwb(${this.h.toString()}, ${this.w.toString()}, ${this.b.toString()}, ${this.a.toString()}`
}

export function hwba(
  h: Angle | number,
  w: Percentage,
  b: Percentage,
  a: number | Percentage
): HWBAColor {
  return { h, w, b, a, out }
}
