import { isObject } from '@wormery/utils'
import { WTSC } from '..'
import { OutValue } from '../../../dist/CSSValue/index'

/**
 * InjectKey 键
 */
export const IK = Symbol('IK')

/**
 * InjectKey值 主要是存储类型的，没有类型接收，很多类型运算都失效了，目前不传这个参数也不会出现问题
 */
export const IV = Symbol('WTSCIV')
// export const pack = Symbol('')
// export const unpack = Symbol('')

/**
 * [IV] 这个只负责类型生成，实际不使用
 * @author meke
 * @export
 * @interface InjectKey
 * @extends {Symbol}
 * @template Value
 */
export interface InjectKey<
  Value = any,
  IsAssertionExisted extends boolean = false
> extends InjectKeyPrototype<ValueType<IsAssertionExisted, Value>> {
  /**
   * symbolKey
   * @author meke
   * @type {symbol}
   * @memberof InjectKey
   */
  readonly [IK]: symbol

  /**
   * 负责类型生成
   * 默认值可以指定一些必定存在的可以直接生成默认类型来防止报undefined
   * @author meke
   * @type {(Value | Default)}
   * @memberof InjectKey
   */
  value?: ValueType<IsAssertionExisted, Value>

  /**
   * 是否是响应化的值，自己定义的provider实现类如果有响应化的需求就要检查它
   * @author meke
   * @type {boolean}
   * @memberof InjectKey
   */
  readonly isReactive: boolean
}
type ValueType<
  IsAssertionExisted extends boolean,
  Value
> = IsAssertionExisted extends true ? Value : Value | undefined

export interface InjectKeyPrototype<T> extends OutValue<T> {
  out<W extends WTSC<any, any>>(wtsc: W): T
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
 * @template Value
 * @template IsAssertionExisted 如果为true代表断言一定存在这个属性
 * @param {boolean} [isReactive=true]
 * @param {string} [describe='']
 * @return {*}  {InjectKey<Value, IsAssertionExisted>}
 */
export function defInjKey<Value, IsAssertionExisted extends boolean = false>(
  isReactive: boolean = true,
  describe: string = ''
): InjectKey<Value, IsAssertionExisted> {
  return Object.setPrototypeOf(
    {
      [IK]: Symbol(__DEV__ ? describe : ''),
      isReactive,
    },
    InjKeyPrototype
  )
}

const InjKeyPrototype: InjectKeyPrototype<any> = {
  out(w: any) {
    return w.inject(this)
  },
}

export type MixInjectValue<T> = T | InjectKey<T>
export type MixIV<T> = MixInjectValue<T>
