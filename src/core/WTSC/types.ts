import { isObject, isString } from '@wormery/utils'
import { WTSCOptions } from './option'
import { WTSC } from './WTSC'

/**
 * css值支持的类型
 */
export type CSSValue = string

/**
 * style的类型
 */
export type Style<Option extends WTSCOptions<Option>> = {
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

export type ADD<O extends WTSCOptions<O>, ParsersInterface> = ParsersInterface &
  ((
    key: keyof ParsersInterface,
    ...rest: ToString[]
  ) => WTSC<O, ParsersInterface>)
