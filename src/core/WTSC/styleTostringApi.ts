/**
 * 将会以css的形式格式化
 * @author meke
 * @param {string} [name=this.name]
 * @param {string} [prefix='']
 * @return {*}  {string}
 * @memberof WTSC
 */
export function styleToString(
  name: string,
  style: { [s: string]: string },
  prefix: string = ''
): string {
  let cssstyle = name
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
