export { getSymbolVal as getSymbolStr } from '@wormery/utils'
export * from '@wormery/utils'
export function genNewClass<A extends any[], R>(
  Con: new (...rest: A) => R
): (...rest: A) => R {
  return (...rest: A) => {
    return new Con(...rest)
  }
}
