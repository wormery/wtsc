import { implReturn } from '.'
import { DefineParsersType, DefineWTSCType } from './WTSC'

/**
 * 定义Parsers的接口
 */
export interface DefineParsers<R extends implReturn | WTSC>
  extends DefineParsersType<R> {}

/**
 * WTSC是WTSC实例类型
 * 固定格式:
 * myWTSC = DefineWTSC<MyDefineParsers<myWTSC>>
 * 使用要const wtsd:WTSC = new WTSC(new parsers)
 * wtsc就是我们可以使用的实例对象了
 *
 * 因为是个自循环类型所以要独立声明
 * DefineWTSCType是工具类型，
 * 然后DefineParsers是你自定义类型
 * 在其中传入WTSC类型就可以了
 *
 */

type WTSC = DefineWTSC<DefineParsers<WTSC>>

/**
 * 定义实例对象的类型
 */
export type DefineWTSC<E> = DefineWTSCType<E>
