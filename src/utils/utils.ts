export function newClass<T extends new (...rest: A) => R, A extends any[], R>(
  Class: T
): (...rest: A) => R {
  return (...rest) => {
    return new Class(...rest)
  }
}
