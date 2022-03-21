export function pseudoDOM(f?: (css: string) => void): any {
  return {
    domData: '',
    set innerHTML(value: string) {
      this.domData = value
      f?.(value)
    },
    get innerHTML() {
      return this.domData
    },
  }
}
