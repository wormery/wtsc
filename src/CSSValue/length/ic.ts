import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface IC extends Length<LengthUnit.IC> {}

/**
 * 等于在用于渲染的字体中找到的“水”（CJK 表意文字 "水"，U + 6C34）字形的使用预先测量（used advance measure）。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function ic(l: number): IC {
  return sufUnit(l, LengthUnit.IC)
}
