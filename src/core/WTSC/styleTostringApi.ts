import { hypnenate } from '@wormery/utils'

/**
 * 将会以css的形式格式化
 * @author meke
 * @param {string} [selectors=this.name]
 * @param {string} [prefix='']
 * @return {*}  {string}
 * @memberof WTSC
 */
export function styleToString(
  selectors: string,
  style: { [s: string]: string },
  isHypnenate: boolean = false
): string {
  if (isHypnenate) {
    let cssstyle = selectors
    cssstyle += '{\n'
    for (const key in style) {
      if (Object.prototype.hasOwnProperty.call(style, key)) {
        const cssValue = style[key]
        cssstyle += `  ${hypnenate(key) as string}: ${cssValue ?? ''};\n`
      }
    }
    cssstyle += '}\n'
    return cssstyle
  }

  let cssstyle = selectors
  cssstyle += '{\n'
  for (const key in style) {
    if (Object.prototype.hasOwnProperty.call(style, key)) {
      const cssValue = style[key]
      cssstyle += `  ${key}: ${cssValue ?? ''};\n`
    }
  }
  cssstyle += '}\n'
  return cssstyle
}
