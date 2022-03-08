import { isUndef } from '@wormery/utils'
import { IK } from './injectKey'
import { DefProvider, Provider, ReactiveProvider, RefProvider } from './types'

export interface ProviderStorage {
  provider: Provider
  parent?: ProviderStorage
}

export interface ProviderOptions {
  defProvider?: DefProvider
}

const providerFunsObj: Provider = {
  set(this: RefProvider, key, value) {
    this.provides[key[IK]] = value
  },
  get(this: RefProvider, key) {
    return this.provides[key[IK]]
  },
}

export function defDefluatProvider(): Provider {
  return Object.setPrototypeOf({ provides: {} }, providerFunsObj)
}

type Reactive = <T>(value: T) => T

/**
 * vue reactive 实现的响应
 * @author meke
 * @export
 * @param Reactive _reactive 你需要传入vue的reactive函数
 * @return {*}  {() => Provider}
 */
export function defReactiveProviderAPI(_reactive: Reactive): () => Provider {
  const providerFunsObj: Provider = {
    set(this: ReactiveProvider, key, value) {
      if (key.isReactive) {
        this.reactiveProvide[key[IK]] = value
      }
      this.noReactiveProvide[key[IK]] = value
    },
    get(this: ReactiveProvider, key) {
      if (key.isReactive) {
        return this.reactiveProvide[key[IK]]
      }
      return this.noReactiveProvide[key[IK]]
    },
  }
  return Object.setPrototypeOf(
    { reactiveProvide: _reactive({}), noReactiveProvide: {} },
    providerFunsObj
  )
}

type Ref = <T>(value: T) => { value: T }

/**
 * 生成provider生成函数
 * @export
 * @param {Ref} _ref 你需要传入vue的ref函数
 * @return {*}
 */
export function defRefProviderAPI(_ref: Ref): () => Provider {
  const providerFunsObj: Provider = {
    set(this: RefProvider, key, value) {
      if (key.isReactive) {
        const o = this.provides[key[IK]]
        if (isUndef(o)) {
          this.provides[key[IK]] = _ref(value)
        } else {
          o.value = value
        }
      } else {
        this.provides[key[IK]] = value
      }
    },
    get(this: RefProvider, key) {
      if (key.isReactive) {
        return this.provides[key[IK]]?.value
      } else {
        return this.provides[key[IK]]
      }
    },
  }
  return () => Object.setPrototypeOf({ provides: {} }, providerFunsObj)
}
