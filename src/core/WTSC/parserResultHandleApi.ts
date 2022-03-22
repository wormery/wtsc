import { isUndef, isString, isFunction } from '@wormery/utils'
import { WTSCOptions } from './option'
import { isInjectKey } from '../inject/injectKey'
import { WTSC, wtsc } from './WTSC'
import { StyleValue } from './types'
import { skip } from '../api/error'
import { parserSpace } from '../parser/ParserSpace'
let csskey = '333'
export function setKey(_key: string): void {
  csskey = _key
}
/**
 * @author meke
 * @private
 * @template F
 * @param {string} key
 * @param {F} handle
 * @param {...any[]} rest
 * @return {*}  {WTSC<T>}
 * @memberof WTSC
 */
export function parsersResultHandle(...rest: StyleValue): WTSC<any, any> {
  return toHandle(rest)
}
function toHandle(rest: StyleValue): WTSC<any, any> {
  parserSpace(csskey, () => {
    wtsc.addAny(csskey, ...rest)
  })
  return wtsc
}
export function Add(key: string, ...rest: StyleValue): WTSC<any, any> {
  setKey(key)
  return toHandle(rest)
}

function warningForStyleToString(index: number, msg: string): never {
  skip(`第${index}个参数，`, msg)
}
function theInjectkeyGetsAnUndefinedWarning(index: number): never {
  warningForStyleToString(index, 'Injectkey返回了一个undefined')
}
function aUndefWarning(index: number): never {
  warningForStyleToString(index, `第${index}个参数是一个undefined`)
}
function notAFunctionWarn(index: number): void {
  warningForStyleToString(
    index,
    `当前正在处理的StyleValue的第${index}个参数，既不是string也不具有out方法，\
本css将会被忽略，请查看您是否有强制类型转换来解决问题`
  )
}
export function styleValueToString<O extends WTSCOptions, ParsersInterface>(
  wtsc: WTSC<O, ParsersInterface>,
  rest: StyleValue
): string {
  return rest
    .map((v: any, index) => {
      if (isInjectKey(v)) {
        // undefine跳过本条css不处理，通用错误处理会记录处理情况
        v = wtsc.inject(v) as any
        if (__DEV__) {
          if (isUndef(v)) {
            theInjectkeyGetsAnUndefinedWarning(index)
          }
        }
      }

      if (isString(v)) {
        return v
      }

      if (__DEV__) {
        if (isUndef(v)) {
          aUndefWarning(index)
        }
      }

      if (__DEV__) {
        if (!isFunction(v.out)) {
          notAFunctionWarn(index)
        }
      }
      return v.out(wtsc)
    })
    .join(' ')
}
