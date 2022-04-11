import { isObject, isString } from '@wormery/utils'
import { WTSCOptions } from './option'
import { WTSC } from './WTSC'
import { OutValue } from '../../CSSValue/index'
import { MixInjectValue } from '../inject/injectKey'

/**
 * css值支持的类型
 */
export type CSSValue = string
export type StyleValue = MaybeAddRestList
export type AddRest = Array<MixInjectValue<AddValue>>
export type AddValue = MixOutString | number
export type MixOutString = OutValue | string | String

export type MaybeAddRestList<T extends AddRest = AddRest> = T | T[]
export type Parser<T extends AddValue[], R> = (
  ...rest: MaybeAddRestList<{ [K in keyof T]: MixInjectValue<T[K]> }>
) => R
export type SingleParser<T extends AddValue, R> = Parser<[T], R>
export type MaybeString<T> = T & string
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

/**
 * 伪元素类型
 */
export type PseudoElements =
  | ':after'
  | '::after'
  | '::backdrop'
  | ':before'
  | '::before'
  | '::cue'
  | '::cue-region'
  | ':first-letter'
  | '::first-letter'
  | ':first-line'
  | '::first-line'
  | '::file-selector-button'
  | '::grammar-error'
  | '::marker'
  // | '::part()' 暂时没有实现
  | '::placeholder'
  | '::selection'
  // | '::slotted()'
  | '::spelling-error'
  | '::target-text'

export type PseudoClasses =
  | ':active'
  | ':any-link'
  | ':blank'
  | ':checked'
  | ':current'
  | ':default'
  | ':defined'
  | ':dir()'
  | ':disabled'
  | ':drop'
  | ':empty'
  | ':enabled'
  | ':first'
  | ':first-child'
  | ':first-of-type'
  | ':fullscreen'
  | ':future'
  | ':focus'
  | ':focus-visible'
  | ':focus-within'
  | ':has()'
  | ':host'
  | ':host()'
  | ':host-context()'
  | ':hover'
  | ':indeterminate'
  | ':in-range'
  | ':invalid'
  | ':is()'
  | ':lang()'
  | ':last-child'
  | ':last-of-type'
  | ':left'
  | ':link'
  | ':local-link'
  | ':not()'
  | ':nth-child()'
  | ':nth-col()'
  | ':nth-last-child()'
  | ':nth-last-col()'
  | ':nth-last-of-type()'
  | ':nth-of-type()'
  | ':only-child'
  | ':only-of-type'
  | ':optional'
  | ':out-of-range'
  | ':past'
  | ':placeholder-shown'
  | ':read-only'
  | ':read-write'
  | ':required'
  | ':right'
  | ':root'
  | ':scope'
  | ':target'
  | ':target-within'
  | ':user-invalid'
  | ':valid'
  | ':visited'
  | ':where()'
