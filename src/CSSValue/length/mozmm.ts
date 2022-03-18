import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface MOZMM extends Length<LengthUnit.MOZMM> {}

/**
 * 一个实验单位，无论显示器的尺寸或分辨率如何，都会尝试在一毫米处进行渲染。很少会用到，但可能在移动设备上特别有用。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function mozmm(l: number): MOZMM {
  return sufUnit(l, LengthUnit.MOZMM)
}
