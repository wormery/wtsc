import { getCurrCSSKey } from '../parser/preParser'

export function warn(msg: string, ...args: any[]): void {
  if (__DEV__) {
    console.warn(msg, ...args)
  }
}
export function parsersResultHandleWarn(msg: string, ...args: any[]): void {
  warn(`WTSC>parsersResultHandle>${getCurrCSSKey()}: ${msg}`, ...args)
}
export function notAParserReturnValueWarn(value: any): void {
  parsersResultHandleWarn(
    '意外的值,本应该是naver，不应该运行到此\n' +
      '提示贴：如果是你实现了处理器，请查看' +
      getCurrCSSKey() +
      '的处理器，查看是否有强制类型转换，处理器parsers如果不需要输出行throw 一个parser错误就可以跳过处理，更多见官方网站;如果和你无关，请反馈到wtsc的Issues;',
    value
  )
}
export function notAFunctionWarn(): void {
  parsersResultHandleWarn(
    '发现处理器不是一个Function\n提示贴：如果是你实现了处理器，请查看' +
      getCurrCSSKey() +
      '的处理器，如果和你无关，请反馈到wtsc的Issues'
  )
}
