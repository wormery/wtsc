import { DefineParsers, DefineWTSC, ParsersError } from ".";
import type { ParsersReturnType, StyleValueType } from "./WTSC";

/**
 * 这是一个样例
 * 所有parsers都要继承此类
 * 这里实现自定义接口要传入函数返回值类型这里规定为implReturn
 *
 */
export default class Parsers implements DefineParsers<implReturn> {
  /**
   * 这里定义实例类型
   *
   *
   * @type {WTSC}
   * @memberof Parsers
   */
  protected wtsc: WTSC = <WTSC>{};
  /**
   * parsers名字
   */
  protected name: string = "";

  /**
   * parsers的id
   */
  protected id: number = Math.random();
  protected error(msg: string, cssName: string) {
    throw new ParsersError(
      msg,
      cssName,
      this.name,
      this.wtsc.groupName,
      this.wtsc.groupId
    );
  }
}

type WTSC = DefineWTSC<DefineParsers<WTSC>>;
/**
 * 实现接口需要传入本类型
 */
export type implReturn = ParsersReturnType;
