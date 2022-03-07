import { isInjectKey } from '../inject/api'
import { isFunction, isUndef } from '@wormery/utils'
import { ParsersError, parsersResultHandleWarn, ParsersSkip } from '..'
import { warn, notAParserReturnValueWarn, notAFunctionWarn } from '../api/warn'
import { isParserReturnValue } from './types'
import { WTSC } from '.'

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
export function parsersResultHandle(
  wtsc: any,
  key: string,
  parsers: any,
  ...rest: any[]
): void {
  try {
    filterInjectKeyOfRest(wtsc, rest)

    const parser = parsers[key]

    if (__DEV__) {
      if (!isFunction(parser)) {
        notAFunctionWarn()
        return
      }
    }

    const value = parser.call(wtsc.parsers, ...rest)
    // 是空的情况是不会处理的
    if (__DEV__) {
      if (!isParserReturnValue(value)) {
        notAParserReturnValueWarn(value)
        return
      }
    }

    const cssValue = value.toString()
    wtsc.setCSS(key as any, cssValue)
  } catch (E) {
    if (__DEV__) {
      if (E instanceof ParsersSkip) {
        parsersResultHandleWarn('使用了跳过')
      } else if (E instanceof ParsersError) {
        warn(E.toString())
      } else {
        throw E
      }
    }
  }
}

function filterInjectKeyOfRest(wtsc: WTSC, rest: any[]): void {
  // 过滤掉InjectKey为值,手动得到也是为了更多效率选择
  for (let i = 0; i < rest.length; i++) {
    const r = rest[i]
    if (!isInjectKey(r)) {
      break
    }
    const k = wtsc.inject(r)
    if (isUndef(k)) {
      // 遇到任何undefined就跳过处理
      ParsersSkip.throw()
    }
    rest[i] = k
  }
}
