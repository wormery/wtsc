import { Color } from './Color'
import { isNumber, isString } from '@wormery/utils'
import { RGBAColor } from './RGBAColor'
import { rgb, RGBColor } from './RGBColor'
export function completeHexEcimal(hexColor: string): string {
  const len = hexColor.length
  // 添加#号
  if (!hexColor.startsWith('#')) {
    hexColor = '#' + hexColor
  }
  // 补全
  if (len < 4) {
    // #000
    hexColor = hexColor.padEnd(4, '0')
  } else if (len < 7) {
    // #000000
    hexColor = hexColor.padEnd(7, '0')
  } else if (len < 9) {
    // #00000000
    hexColor = hexColor.padEnd(8, '0')
  } else if (len > 9) {
    // #0000000000 -> #00000000
    hexColor = hexColor.slice(0, 9)
  }
  return hexColor
}

export const regOfHexColor = /^#[0-9|a-f|A-F]{3,8}$/

export function isHexColor(value: string): boolean {
  return regOfHexColor.test(value)
}

export interface HexColor extends Color {
  value: string
}

function out(this: HexColor): string {
  return this.value
}

export function hc(value: number): HexColor

export function hc(value: string): HexColor

export function hc(value: string | number): HexColor {
  let hcv = ''
  if (isNumber(value)) {
    hcv = value.toString(16)
  }
  hcv = completeHexEcimal(hcv)
  if (!isHexColor(hcv)) {
    throw new Error(`错误的16进制颜色值输入:${value}`)
  }
  return {
    value: hcv,
    out,
  }
}

export function hexToRGB(HC: string | number): RGBAColor {
  let _hc = ''
  if (isString(HC)) {
    _hc = HC
  } else {
    _hc = HC.toString(16)
  }
  _hc = completeHexEcimal(_hc)

  if (isHexColor(_hc)) {
    const r = parseInt(_hc.slice(1, 3), 16)
    const g = parseInt(_hc.slice(3, 5), 16)
    const b = parseInt(_hc.slice(5, 7), 16)
    const a = parseInt(_hc.slice(7, 9), 16)
    return rgb(r, g, b, isNaN(a) ? 1 : (a as any))
  }
  throw new Error(HC.toString() + '不是一个16进制颜色值')
}
