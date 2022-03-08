import { isObject } from '@wormery/utils'
import { Inject, injectObject } from './inject'
import { IK, InjectKey } from './injectKey'

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

export function isInject(v: unknown): v is Inject {
  return isObject(v) && injectObject in v
}
