import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface CH extends Length<LengthUnit.CH> {}

/**
 * 这一单位代表元素所用字体 font 中“0”这一字形的宽度（"0"，Unicode字符U+0030），更准确地说，是“0”这一字形的预测尺寸（advance measure）。
 *
 * 如果无法确定“ 0”字形的大小，则必须假定其宽为 0.5em，高为 1em。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function ch(l: number): CH {
  return sufUnit(l, LengthUnit.CH)
}
