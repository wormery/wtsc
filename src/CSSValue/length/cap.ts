import { Length, len } from './Lingth'
import { LengthUnit } from '..'
export interface CAP extends Length<LengthUnit.CAP> {}

/**
 * 表示元素字体 font 的“上限高度”（cap height，大写字母的标称高度（nominal height））。*
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function cap(l: number): CAP {
  return len(l, LengthUnit.CAP)
}
