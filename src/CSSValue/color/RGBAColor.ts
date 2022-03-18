import { Percentage } from '../Percentage'
import { RGBColor, rgb } from './RGBColor'
export interface RGBAColor extends RGBColor {}

function out(this: RGBAColor): string {
  return `rgba(${this.r.toString()}, ${this.g.toString()}, ${this.b.toString()},${this.a.toString()})`
}

/**
 * rgb(255, 255, 255)
 *
 * @author meke
 * @export
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {*}  {RGB}
 */
export function rgba(
  r: number | Percentage,
  g: number | Percentage,
  b: number | Percentage,
  a: number | Percentage
): RGBAColor {
  const c = rgb(r, g, b, a)
  c.out = out
  return c
}
