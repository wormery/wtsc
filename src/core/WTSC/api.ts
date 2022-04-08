import { isObject } from '@wormery/utils'
import { WTSC, WTSCObject } from './WTSC'
import { WTSCOptions } from './option'
import { createWTSCStorage, WTSCStorage } from './storage'
import {
  TypeParsers,
  TypeParsersOfReplaceUpdata,
} from '../../parsers/typeParsers/TypeParsersInterface'
import { BaseParsersInterface } from '../../parsers/baseParsers/BaseParsers'
import { defWtscPrototype } from './WTSCPrototype'
import { renderData } from '../render'
import { initDefThemeKeys } from '../theme/api'
import { defStyleData, styleDataInj } from '../render/styleData'

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

export type BaseWTSC<Options extends WTSCOptions> = WTSC<
  Options,
  TypeParsers<BaseParsersInterface<Options>>
>

export function defBaseWTSC<The extends object = {}>(
  options: Partial<WTSCOptions<The>>
): BaseWTSC<WTSCOptions<The>> {
  return defWTSC(options) as any
}

export type TypeWTSC<Options extends WTSCOptions> = WTSC<
  Options,
  TypeParsersOfReplaceUpdata<TypeWTSC<Options>>
>
export type DefaultTypeWTSC<Options extends WTSCOptions> = WTSC<
  Options,
  TypeParsers<TypeWTSC<Options>>
>

export function defTypeWTSC<The extends object = {}>(
  options: Partial<WTSCOptions<The>> = {}
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
  wtscOptions: Partial<WTSCOptions<The>> = {}
): DefaultTypeWTSC<WTSCOptions<The>> {
  const wtsc: TypeWTSC<WTSCOptions<The>> = createWTSCStorage(
    'root',
    undefined,
    defWtscPrototype(wtscOptions as WTSCOptions<The>)
  )

  ;(wtsc as any).root = wtsc

  const styleData = defStyleData(
    (wtsc as any as WTSCStorage).name,
    renderData,
    (wtsc as any as WTSCStorage).id
  )

  initDefThemeKeys(wtscOptions as WTSCOptions<The>, wtsc as any, wtsc)
  wtsc.provide(styleData, styleDataInj)

  return wtsc as any
}
