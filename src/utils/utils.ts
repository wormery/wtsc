import { isArray, isObject } from '@wormery/utils'

export function newClass<T extends new (...rest: A) => R, A extends any[], R>(
  Class: T
): (...rest: A) => R {
  return (...rest) => {
    return new Class(...rest)
  }
}

/**
 *
 * @param v
 * @param handle
 * @param memory
 * @returns
 */
export function depTraversal(
  v: object,
  handle: (n: any) => {},
  memory: WeakMap<any, any> = new WeakMap()
): void {
  if (isObject(v)) {
    if (memory.get(v)) {
      return
    }
    memory.set(v, true)
    if (isArray(v)) {
      v.forEach((o) => {
        depTraversal(o, handle)
      })
      memory.set(v, true)
      return
    }
    for (const key in v) {
      depTraversal((v as any)[key], handle)
    }
  } else {
    handle(v)
  }
}

/**
 * 生成一个hash
 * @author meke
 * @export
 * @param {number} [length=6]
 * @param {number} [base=36]
 * @return {*}  {string}
 */
export function genHash(length: number = 6, base: number = 36): string {
  return Math.floor(Math.random() * (base ** length - 1))
    .toString(base)
    .padStart(length, '0')
}

export const isBrowser = (() => {
  try {
    return !!document
  } catch {
    return false
  }
})()
