import { getCurrCSSKey } from '../parser/preParser'

export function warn(msg: string, ...args: any[]): void {
  if (__DEV__) {
    console.warn(msg, ...args)
  }
}
export function parsersResultHandleWarn(msg: string, ...args: any[]): void {
  warn(`WTSC>parsersResultHandle>${getCurrCSSKey()}: ${msg}`, ...args)
}
