import { ParsersSkip, ParsersError } from '../api/error'
import { parserSpaceWarn } from '../api/warn'
let currentCSSKey: string = ''
const CSSParserHeap: string[] = []

export function parserSpaceStart(name: string): void {
  CSSParserHeap.unshift(currentCSSKey)
  currentCSSKey = name
}

export function parserSpaceEnd(): void {
  currentCSSKey = CSSParserHeap.shift() ?? ''
}
export function getParserKey(): string {
  return currentCSSKey
}

/**
 * 全局 parsers 前缀处理，可以在任何位置通过@getCurrCSSKey()得到key
 *
 * @export
 * @param {string} cssKey
 * @param {() => void} f
 */
export function parserSpace(cssKey: string, f: () => void): void {
  parserSpaceStart(cssKey)
  try {
    return f()
  } catch (E) {
    if (__DEV__) {
      if (E instanceof ParsersSkip) {
        parserSpaceWarn(E.message)
      } else if (E instanceof ParsersError) {
        parserSpaceWarn(E.toString())
      } else if (E instanceof TypeError) {
        parserSpaceWarn(E.message)
      } else {
        throw E
      }
    }
  } finally {
    parserSpaceEnd()
  }
}
