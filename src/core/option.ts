import { Inject, Parsers, WTSC } from '.'
import { DefProvider } from './inject'

/**
 * Option api 类型
 * @author meke
 * @export
 * @interface DefWTSCAPIOptions
 * @extends {WTSCOptions<WT>}
 * @template WT
 */
export interface DefWTSCAPIOptions<WT extends Parsers<WT>>
  extends WTSCOptions<WT> {
  Parsers?: new (...ar: any) => WT
  defWTSC?: (opt: any) => WTSC<WT>
}

export interface WTSCOptions<MyParsers extends Parsers<MyParsers>>
  extends InjectOptions {
  parsers?: MyParsers
  name?: string
  parent?: WTSC<MyParsers>
}

export interface InjectOptions {
  parent?: Inject
  defProvider?: DefProvider
}
