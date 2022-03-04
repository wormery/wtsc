import { __DEV__ } from '../..'

export function warn(msg: string, ...args: any[]): void {
  if (__DEV__) {
    console.warn(msg, ...args)
  }
}
export function parsersResultHandleWarn(
  key: string,
  msg: string,
  ...args: any[]
): void {
  warn(`WTSC>parsersResultHandle>${key}: ${msg}`, ...args)
}
