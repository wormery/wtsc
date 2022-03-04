import { CVar, Length, Percentage, CMin, CMax } from '.'
export type auto = 'auto'

/**
 * 该值是继承来的值，并且它的 cssText 属性值中包含"inherit"。
 */
export type inherit = 'inherit'

/**
 * initial CSS关键字将属性的初始（或默认）值应用于元素。
 * 不应将初始值与浏览器样式表指定的值混淆。它可以应用于任
 * 何CSS属性。这包括CSS简写all，initial 可用于将所有
 * CSS属性恢复到其初始状态。
 */
export type initial = 'initial'

/**
 * CSS关键字 unset 可以分为两种情况，如果这个属性本来
 * 有从父级继承的值（这个属性默认可以继承，且父级有定义），
 * 则将该属性重新设置为继承的值，如果没有继承父级样式，
 * 则将该属性重新设置为初始值。换句话说，在第一种情况下
 * （继承属性）它的行为类似于inherit ，在第二种情况下
 * （非继承属性）类似于initial。它可以应用于任何CSS
 * 属性，包括CSS简写属性 all 。
 */
export type unset = 'unset'

/**
 * 指定依赖于声明所属的样式表原点的行为
 */
export type revert = 'revert'

export type fixContent = 'fix-content'
export type maxContent = 'max-content'
export type minContent = 'min-content'
export type available = 'available'
export type fill = 'fill'
export type borderBox = 'border-box'
export type contentBox = 'content-box'

export type _static = 'static'
export type relative = 'relative'
export type absolute = 'absolute'
export type fixed = 'fixed'
export type sticky = 'sticky'

/**
 * position的值
 */
export type PositionType = _static | relative | absolute | sticky | fixed

export type contents = 'contents'
export type none = 'none'

export type DisplayBoxType = contents

/**
 * 全局cssvalue,都可能用得上的值
 */
export type GlobalCSSValues = inherit | initial | unset | revert | CVar

/**
 * css尺寸相关的类型
 */
export type CSSSizeTypes = Length | Percentage | GlobalCSSValues | CMin | CMax

/**
 * css属性all的值类型
 */
export type CssAllValueType = inherit | initial | unset | revert

/**
 * 高宽的类型
 */
export type CSSHWType =
  | Length
  | Percentage
  | GlobalCSSValues
  | auto
  | fixContent
  | maxContent
  | minContent
  | available
  | fill
