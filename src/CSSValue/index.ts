export * from './length'
export * from './Percentage'
export * from './types'
export * from './CFn'
export * from './color'
export * from './keyframs'
export * from './time'
export * from './timingFunction'
export * from './str'
export * as CssAttributeName from './CssAttributeName'
export * from './url'
export * from './image'
export * from './angle'

export interface OutValue<T = string> {
  out: (wtsc: any) => T
}
