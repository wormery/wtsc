import { Percentage } from '../Percentage'
import { Angle } from '../angle/angle'
import { Color } from './Color'
import { HWBAColor, hwba } from './HWBAColor'
export interface HWBColor extends Color {
  h: number | Angle
  w: Percentage
  b: Percentage
}
function out(this: HWBColor): string {
  return `hwb(${this.h.toString()}, ${this.w.toString()}, ${this.b.toString()})`
}

export function hwb(h: Angle | number, w: Percentage, b: Percentage): HWBColor

export function hwb(
  h: Angle | number,
  w: Percentage,
  b: Percentage,
  a: number | Percentage
): HWBAColor

export function hwb(
  h: Angle | number,
  w: Percentage,
  b: Percentage,
  a?: number | Percentage
): HWBColor | HWBAColor {
  if (a) {
    return hwba(h, w, b, a)
  }
  return { h, w, b, out }
}
