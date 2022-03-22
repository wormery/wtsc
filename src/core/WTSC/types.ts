import { isObject, isString } from '@wormery/utils'
import { WTSCOptions } from './option'
import { WTSC } from './WTSC'
import { OutValue } from '../../CSSValue/index'
import { MixInjectValue } from '../inject/injectKey'

/**
 * css值支持的类型
 */
export type CSSValue = string
export type StyleValue = Array<MixInjectValue<MixOutString>>
export type MixOutString = OutValue<string> | string

/**
 * style的类型
 */
export type CSSStyle = {
  [k in string]: CSSValue
}

/**
 * 解析器的返回值必须有toString()方法
 */
export interface ToString {
  toString: () => string
}
export function isParserReturnValue<T extends unknown>(
  v: T
): v is T & { toString: () => string } {
  return isString(v) || (isObject(v) && 'toString' in v)
}

/**
 * Parsers 类型
 */
export type Parsers<
  O extends WTSCOptions<O>,
  MyParsers extends Parsers<O, MyParsers>
> = {
  [k in keyof MyParsers]: (...rest: []) => WTSC<O, MyParsers>
}

export type ADD<O extends WTSCOptions, ParsersInterface> = ParsersInterface &
  ((
    key: keyof ParsersInterface,
    ...rest: ToString[]
  ) => WTSC<O, ParsersInterface>)
