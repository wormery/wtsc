import { WTSC } from '../WTSC/WTSC'
import { ParsersError } from '../api/error'
import { Parsers } from '../WTSC/types'
import { WTSCOptions } from '../WTSC/option'
import { getParserKey } from './ParserSpace'

/**
 * 这是一个样例
 * 所有parsers都要继承此类
 * 这里实现自定义接口要传入函数返回值类型这里规定为implReturn
 * @author meke
 * @export
 * @class RootParsers
 * @implements {Parsers}
 */
export class RootParsers implements Parsers {
  /**
   * 这里定义实例类型
   * @author meke
   * @protected
   * @type {WTSC<RootParsers>}
   * @memberof RootParsers
   */
  protected wtsc!: WTSC<WTSCOptions<{}>>

  /**
   * parsers名字
   * @author meke
   * @protected
   * @type {string}
   * @memberof RootParsers
   */
  protected name: string = 'root'

  /**
   * parsers的id
   * @author meke
   * @protected
   * @type {number}
   * @memberof RootParsers
   */
  protected id: number = Math.random()

  /**
   * 报错方法，使用此方法后，将停止本次的添加css过程
   * @author meke
   * @protected
   * @param {string} msg
   * @param {string} cssName
   * @memberof RootParsers
   */
  protected error(msg: string): void {
    throw new ParsersError(msg, getParserKey(), this.name)
  }
}
