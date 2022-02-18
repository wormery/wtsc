import { Parsers, WTSC } from '.'
import ParsersError from './error/ParsersError'

/**
 * 这是一个样例
 * 所有parsers都要继承此类
 * 这里实现自定义接口要传入函数返回值类型这里规定为implReturn
 *
 */
export class RootParsers implements Parsers {
  /**
   * 这里定义实例类型
   *
   *
   * @type {WTSC}
   * @memberof Parsers
   */
  protected wtsc: WTSC<RootParsers> = {} as unknown as WTSC<RootParsers>

  /**
   * parsers名字
   */
  protected name: string = 'root'

  /**
   * parsers的id
   */
  protected id: number = Math.random()
  /**
   * 报错方法，使用此方法后，将停止本次的添加css过程
   *
   * @author meke
   * @protected
   * @param {string} msg
   * @param {string} cssName
   * @memberof RootParsers
   */
  protected error(msg: string, cssName: string): void {
    throw new ParsersError(msg, cssName, this.name)
  }
}
