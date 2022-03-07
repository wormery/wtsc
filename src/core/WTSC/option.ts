import { WTSC } from './WTSC'
import { ThemeOptions } from '../theme/option'
import { Parser } from './types'

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

export type Get$parsers<Options extends WTSCOptions<Options>> = {
  [k in keyof Options['parsers']]: k extends string
    ? Options['parsers'][k] extends Parser
      ? Options['parsers'][k]
      : Parser
    : '开发者提示：这里只能用string来自定义键名，这个k值就是我们生成后的csskey'
}

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
