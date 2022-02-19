export function warn(msg: string, ...args: any[]): void {
  console.warn(msg, ...args)
}
export function parsersResultHandleWarn(
  key: string,
  msg: string,
  ...args: any[]
): void {
  warn(`WTSC>parsersResultHandle>${key}: ${msg}`, ...args)
}
