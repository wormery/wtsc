import { IK } from './inject'
import { DefluatProvider } from './types'

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
