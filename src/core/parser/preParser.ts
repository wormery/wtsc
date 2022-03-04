let currentCSSKey: string | undefined = undefined
const CSSParserHeap: (string | undefined)[] = []
export function preStart(name: string): void {
  CSSParserHeap.unshift(currentCSSKey)
  currentCSSKey = name
}
export function preEnd(): void {
  currentCSSKey = CSSParserHeap.shift()
}
export function getCurrCSSKey(): string {
  return currentCSSKey ?? ''
}

/**
 * 全局 parsers 前缀处理，可以在任何位置通过@getCurrCSSKey()得到key
 *
 * @export
 * @param {string} cssKey
 * @param {() => void} f
 */
export function virtualWorld(cssKey: string, f: () => void): void {
  preStart(cssKey)
  f()
  preEnd()
}
