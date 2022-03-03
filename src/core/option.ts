import { parsers } from 'src'
import { Inject, Parsers, WTSC } from '.'
import { DefProvider } from './inject'

/**
 * Option api 类型
 * @author meke
 * @export
 * @interface DefWTSCAPIOptions
 * @extends {WTSCOptions<MyParsers>}
 * @template MyParsers
 */
export interface DefWTSCAPIOptions<Options extends DefWTSCAPIOptions<Options>>
  extends WTSCBaseOptions<Options> {
  Parsers?: new () => Parsers
}

export type Get$defWTSCOfWTSCAPI<Options extends WTSCBaseOptions<Options>> = (
  opt?: WTSCBaseOptions<Options>
) => WTSC<WTSCOptions<Options>>

export interface WTSCAPI<Options extends WTSCBaseOptions<Options>>
  extends WTSCOptions<Options> {
  defWTSC: (opt?: WTSCOptions<Options>) => WTSC<WTSCOptions<Options>>
}

export type Get$parsers<
  _DefWTSCAPIOptions extends WTSCBaseOptions<_DefWTSCAPIOptions>
> = _DefWTSCAPIOptions['parsers'] extends Parsers<_DefWTSCAPIOptions['parsers']>
  ? _DefWTSCAPIOptions['parsers']
  : Parsers<{}>

export interface WTSCBaseOptions<Options extends WTSCBaseOptions<Options>>
  extends InjectOptions {
  parsers?: Get$parsers<Options>
  name?: string
}

export type Get$defWTSCOfWTSCOptions<Options extends WTSCOptions<Options>> = (
  opt?: any
) => WTSC<Options>

export interface WTSCOptions<Options extends WTSCBaseOptions<Options>>
  extends WTSCBaseOptions<Options> {
  defWTSC: Get$defWTSCOfWTSCOptions<WTSCOptions<Options>>
  parent?: Get$WTSC<Options>
}

export interface InjectOptions {
  parent?: Inject
  defProvider?: DefProvider
}

export type Get$WTSC<Options extends WTSCBaseOptions<Options>> = WTSC<
  WTSCOptions<Options>
>
