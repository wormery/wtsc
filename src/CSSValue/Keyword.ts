export const cauto = 'auto'
export type Cauto = typeof cauto

/**
 * 该值是继承来的值，并且它的 cssText 属性值中包含"inherit"。
 */
export const cinherit = 'inherit'

/**
 * initial CSS关键字将属性的初始（或默认）值应用于元素。
 * 不应将初始值与浏览器样式表指定的值混淆。它可以应用于任
 * 何CSS属性。这包括CSS简写all，initial 可用于将所有
 * CSS属性恢复到其初始状态。
 */
export const cinitial = 'initial'

/**
 * CSS关键字 unset 可以分为两种情况，如果这个属性本来
 * 有从父级继承的值（这个属性默认可以继承，且父级有定义），
 * 则将该属性重新设置为继承的值，如果没有继承父级样式，
 * 则将该属性重新设置为初始值。换句话说，在第一种情况下
 * （继承属性）它的行为类似于inherit ，在第二种情况下
 * （非继承属性）类似于initial。它可以应用于任何CSS
 * 属性，包括CSS简写属性 all 。
 */
export const cunset = 'unset'

/**
 * 指定依赖于声明所属的样式表原点的行为
 */
export const crevert = 'revert'

export const cfixContent = 'fix-content'
export const cmaxcontent = 'max-content'
export const cmincontent = 'min-content'
export const cavailable = 'available'
export const cfill = 'fill'
export const cborderBox = 'border-box'
export const ccontentBox = 'content-box'

export type PositionType =
  | typeof cstatic
  | typeof crelative
  | typeof cabsolute
  | typeof csticky
  | typeof cfixed

export const cstatic = 'static'
export const crelative = 'relative'
export const cabsolute = 'absolute'
export const cfixed = 'fixed'
export const csticky = 'sticky'

export type DisplayBoxType = typeof ccontents
export const ccontents = 'contents'
export const cnone = 'none'
