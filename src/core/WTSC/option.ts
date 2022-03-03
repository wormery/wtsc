import { WTSC, WTSCObject } from './WTSC'
import { ThemeOptions } from '../theme/option'
import { Parsers } from './types'
import { ConstraninedParsers } from 'src/parsers'
import { defWTSCAPI } from '.'

type defultOptions = { parsers: ConstraninedParsers }

export interface WTSCOptions<Options extends WTSCOptions<Options>>
  extends ThemeOptions<Options> {
  parsers?: Get$parsers<Options>
  name?: string
  parent?: Get$WTSC<Options>
  defWTSC?: DefWTSC<Options>
}

export type DefWTSC<Options extends WTSCOptions<Options>> = (
  options?: WTSCOptions<Options>
) => WTSC<Options>

export type Get$defWTSCOfWTSCOptions<Options extends WTSCOptions<Options>> = (
  opt?: any
) => WTSC<Options>

export type Get$WTSC<Options extends WTSCOptions<Options>> = WTSC<Options>

export type Get$parsers<Options extends WTSCOptions<Options>> =
  Options['parsers'] extends Parsers<Options['parsers']>
    ? Options['parsers']
    : Parsers<{}>

/**
 * Option api 类型
 * @author meke
 * @export
 * @interface DefWTSCAPIOptions
 * @extends {WTSCOptions<MyParsers>}
 * @template MyParsers
 */
export interface DefWTSCAPIOptions<Options extends DefWTSCAPIOptions<Options>>
  extends WTSCOptions<Options> {
  // Parsers?: Options['Parsers'] extends new () => Parsers<{}>
  //   ? Options['Parsers']
  //   : ConstraninedParsers
}
export type Get$defWTSCOfWTSCAPI<Options extends WTSCOptions<Options>> = (
  opt?: WTSCOptions<Options>
) => WTSC<Options>

export interface WTSCAPI<Options extends WTSCOptions<Options>>
  extends WTSCOptions<Options> {
  defWTSC: (opt?: WTSCOptions<Options>) => WTSC<Options>
}
