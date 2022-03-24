import { WTSC } from '../core/WTSC/WTSC'
export * from './length'
export * from './Percentage'
export * from './types'
export * from './CFn'
export * from './color'
export * from './keyframs'

export interface OutValue<T = string> {
  out: (wtsc: WTSC<any, any>) => T
}
