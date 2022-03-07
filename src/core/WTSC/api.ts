import { isObject } from '@wormery/utils'
import { WTSC, WTSCObject } from './WTSC'
import { DefWTSCAPIOptions, WTSCAPI, WTSCOptions } from './option'
import { ConstraninedParsers } from '../../parsers/ConstrainedParsers'

/**
 * 是一个WTSC对象返回true
 * @author meke
 * @export
 * @param {unknown} v
 * @return {*}  {v is WTSC<any>}
 */
export function isWTSC(v: unknown): v is WTSC<any> {
  return isObject(v) && WTSCObject in v
}

export function defWTSC<Options extends DefWTSCAPIOptions<Options>>(
  defWTSCAPIOptions: Options = {} as any as Options
): WTSC<Options> {
  return defWTSCAPI(defWTSCAPIOptions).defWTSC()
}

/**
 * 生成一个定义WTSC的函数 传入一个类名
 * @author meke
 * @export
 * @template MyParsers
 * @param {new () => MyParsers} Parsers
 * @param {boolean} [cache=true]
 * @return {*}  {() => WTSC<T>}
 */
export function defWTSCAPI<Options extends DefWTSCAPIOptions<Options>>(
  options: Options = {} as any as Options
): WTSCAPI<Options> {
  options.parsers ?? (options.parsers = new ConstraninedParsers() as any)

  return {
    ...(options as any),
    defWTSC(defWTSCOoptions?: WTSCOptions<Options>) {
      const wtscOptions = {
        ...this,
        ...defWTSCOoptions,
      } as any as Options

      return new WTSC(wtscOptions)
    },
  }
}
