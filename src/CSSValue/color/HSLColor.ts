import { Percentage } from '../Percentage'
import { Angle } from '../angle/angle'
import { hsla, HSLAColor } from './HSLAColor'
import { Color } from './Color'
export interface HSLColor extends Color {
  h: Angle | number
  s: Percentage
  l: Percentage
}

function out(this: HSLColor): string {
  return `hsl(${this.h.toString()}, ${this.s.toString()}, ${this.l.toString()})`
}

export function hsl(h: Angle | number, s: Percentage, l: Percentage): HSLColor

export function hsl(
  h: Angle | number,
  s: Percentage,
  l: Percentage,
  a: number | Percentage
): HSLAColor

export function hsl(
  h: Angle | number,
  s: Percentage,
  l: Percentage,
  a?: number | Percentage
): HSLColor | HSLAColor {
  if (a) {
    return hsla(h, s, l, a)
  }
  return { h, s, l, out }
}
