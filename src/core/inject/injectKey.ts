import { isObject } from '@wormery/utils'

/**
 * InjectKey 键
 */
export const IK = Symbol('IK')

/**
 * InjectKey值 主要是存储类型的，没有类型接收，很多类型运算都失效了，目前不传这个参数也不会出现问题
 */
export const IV = Symbol('WTSCIV')

/**
 * [IV] 这个只负责类型生成，实际不使用
 * @author meke
 * @export
 * @interface InjectKey
 * @extends {Symbol}
 * @template E
 */
export interface InjectKey<E> {
  /**
   * symbolKey
   * @author meke
   * @type {symbol}
   * @memberof InjectKey
   */
  readonly [IK]: symbol

  /**
   * 负责类型生成
   * @author meke
   * @type {E}
   * @memberof InjectKey
   */
  [IV]?: E

  /**
   * 是否是响应化的值，自己定义的provider实现类如果有响应化的需求就要检查它
   * @author meke
   * @type {boolean}
   * @memberof InjectKey
   */
  readonly isReactive: boolean
}

/**
 * 检查是不是Injectkey
 * @author meke
 * @export
 * @template T
 * @param {InjectKey<T>} v
 * @return {*}  {v is InjectKey<T>}
 */
export function isInjectKey<T>(v: InjectKey<T>): v is InjectKey<T>

/**
 * 检查是不是InjectKey
 * @author meke
 * @export
 * @template T
 * @param {unknown} v
 * @return {*}  {v is InjectKey<T>}
 */
export function isInjectKey<T>(v: unknown): v is InjectKey<T>

/**
 * 检查是不是 @InjectKey 类型
 * @author meke
 * @export
 * @param {unknown} v
 * @return {*}  {v is InjectKey<any>}
 */
export function isInjectKey(v: unknown): v is InjectKey<any> {
  if (isObject(v) && IK in v) {
    return true
  }
  return false
}

/**
 * 第一个值是否响应，第二值描述
 * @author meke
 * @export
 * @template T
 * @param {boolean} [isReactive=true]
 * @param {string} [describe='']
 * @return {*}  {InjectKey<T>}
 */
export function defInjKey<T>(
  isReactive: boolean = true,
  describe: string = ''
): InjectKey<T> {
  return {
    [IK]: Symbol(__DEV__ ? describe : ''),
    isReactive,
  }
}

export type MixInjectValue<T> = T | InjectKey<T> | T
export type MixIV<T> = MixInjectValue<T>
