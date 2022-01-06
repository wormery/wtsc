import { type } from "os";
import {
  isEmpty,
  isFunction,
  isNumber,
  isString,
  isSymbol,
  isUndefAndNull,
  toTypeOf,
} from "../utils/isType";
import { cached, getSymbolStr, hasProp, isThe } from "../utils/utils";
import ParserError from "./error/ParsersError";
import { Warning } from "./error/Warning";

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
    this.add = <T>(this.proxify(parsers) as unknown as T);
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
    const isWtsc = isThe("wtsc");
    /**
     * 缓存处理函数
     */
    const parsersHandler = cached((prop: string, key: string | symbol) => {
      return function (this: T, ...rest: any[]): WTSC<T, P> {
        _this._addStyle(_this.keyToString(key), (<any>_target)[key], ...rest);
        //永远返回this
        return _this;
      };
    });

    let handle: ProxyHandler<M> = {
      get(target, prop) {
        //检测到如果是函数的话就会认为是parser
        //parser会被代理并将返回结果变为<WTSC<T,P>>this,
        //并将返回结果变为css的值,以函数名作为css的属性名
        if (hasProp(_target, prop)) {
          if (isFunction(_target[prop])) {
            return parsersHandler(prop.toString(), prop);
          } else if (isWtsc(prop)) {
            return _this;
          } else {
            //这里可能在访问自身的属性
            return (_target as any)[prop];
          }
        } else {
          return undefined;
        }
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
      (<any>result)[id] = (<any>first)[id];
    }

    for (let id in second) {
      if (!(<Object>result).hasOwnProperty(id)) {
        (<any>result)[id] = (<any>second)[id];
      }
    }
    return result;
  }
  private _addStyle<F extends { (...rest: any[]): string } | string>(
    key: string,
    handle: F,
    ...rest: any[]
  ) {
    try {
      let value: string | undefined;

      if (isFunction(handle)) {
        value = handle(...rest);
      } else {
        if (isString(handle)) {
          value = handle;
        }
      }

      //是空的情况是不会处理的
      if (isUndefAndNull(value) || isEmpty(value)) {
        return this;
      }

      //是str类型才会处理
      if (isString(value)) {
        this.setCSS(key as any, value);
        return this;
      }
      throw new Warning(
        "WTSC>addStyle:检测到，处理器传入的类型错误'" + typeof value + "'"
      );
    } catch (E) {
      if (E instanceof ParserError) {
        console.error(E.toString());
      } else if (E instanceof Warning) {
        console.warn(E.msg);
      } else {
        throw E;
      }
    } finally {
      return this;
    }
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
  public addStyle<O extends { (): string }>(
    this: WTSC<T, P>,
    cssKey: CSSKey<T>,
    cssValue: CSSValueType
  ): WTSC<T, P> {
    this._addStyle(this.keyToString(cssKey), cssValue.toString());
    return this;
  }
  private keyToString(cssKey: any): string {
    if (isString(cssKey)) {
      return cssKey;
    }
    if (isSymbol(cssKey)) {
      return getSymbolStr(cssKey);
    }
    if (isNumber(cssKey)) {
      return cssKey.toString();
    }

    return "";
    // throw new Warning(
    //   "警告,出现了意料为的类型" + toTypeOf(cssKey) + cssKey.toString()
    // );
  }

  /**
   *
   * @param key "任何stylekey"
   * @param value “任何stylleValue，不会做校验”
   */
  public addAnyStyle(key: string, value: string): WTSC<T, P> {
    this.addStyle(key as any, value);

    return this;
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
   * @isClear:boolean 是否清空，默认值true
   * @return {*}
   * @memberof WTSC
   */
  public return(isClear: boolean = true) {
    const _style = this._style;
    if (isClear == true) {
      this.clear();
    }
    return _style;
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
export type CSSKey<T extends { [key in string]: any }> = keyof T;

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
export type StyleValueType = string | number;

export type ParsersReturnType = StyleValueType | ParsersReturnErrorType;
export type ParsersReturnErrorType = undefined | void;
