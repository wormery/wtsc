import { isArray, isObject } from '@wormery/utils'
import { OutValue } from '../CSSValue/index'
import { suffix } from '../CSSValue/CssAttributeName'

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

export function mixin<O1 extends object, O2 extends object>(
  o1: O1,
  o2: O2
): Merge<O1, O2> {
  Object.keys(o2).forEach((k) => {
    ;(o1 as any)[k] = (o2 as any)[k]
  })
  Object.getOwnPropertySymbols(o2).forEach(
    (k) => ((o1 as any)[k] = (o2 as any)[k])
  )

  return o1 as any
}
// const xxx = mixin({ s: '' }, { y: '' }, { x: 'xx' })
export type Merge<X extends object, Y extends object> = {
  [k in keyof X | keyof Y]: k extends keyof X
    ? X[k]
    : k extends keyof Y
    ? Y[k]
    : never
}

export function setPrototypeOf<T extends object, P extends object>(
  o: T,
  parent: P
): Merge<T, P> {
  return Object.setPrototypeOf(o, parent)
}
export function isOutValue(v: unknown): v is OutValue {
  return isObject(v) && 'out' in v
}
export function genPack(prefix: string, suffix: string) {
  return (v: string) => {
    return `${prefix}${v}${suffix}`
  }
}
