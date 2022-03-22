import { WTSC } from './WTSC'
import { ThemeOptions } from '../theme/option'

export interface WTSCOptions<The extends object = {}>
  extends ThemeOptions<The> {
  name?: string
}

export type DefWTSC<Options extends WTSCOptions<Options>> = (
  options?: WTSCOptions<Options>
) => WTSC<Options, {}>

export type Get$defWTSCOfWTSCOptions<Options extends WTSCOptions<Options>> = (
  opt?: any
) => WTSC<Options, {}>

export type Get$WTSC<Options extends WTSCOptions<Options>> = WTSC<Options, {}>

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
) => WTSC<Options, {}>

export interface WTSCAPI<Options extends WTSCOptions<Options>>
  extends WTSCOptions<Options> {
  defWTSC: (opt?: WTSCOptions<Options>) => WTSC<Options, {}>
}
