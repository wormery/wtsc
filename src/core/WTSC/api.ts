import { isObject } from '@wormery/utils'
import { WTSC, WTSCObject } from './WTSC'
import { DefWTSCAPIOptions, WTSCAPI, WTSCOptions } from './option'
import { defWTSCStorageAPI } from './storage'
import { TypeParsers } from '../../parsers/typeParsers/TypeParsersInterface'
import { BaseParsersInterface } from '../../parsers/baseParsers/BaseParsers'

/**
 * 是一个WTSC对象返回true
 * @author meke
 * @export
 * @param {unknown} v
 * @return {*}  {v is WTSC<any>}
 */
export function isWTSC(v: unknown): v is WTSC<any, any> {
  return isObject(v) && WTSCObject in v
}

export type BaseWTSC<Options extends WTSCOptions<Options>> = WTSC<
  Options,
  TypeParsers<BaseParsersInterface<Options>>
>

export function defBaseWTSC<Options extends DefWTSCAPIOptions<Options>>(
  options: Options
): BaseWTSC<Options> {
  return defWTSC(options) as any
}

export type TypeWTSC<Options extends WTSCOptions<Options>> = WTSC<
  Options,
  TypeParsers<TypeWTSC<Options>>
>

export function defTypeWTSC<Options extends DefWTSCAPIOptions<Options>>(
  options: Options
): TypeWTSC<Options> {
  return defWTSC(options) as any
}
const wt = defTypeWTSC({})
wt.add.flex('auto')
/**
 * 生成wtsc
 * @author meke
 * @export
 * @template Options
 * @param {Options} [defWTSCAPIOptions={} as any as Options]
 * @return {*}  {WTSC<Options>}
 */
export function defWTSC<Options extends DefWTSCAPIOptions<Options>>(
  defWTSCAPIOptions: Options = {} as any as Options
): WTSC<Options, {}> {
  return defWTSCAPI(defWTSCAPIOptions).defWTSC() as any
}

/**
 * 生成wtsc的options，里面有个defWTSC的函数可以直接创建wtsc
 * @author meke
 * @export
 * @template Options
 * @param {Options} [options={} as any as Options]
 * @return {*}  {WTSCAPI<Options>}
 */
export function defWTSCAPI<Options extends DefWTSCAPIOptions<Options>>(
  options: Options = {} as any as Options
): WTSCAPI<Options> {
  const defWTSCStorage = defWTSCStorageAPI(options)
  return {
    ...(options as any),
    defWTSC(defWTSCOoptions?: WTSCOptions<Options>) {
      const wtscOptions = {
        ...this,
        ...defWTSCOoptions,
      } as any as Options

      return new WTSC(wtscOptions, defWTSCStorage)
    },
  }
}
