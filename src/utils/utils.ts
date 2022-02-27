import { isArray, isObject } from '@wormery/utils'

export function newClass<T extends new (...rest: A) => R, A extends any[], R>(
  Class: T
): (...rest: A) => R {
  return (...rest) => {
    return new Class(...rest)
  }
}
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
