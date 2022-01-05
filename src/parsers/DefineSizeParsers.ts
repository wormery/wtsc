import { DefineParsers, DefineWTSC, implReturn } from "../core";
import U from "../unit/BasicsUnit";

export type SizeParsersWTSCType = DefineWTSC<
  DefineSizeParsers<SizeParsersWTSCType>
>;

export interface DefineSizeParsers<R extends implReturn | SizeParsersWTSCType>
  extends DefineParsers<R> {
  /**
   * 盒子宽度
   *
   * @param value 宽度数，可以为数字或直接输入“15px”
   * @param unit 单位,您可以试着找找单位枚举 BasicsUnit
   */
  ["width"](value: string | number, unit?: U): R;

  ["max-width"](value: string | number, unit?: U): R;
  ["min-width"](value: string | number, unit?: U): R;

  /**
   *  盒子高度
   *
   * @param value 高度值，可以直接输入高度数默认代为为px，您可以在第二个参数输入单位，也可以输入例如”15px“
   * @param unit 单位,您可以试着找找单位枚举 BasicsUnit
   */
  ["height"](value: string | number, unit?: U): R;
  ["max-height"](value: string | number, unit?: U): R;
  ["min-height"](value: string | number, unit?: U): R;

  /**
   * margin 简写属性在一个声明中设置所有外边距属性。该属性可以有 1 到 4 个值。
   *
   * @param rest 您可以输入一个数字，后面传参单位例如(1,BasicsUnit.PX,50,BasicsUnit.VH,"15px","20%")
   */
  ["margin"](css: string, ...rest: (ValueType | U)[]): R;
  ["margin-top"](value: ValueType, unit?: U): R;
  ["margin-right"](value: ValueType, unit?: U): R;
  ["margin-bottom"](value: ValueType, unit?: U): R;
  ["margin-left"](value: ValueType, unit?: U): R;

  /**
   * 盒子内边距
   *
   * @param css
   * @param rest
   */
  ["padding"](css: string, ...rest: (ValueType | U)[]): R;
  ["padding-top"](value: ValueType, unit?: U): R;
  ["padding-right"](value: ValueType, unit?: U): R;
  ["padding-bottom"](value: ValueType, unit?: U): R;
  ["padding-left"](value: ValueType, unit?: U): R;
}

export type ValueType = string | number;
