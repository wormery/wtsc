import SufUnit from './SufUnit'

export enum LengthUnit {
  cap = 'cap',

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
  Q = 'Q',

  IN = 'in',

  PC = 'pc',

  PT = 'pt',

  MOZMM = 'mozmm',

  FR = 'fr',
}

/**
 * Length可以导入对应的单位方法来
 *
 * @author meke
 * @export
 * @class Length
 */
export class Length extends SufUnit {
  constructor(public n: number, public unit: LengthUnit) {
    super(n, unit)
  }
}

/**
 * 表示元素字体 font 的“上限高度”（cap height，大写字母的标称高度（nominal height））。*
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function cap(l: number): Length {
  return new Length(l, LengthUnit.cap)
}

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
export function ch(l: number): Length {
  return new Length(l, LengthUnit.CH)
}

/**
 * 相对长度单位，这个单位表示元素的 font-size 的计算值。如果用在font-size 属性本身，它则表示元素继承的 font-size 值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function em(l: number): Length {
  return new Length(l, LengthUnit.EM)
}

/**
 * 这个单位表示元素font的 x-height 。在含有“X”字母的字体中，它是该字体的小写字母的高度；对于很多字体来说，1ex ≈ 0.5em。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function ex(l: number): Length {
  return new Length(l, LengthUnit.EX)
}

/**
 * 等于在用于渲染的字体中找到的“水”（CJK 表意文字 "水"，U + 6C34）字形的使用预先测量（used advance measure）。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function ic(l: number): Length {
  return new Length(l, LengthUnit.IC)
}

/**
 * 
等于使用它的元素的 line-height 属性的计算值，转换为绝对长度.
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function lh(l: number): Length {
  return new Length(l, LengthUnit.LH)
}

/**
 * 这个单位代表根元素（通常为<html> 元素）的 font-size 大小。当用在根元素的 font-size 上面时 ，它代表了它的初始值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function rem(l: number): Length {
  return new Length(l, LengthUnit.REM)
}

/**
 * 等于根元素行高 line-height 的计算值。当用于设置根元素的行高 line-height 或是字体大小 font-size 时，该rlh指的是根元素行高 line-height 或字体大小 font-size 的初始值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function rlh(l: number): Length {
  return new Length(l, LengthUnit.RLH)
}

/**
 * 视口的初始包含块的高度的 1%。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vh(l: number): Length {
  return new Length(l, LengthUnit.VH)
}

/**
 * 视口的初始包含块的宽度的 1%。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vw(l: number): Length {
  return new Length(l, LengthUnit.VW)
}

/**
 * 等于初始包含块大小的 1%，在根元素的行内轴方向上。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vi(l: number): Length {
  return new Length(l, LengthUnit.VI)
}

/**
 * 等于初始包含块大小的 1%，在根元素的区块轴方向上。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vb(l: number): Length {
  return new Length(l, LengthUnit.VB)
}

/**
 * 视口高度 vw 和宽度 vh 两者之间的最小值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vmin(l: number): Length {
  return new Length(l, LengthUnit.VMIN)
}

/**
 * 视口高度 vw 和宽度 vh 两者之间的最大值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vmax(l: number): Length {
  return new Length(l, LengthUnit.VMAX)
}

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
export function px(l: number): Length {
  return new Length(l, LengthUnit.PX)
}

/**
 * 一厘米。 1cm = 96px / 2.54。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function cm(l: number): Length {
  return new Length(l, LengthUnit.CM)
}

/**
 * 一毫米。 1mm = 1/10 * 1cm。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function mm(l: number): Length {
  return new Length(l, LengthUnit.MM)
}

/**
 * 四分之一毫米。1Q = 1/40 * 1cm。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function Q(l: number): Length {
  return new Length(l, LengthUnit.Q)
}

/**
 * 一英寸。1in = 2.54cm = 96px。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function inUnit(l: number): Length {
  return new Length(l, LengthUnit.IN)
}

/**
 * 一十二点活字（pica），六分之一英寸。 1pc = 12pt = 1/6 * 1in。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function pc(l: number): Length {
  return new Length(l, LengthUnit.PC)
}

/**
 * 一磅（point），72 分之一英寸。1pt = 1/12 * 1pc = 1/72 * 1in。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function pt(l: number): Length {
  return new Length(l, LengthUnit.PT)
}

/**
 * 一个实验单位，无论显示器的尺寸或分辨率如何，都会尝试在一毫米处进行渲染。很少会用到，但可能在移动设备上特别有用。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function mozmm(l: number): Length {
  return new Length(l, LengthUnit.MOZMM)
}
