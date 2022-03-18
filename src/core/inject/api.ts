import { isObject } from '@wormery/utils'
import { Inject, injectObject } from './inject'

export function isInject(v: unknown): v is Inject {
  return isObject(v) && injectObject in v
}
