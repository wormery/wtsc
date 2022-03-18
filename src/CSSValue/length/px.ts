import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface PX extends Length<LengthUnit.PX> {}

/**
 * 一像素（pixel）。对于普通的屏幕，通常是一个设备像素（点）。
 * 对于打印机和高分辨率屏幕，一个 CSS 像素往往占多个设备像素。
 * 一般来说，每英寸的像素的数量保持在 96 左右， 1px = 1in 的 96 分之一。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function px(l: number): PX {
  return sufUnit(l, LengthUnit.PX)
}
