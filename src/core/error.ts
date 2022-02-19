export class ParsersError extends Error {
  static throw(): never {
    throw new ParsersError()
  }

  /**
   *
   * @param msg 错误信息
   * @param cssNmae css名字
   * @param parsersName parsers名字
   * @param groupName 组名
   * @param groupId 组id
   * @param error
   */
  constructor(
    public msg: string = 'Parser错误',
    public cssNmae: string = '',
    public parsersName: string = '',
    public groupName: string = 'wtsc',
    public groupId: number = -1,
    public error: Error | undefined = undefined
  ) {
    super(msg)
  }

  toString(): string {
    let str = 'PARSER ERROR:' + this.msg + '\n'
    if (this.cssNmae !== '') {
      str += "CSS属性：'" + this.cssNmae + "'发生了错误\n"
    }
    str += "组名：'" + this.groupName + "'组内发生了一个错误\n"
    if (this.groupId !== -1) {
      str += "组ID：第'" + this.groupId.toString() + "'个组发生了错误"
    }
    if (this.parsersName !== '') {
      str += "解析器:'" + this.parsersName + "'发生了一个错误\n"
    }
    return str
  }
}

export class ParsersSkip extends ParsersError {
  /**
   * 就是跳过不做任何处理
   * @author meke
   * @static
   * @return {*}  {never}
   * @memberof ParsersSkip
   */
  static throw(): never {
    throw new ParsersSkip()
  }
}
