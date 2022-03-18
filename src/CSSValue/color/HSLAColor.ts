import { Percentage } from '../Percentage'
import { Angle } from '../angle/angle'
import { Alpha } from './Color'
import { HSLColor } from './HSLColor'
export interface HSLAColor extends HSLColor, Alpha {}

function out(this: HSLAColor): string {
  return `hsl(${this.h.toString()}, ${this.s.toString()}, ${this.l.toString()},${this.a.toString()})`
}
export function hsla(
  h: Angle | number,
  s: Percentage,
  l: Percentage,
  a: number | Percentage
): HSLAColor {
  return { h, s, l, a, out }
}
