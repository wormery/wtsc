import { isObject, isUndef } from '@wormery/utils'
import { Inject, IK, injectObject, IV } from './inject'
import { Data, InjectKey, Provider } from './types'

export function defDefluatProvider(): Provider {
  const provides: Data<symbol, any> = {}
  return {
    provide(key, value) {
      provides[key[IK]] = value
    },
    inject(key) {
      return provides[key[IK]]
    },
  }
}

/**
 * 生成provider生成函数
 *
 * @export
 * @param {typeof ref} _ref
 * @return {*}
 */
export function defRefProviderAPI(_ref: <T>(value: T) => { value: T }) {
  return (): Provider => {
    const provides: Data<symbol, any> = {}
    return {
      provide: (key, value) => {
        const o = provides[key[IK]]
        if (isUndef(o)) {
          provides[key[IK]] = _ref(value)
        } else {
          o.value = value
        }
      },
      inject(key) {
        return provides[key[IK]]?.value
      },
    }
  }
}

/**
 * 生成InjKey
 * @author meke
 * @export
 * @template T
 * @param {string} [describe]
 * @param {T} [value]
 * @return {*}  {InjectKey<T>}
 */
export function defInjKey<T>(describe?: string, value?: T): InjectKey<T> {
  return {
    [IK]: Symbol(__DEV__ ? describe : ''),
    [IV]: value,
  }
}

export function isInjectKey<T>(v: InjectKey<T>): v is InjectKey<T>
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
export function isInject(v: unknown): v is Inject {
  return isObject(v) && injectObject in v
}
