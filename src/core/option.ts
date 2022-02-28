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
export interface DefWTSCAPIOptions<MyParsers extends Parsers<MyParsers>>
  extends WTSCOptions<MyParsers> {
  Parsers?: new () => MyParsers
  defWTSC?: (opt: any) => WTSC<MyParsers>
}
export interface WTSCAPI<MyParsers extends Parsers<MyParsers>>
  extends DefWTSCAPIOptions<MyParsers> {
  defWTSC: (opt?: WTSCOptions<MyParsers>) => WTSC<MyParsers>
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
