export interface ToBeExtends<
  T extends object,
  P extends object,
  E extends object
> {
  target: T
  prototype: P
  example?: E
}

export function createToBeCreate<
  T extends object,
  P extends object,
  E extends object
>(v: ToBeExtends<T, P, E>): E {
  return Object.setPrototypeOf(v.target, v.prototype)
}
