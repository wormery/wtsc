import { isUndef } from '@wormery/utils'
import { ParsersSkip } from '..'
import { WTSCOptions } from './option'
import { isInjectKey, InjectKey } from '../inject/injectKey'
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
export function parsersResultHandle<
  Options extends WTSCOptions<Options>,
  ParsersInterface
>(
  wtsc: WTSC<Options, ParsersInterface>,
  key: string,
  ...rest: ToString[]
): void {
  wtsc.addAny(key, restToString(wtsc, rest))
}

function restToString<O extends WTSCOptions<O>, ParsersInterface>(
  wtsc: WTSC<O, ParsersInterface>,
  rest: Array<ToString | InjectKey<ToString>>
): string {
  let s = ''
  // 过滤掉InjectKey为值,手动得到也是为了更多效率选择
  for (let i = 0; i < rest.length; i++) {
    let r = rest[i]
    if (isInjectKey(r)) {
      r = wtsc.inject(r) as string

      // dev环境检查undefine，如果不在dev环境有全局错误处理，
      // 另外默认您在dev环境会将这些基本问题解决
      if (__DEV__) {
        if (isUndef(r)) {
          // 遇到任何undefined就跳过处理
          ParsersSkip.throw()
        }
      }
    }
    s += r.toString() + ' '
  }

  return s.slice(0, s.length - 1)
}
