import { SufUnit, sufUnit } from './suf'
import { Clone } from '../../utils/interface'
export enum LengthUnit {
  CAP = 'cap',

  CH = 'ch',

  /**
   * 字体的一个根据设备大小改变的单位，可以手动指定
   */
  EM = 'em',

  EX = 'ex',
  IC = 'ic',
  LH = 'lh',
  REM = 'rem',
  RLH = 'rlh',
  /**
   * 屏幕的高度
   */
  VH = 'vh',
  /**
   * 屏幕的宽
   */
  VW = 'vw',
  VI = 'vi',
  VB = 'vb',

  /**
   * 屏幕长和宽最小的那个
   */
  VMIN = 'vmin',

  /**
   * 屏幕长和宽最大的那个
   */
  VMAX = 'vmax',

  /**
   * 像素单位
   */
  PX = 'px',

  /**
   * 厘米
   */
  CM = 'cm',

  /**
   * 毫米
   */
  MM = 'mm',

  /**
   * 四分之一毫米。1Q = 1/40 * 1cm
   */
  Q = 'Q',

  /**
   * 英寸
   */
  IN = 'in',

  /**
   * One pica. 1pc = 12pt = 1/6th of 1in.
   */
  PC = 'pc',

  /**
   * One point. 1pt = 1/72nd of 1in.
   */
  PT = 'pt',

  MOZMM = 'mozmm',

  FR = 'fr',
}

export type LengthUnitValue = keyof typeof LengthUnit extends infer K
  ? K extends keyof typeof LengthUnit
    ? typeof LengthUnit[K]
    : never
  : never

/**
 * Length可以导入对应的单位方法来
 *
 * @author meke
 * @export
 * @class Length
 */
export interface Length<U extends LengthUnitValue = LengthUnitValue>
  extends SufUnit<U>{
  unit: U
}

export function len<U extends LengthUnitValue = LengthUnitValue>(
  l: number,
  unit: U
): Length<U> {
  return sufUnit(l, unit)
}
