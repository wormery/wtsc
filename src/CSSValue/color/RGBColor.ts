import { Percentage, PE } from '../Percentage'
import { rgba, RGBAColor } from './RGBAColor'
import { hexToRGB } from './hexColor'
import { Color } from '.'
import { Alpha } from './Color'
export interface RGBColorNumbers {
  r: number
  g: number
  b: number
  a: number
}
export interface RGBColor extends Color, Alpha {
  r: number | Percentage
  g: number | Percentage
  b: number | Percentage
  toNumbers(): RGBColorNumbers
  out(): string
}

function out(this: RGBColor): string {
  return `rgb(${this.r.toString()}, ${this.g.toString()}, ${this.b.toString()},${this.a.toString()})`
}

function toNumbers(this: RGBColor): RGBColorNumbers {
  const r = typeof this.r === 'number' ? this.r : this.r.toFloat() * 255
  const g = typeof this.g === 'number' ? this.g : this.g.toFloat() * 255
  const b = typeof this.b === 'number' ? this.b : this.b.toFloat() * 255
  const a = typeof this.a === 'number' ? this.a : this.a.toFloat() * 255
  return {
    r,
    g,
    b,
    a,
  }
}

/**
 * 生成rgba
 * @author meke
 * @export
 * @param {(number | Percentage)} r
 * @param {(number | Percentage)} g
 * @param {(number | Percentage)} b
 * @param {number} a
 * @return {*}  {RGBAColor}
 */
export function rgb(
  r: number | Percentage,
  g: number | Percentage,
  b: number | Percentage,
  a: number | Percentage
): RGBAColor

/**
 * 生成rgb
 * @author meke
 * @export
 * @param {(number | Percentage)} r
 * @param {(number | Percentage)} g
 * @param {(number | Percentage)} b
 * @return {*}  {RGBColor}
 */
export function rgb(
  r: number | Percentage,
  g: number | Percentage,
  b: number | Percentage
): RGBColor

/**
 * rgb(255, 255, 255)
 *
 * @author meke
 * @export
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {*}  {RGB}
 */
export function rgb(
  r: number | Percentage,
  g: number | Percentage,
  b: number | Percentage,
  a: number | Percentage = 1
): RGBColor | RGBAColor {
  return { r, g, b, a, out, toNumbers }
}
const reg =
  /^rgba?\((?<r>[0-9]{0,3}),(?<g>[0-9]{0,3}),(?<b>[0-9]{0,3})(,(?<a>0?\.?[0-9]{0,3})|)\)$/
export function rgbStrToRGB(c: string): RGBAColor {
  const ret = reg.exec(c)
  const obj: any = {
    r: ret?.groups?.r ?? '0',
    g: ret?.groups?.g ?? '0',
    b: ret?.groups?.b ?? '0',
    a: ret?.groups?.a ?? '1',
  }

  Object.keys(obj).forEach((key) => {
    const value = obj[key] as string
    if (obj[key].endsWith('%')) {
      const n = parseInt(value.slice(0, value.length - 1), 10)
      obj[key] = PE(isNaN(n) ? 0 : n)
    } else {
      const n = parseInt(value, 10)
      obj[key] = PE(isNaN(n) ? 0 : n)
    }
  })
  return rgb(obj.r, obj.g, obj.b, obj.a)
}

export function toRGB(c: string | number): RGBAColor {
  if (typeof c === 'number') {
    return hexToRGB(c)
  }
  if (c.startsWith('#')) {
    return hexToRGB(c)
  }

  return hexToRGB(c)
}

/**
 * 混合颜色
 * @author meke
 * @export
 * @param {(RGBColor | RGBAColor)} color
 * @param {(...Array<RGBAColor | RGBColor>)} rest
 * @return {*}  {RGBColor}
 */
export function mixColor(
  color: RGBColor | RGBAColor,
  ...rest: Array<RGBAColor | RGBColor>
): RGBColor {
  const rgbc = color.toNumbers()
  let mainA = rgbc.a
  const mainColor = {
    r: rgbc.r * mainA,
    g: rgbc.g * mainA,
    b: rgbc.b * mainA,
    a: mainA,
  }

  rest.forEach((item) => {
    const c = item.toNumbers()
    const a = c.a
    mainColor.r += c.r * a
    mainColor.g += c.g * a
    mainColor.b += c.b * a
    mainA += a
  })

  mainColor.r = mainColor.r / mainA
  mainColor.g = mainColor.g / mainA
  mainColor.b = mainColor.b / mainA

  return rgb(mainColor.r, mainColor.g, mainColor.b, mainColor.a)
}

/**
 * 输入一个颜色调节它的饱和度
 * @author meke
 * @export
 * @param {(RGBColor | RGBAColor)} color
 * @param {number} saturation 饱和度 0 - infinite ,输入0输出灰色，越大色彩越饱和
 * @return {*}  {RGBColor}
 */
export function saturation(
  color: RGBColor | RGBAColor,
  saturation: number
): RGBColor {
  const rgbc = color.toNumbers()

  const brightness = (rgbc.r + rgbc.g + rgbc.b) / 3

  let mainColor: [number, number, number] = [
    (rgbc.r - brightness) * saturation + brightness,
    (rgbc.g - brightness) * saturation + brightness,
    (rgbc.b - brightness) * saturation + brightness,
  ]

  if (saturation > 1) {
    let max = 255

    mainColor.forEach((c) => {
      if (c > max) {
        max = c
      }
    })
    mainColor = mainColor.map((c) => (c * 255) / max) as any
  }

  return rgb(...mainColor, rgbc.a)
}
