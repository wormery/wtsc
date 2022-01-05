import ParserError from "./error/ParsersError";

/**
 * css解析器核心，负责用ts的方式将css转换为vue所支持的styleValue类型
 */
export class WTSC<
  T extends DefineParsersType<WTSC<T, P>>,
  P extends ParsersType<T, WTSC<T, P>>
> {
  private _style: StyleType<T> = <StyleType<T>>{};
  public add: T;
  public groupName: string = "wtsc";
  public groupId: number = 0;
  public groupCount: number = 0;

  constructor(parsers: P) {
    this.add = <T>(this.proxify(parsers) as unknown   as T);
  }

  /**
   * 负责代理
   *
   * @param target
   * @param handle
   * @returns
   */
  private proxify<M extends Object>(_target: M) {
    const _this = this;
    /**
     * 缓存函数类
     */
    const parsersHandler: any = {};
    let handle: ProxyHandler<M> = {
      get(target, prop) {
        //检测到如果是函数的话就会认为是parser
        //parser会被代理并将返回结果变为<WTSC<T,P>>this,
        //并将返回结果变为css的值,以函数名作为css的属性名
        if (typeof (<any>_target)[prop] === "function") {
          return (
            parsersHandler[prop] ||
            (parsersHandler[prop] = function (
              this: T,
              ...rest: any[]
            ): WTSC<T, P> {
              try {
                const ret = (<any>_target)[prop](...rest);

                if (ret !== null || ret !== undefined) {
                  _this.addCSS(prop as any, ret);
                } else {
                }
              } catch (E) {
                if (E instanceof ParserError) {
                  console.error(E.toString());
                } else {
                  throw E;
                }
              } finally {
                return _this;
              }
            })
          );
        } else if (prop === "wtsc") {
          return _this;
        }
        //这里可能在访问自身的属性
        return (<any>target)[prop];
      },
    };
    return new Proxy(_target, handle);
  }

  /**
   * 这里可以输入组名，未来可能会有一个功能，
   * 组列表，我们可以生成常用的css组比如居中代码等，
   * 输入对应组名就可以直接生成对应的css代码
   *
   * @param cssGroupName 组名
   */
  public setClassName(cssGroupName: string) {
    this.groupName = cssGroupName;
  }

  /**
   * 合并两个类型为一个，可让开发者先合并css解析器，
   * 然后生成本类，本类是核心不负责css解析器的工作
   *
   * @param first
   * @param second
   * @returns
   */
  static mergeType<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    console.log(Object.keys(first));

    for (let id in first) {
      console.log(id);
      (<any>result)[id] = (<any>first)[id];
    }

    for (let id in second) {
      if (!(<Object>result).hasOwnProperty(id)) {
        (<any>result)[id] = (<any>second)[id];
      }
    }
    return result;
  }

  /**
   * 给css添加属性
   *
   * @param {WTSC<T>} this
   * @param {CSSKey<T>} cssKey
   * @param {CSSValueType} cssValue
   * @param {Object} [config]
   * @return {*}  {AddCSSState}
   * @memberof WTSC
   */
  public addCSS(
    this: WTSC<T, P>,
    cssKey: CSSKey<T>,
    cssValue: CSSValueType,
    config: AddCSSConfigType = DEFAULT_ADD_CSS_CONFIG
  ): AddCSSState {
    try {
      if (this.isExistedBeCSS(cssKey)) {
        if (config.isAllowOverride) {
          this.setCSS(cssKey, cssValue);
          return AddCSSState.REDEFINE_SUCCEEDED;
        } else {
          return AddCSSState.REWRITE_FAILED;
        }
      } else {
        this.setCSS(cssKey, cssValue);
        return AddCSSState.SUCCEEDED;
      }
    } catch {
      return AddCSSState.ERROR;
    } finally {
      return AddCSSState.UNKNOWN;
    }
  }

  /**
   * 拆分方法添加属性
   *
   * @private能希望自定义基于Error的异常类型，使得你能够 throw new MyError() 并可以使用 instanceof MyError 来检查
   * @memberof WTSC
   */
  private setCSS(cssName: CSSKey<T>, cssValue: CSSValueType) {
    this._style[cssName] = cssValue;
  }

  /**
   * 检查是否存在此css
   *
   * @param {CSSKey<T>} cssKey
   * @return {*}
   * @memberof WTSC
   */
  public isExistedBeCSS(cssKey: CSSKey<T>) {
    return !!this._style[cssKey];
  }

  /**
   * 返回css属性
   *
   * @return {*}
   * @memberof WTSC
   */
  public return() {
    return this._style;
  }

  /**
   * 清空css
   */
  public clear(newGroupName?: string) {
    this.groupCount += 1;
    this.groupId = this.groupCount;

    if (newGroupName == undefined) {
      newGroupName = "WTSC" + this.groupId;
    }

    this.groupName = newGroupName;
    this._style = <StyleType<T>>{};
  }
}

/**
 * 添加css后的状态信息
 */
export enum AddCSSState {
  /**
   * 添加CSS成功
   */
  SUCCEEDED,

  /**
   * 重写CSS成功
   */
  REDEFINE_SUCCEEDED,

  /**
   * 重写失败或禁止重写
   */
  REWRITE_FAILED,

  /**
   * 未知原因失败
   */
  FAILED,

  /**
   * 出错了
   */
  ERROR,

  /**
   * 我不知道这种情况应该不可能发生
   */
  UNKNOWN,
}

/**
 * 配置的默认值
 */
export const DEFAULT_ADD_CSS_CONFIG: AddCSSConfigType = {
  isAllowOverride: true,
};

/**
 * addCss 配置类型
 */
export type AddCSSConfigType = {
  isAllowOverride: Boolean;
};

/**
 *  css值支持的类型
 */
export type CSSValueType = string | number;
export type CSSKey<T> = keyof T;

/**
 * style的类型
 */
type StyleType<T> = {
  [key in keyof T]: string | number;
};

/**
 * 处理器的类型
 */
export type ParsersType<PT extends DefineParsersType<W>, W> = {
  [css_name in keyof PT]: { (...rest: any): ParsersReturnType };
};

/**
 * 声名处理器的类型
 */
export type DefineParsersType<T> = {
  [key in keyof {}]: { (...rest: any): T };
};

/**
 * 定义WTSC的类型
 * 此类型相当于一个类型定义的工具类型，
 * 可以更简单的生成此工具类的类型
 */
export type DefineWTSCType<MP> = WTSC<MP, ParsersType<MP, DefineWTSCType<MP>>>;

/**
 * 样式值支持的类型
 */
export type StyleValueType = string | symbol | number;

export type ParsersReturnType = StyleValueType | ParsersReturnErrorType;
export type ParsersReturnErrorType = undefined | void;
