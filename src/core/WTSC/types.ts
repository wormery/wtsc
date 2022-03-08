import { isObject, isString } from '@wormery/utils'
import { WTSC } from './WTSC'
import { Get$parsers, WTSCOptions } from './option'
import { InjectKey } from '../inject/injectKey'

/**
 * css值支持的类型
 */
export type CSSValue = string
/**
 * CSSKey Type
 */
export type CSSKey<Options extends WTSCOptions<Options>> =
  keyof Get$parsers<Options>
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
export type Parsers<MyParsers = {}> = {
  [k in keyof MyParsers]: (...rest: any[]) => ToString
}
export type Parser = (...rest: any) => ToString

/**
 * ADD 的类型
 */
export type ADD<Options extends WTSCOptions<Options>> = {
  [k in keyof Get$parsers<Options>]: Get$parsers<Options>[k] extends (
    ...rest: infer Rest
  ) => ToString
    ? (
        ...rest:
          | {
              [arrk in keyof Rest]: Rest[arrk] extends infer x
                ? InjectKey<x>
                : never
            }
          | Rest
      ) => WTSC<Options>
    : never
} & (<K extends keyof Get$parsers<Options>>(
  key: K,
  ...rest: Get$parsers<Options>[K] extends (
    ...rest: infer Rest
  ) => ToString
    ? Rest
    : any[]
) => WTSC<Options>)
