// import { isNumber, isString } from '@wormery/utils'

import { PE, Percentage } from './Percentage'
import { genNewClass } from '../utils/utils'
import { isNotUndef, isNumber } from '@wormery/utils'

export type ColorKW = 'blue' | 'transparent'

export interface Color {
  toString: () => string
}

export class HexadecimalColor implements Color {
  public hexadecimal: string
  constructor(hexadecimal: string) {
    hexadecimal = this.completion(hexadecimal)
    this.checkChar(hexadecimal)
    this.hexadecimal = hexadecimal
  }

  private checkChar(hexadecimal: string): void {
    const len = hexadecimal.length
    for (let i = 1; i < len; i++) {
      const c = hexadecimal.charCodeAt(i)
      if (!this.isHexadecimalChar(c)) {
        throw new Error(
          '错误的16进制颜色值输入"' +
            hexadecimal +
            '"的第' +
            i.toString() +
            '位'
        )
      }
    }
  }

  private isHexadecimalChar(c: number): boolean {
    if (c >= 48 && c <= 57) {
      // 0-9
      return true
    } else if (c >= 97 && c <= 102) {
      // a-f
      return true
    }
    return false
  }

  private completion(hexadecimal: string): string {
    const len = hexadecimal.length
    // 添加#号
    if (!hexadecimal.startsWith('#')) {
      hexadecimal = '#' + hexadecimal
    }
    // 补全

    if (len < 4) {
      // #000
      hexadecimal = hexadecimal.padEnd(4, '0')
    } else if (len < 7) {
      // #000000
      hexadecimal = hexadecimal.padEnd(7, '0')
    } else if (len < 9) {
      // #00000000
      hexadecimal = hexadecimal.padEnd(8, '0')
    } else if (len > 9) {
      // #0000000000 -> #00000000
      hexadecimal = hexadecimal.slice(0, 9)
    }
    return hexadecimal
  }

  public toString(): string {
    return ''
  }
}

export class RGB implements Color {
  public r: number | Percentage
  public g: number | Percentage
  public b: number | Percentage
  public a: number | undefined

  constructor(
    r: number | Percentage,
    g: number | Percentage,
    b: number | Percentage,
    a: number = undefined
  ) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }

  toStriing(): string {
    return `rgb(${this.r.toString()}, ${this.g.toString()}, ${this.b.toString()}${
      isNotUndef(this.a) ? ', ' + this.a.toString() : ''
    })`
  }
}

export class HSL implements Color {
  public h: number
  public s: Percentage
  public l: Percentage
  public a: number | undefined

  /**
   * HSL 色彩空间
   *
   * @author meke
   * @param {number} h hue - 色相
   * @param {Percentage} s saturation - 饱和度
   * @param {Percentage} l lightness - 亮度
   * @memberof HSL
   */
  constructor(
    h: number,
    s: Percentage | number,
    l: Percentage | number,
    a: number = undefined
  ) {
    this.h = h
    if (isNumber(s)) {
      this.s = PE(s)
    } else {
      this.s = s
    }
    if (isNumber(l)) {
      this.l = PE(l)
    } else {
      this.l = l
    }
    this.a = a
  }

  toStriing(): string {
    return `hsl(${this.h.toString()}, ${this.s.toString()}, ${this.l.toString()}${
      isNotUndef(this.a) ? ', ' + this.a.toString() : ''
    })`
  }
}

export class HWB implements Color {
  public h: number
  public w: Percentage
  public b: Percentage
  public a: number | undefined

  /**
   * hwb Color
   * @author meke
   * @param {number} h
   * @param {Percentage} w
   * @param {Percentage} b
   * @param {number} [a=undefined]
   * @memberof HWB
   */
  constructor(h: number, w: Percentage, b: Percentage, a: number = undefined) {
    this.h = h
    this.w = w
    this.b = b
    this.a = a
  }

  toStriing(): string {
    return `hwb(${this.h.toString()}, ${this.w.toString()}, ${this.b.toString()}${
      isNotUndef(this.a) ? ', ' + this.a.toString() : ''
    })`
  }
}

/**
 *
 * 16进制颜色 #000000
 *
 * @author meke
 * @export
 * @param {*} hexadecimal = ‘#000000’
 * @return {*}  {HexadecimalColor}
 */
export const hc = genNewClass(HexadecimalColor)

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
export const rgb = genNewClass(RGB)

/**
 * HSL 色彩空间
 *
 * @author meke
 * @param {number} h hue - 色相
 * @param {Percentage} s saturation - 饱和度
 * @param {Percentage} l lightness - 亮度
 * @memberof HSL
 */
export const hsl = genNewClass(HSL)

/**
 * hwb Color
 *
 * @author meke
 * @param {number} h
 * @param {Percentage} w
 * @param {Percentage} b
 * @param {number} [a=undefined]
 * @memberof HWB
 */
export const hwb = genNewClass(HWB)
