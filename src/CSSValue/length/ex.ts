import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface EX extends Length<LengthUnit.EX> {}

/**
 * 这个单位表示元素font的 x-height 。在含有“X”字母的字体中，它是该字体的小写字母的高度；对于很多字体来说，1ex ≈ 0.5em。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function ex(l: number): EX {
  return sufUnit(l, LengthUnit.EX)
}
