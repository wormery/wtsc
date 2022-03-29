import { isObject } from '@wormery/utils'
import { Inject, injectObject } from './inject'
import { createInjectStorage, ProviderStorage } from './providerApi'
import { inject, depInject } from './injectApi'
import { provide, depProvide } from './provideApi'
import { unpack } from './injectKey'

export function isInject(v: unknown): v is Inject {
  return isObject(v) && injectObject in v
}

export interface InjectStorage extends Inject, ProviderStorage {}

export const injectPrototype: Inject = {
  [injectObject]: true,
  delete(this: InjectStorage, injectKey) {
    this.provider.delete(injectKey)
  },
  has(this: InjectStorage, injectKey) {
    return this.provider.has(injectKey)
  },
  inject,
  depInject,
  provide,
  depProvide,
  ownInject(this: InjectStorage, injectKey) {
    const v = this.provider.get(injectKey)
    if (v) {
      if (injectKey.isReactive) {
        return injectKey[unpack](v)
      }
    }
    return v
  },
}

export function createInject(): Inject {
  return Object.setPrototypeOf(createInjectStorage(), injectPrototype)
}
