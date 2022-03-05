import { isObject, isUndef } from '@wormery/utils'
import { Inject, IK, injectObject, IV } from './inject'
import { DefluatProvider, InjectKey, RefProvider } from './types'
import { ref } from 'vue'

export function defDefluatProvider(parent?: DefluatProvider): DefluatProvider {
  return {
    provides: parent?.provides ? Object.create(parent.provides) : {},
    set(key, value) {
      this.provides[key[IK]] = value
    },
    get(key) {
      return this.provides[key[IK]]
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
export function defRefProviderAPI(_ref: typeof ref) {
  return (parent?: RefProvider): RefProvider => {
    return {
      provides: parent?.provides ? Object.create(parent.provides) : {},
      set(key, value) {
        const o = this.provides[key[IK]]
        if (isUndef(o)) {
          this.provides[key[IK]] = ref(value)
        } else {
          o.value = value
        }
      },
      get(key) {
        const v = this.provides[key[IK]]
        return v && v.value
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
    [IK]: Symbol(describe),
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
