import { isObject } from '@wormery/utils'
import { WTSC, WTSCObject } from './WTSC'
import { WTSCOptions } from './option'
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

export function defBaseWTSC<The extends object = {}>(
  options: WTSCOptions<The>
): BaseWTSC<WTSCOptions<The>> {
  return defWTSC(options) as any
}

export type TypeWTSC<Options extends WTSCOptions> = WTSC<
  Options,
  TypeParsers<TypeWTSC<Options>>
>

export function defTypeWTSC<The extends object = {}>(
  options: WTSCOptions<The> = {}
): TypeWTSC<WTSCOptions<The>> {
  return defWTSC(options) as any
}

/**
 * 生成wtsc
 * @author meke
 * @export
 * @template Options
 * @param {Options} [defWTSCAPIOptions={} as any as Options]
 * @return {*}  {WTSC<Options>}
 */
export function defWTSC<The extends object = {}>(
  wtscOptions: WTSCOptions<The> = {}
): TypeWTSC<WTSCOptions<The>> {
  const defWTSCStorage = defWTSCStorageAPI(wtscOptions)
  return new WTSC(wtscOptions, defWTSCStorage)
}
