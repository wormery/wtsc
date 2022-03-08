import { isFunction, isUndef } from '@wormery/utils'
import { ParsersSkip } from '..'
import { notAParserReturnValueWarn, notAFunctionWarn } from '../api/warn'
import { isParserReturnValue } from './types'
import { WTSCOptions } from './option'
import { isInjectKey } from '../inject/injectKey'
import { WTSC } from './WTSC'

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
export function parsersResultHandle<Options extends WTSCOptions<Options>>(
  wtsc: WTSC<Options>,
  key: string,
  parsers: any,
  ...rest: any[]
): void {
  filterInjectKeyOfRest(wtsc, rest)

  const parser = parsers[key]

  if (__DEV__) {
    if (!isFunction(parser)) {
      notAFunctionWarn()
      return
    }
  }

  const value = parser.call(parsers, ...rest)
  // 是空的情况是不会处理的
  if (__DEV__) {
    if (!isParserReturnValue(value)) {
      notAParserReturnValueWarn(value)
      return
    }
  }

  const cssValue = value.toString()
  wtsc.addAny(key as any, cssValue)
}

function filterInjectKeyOfRest<O extends WTSCOptions<O>>(
  wtsc: WTSC<O>,
  rest: any[]
): void {
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
