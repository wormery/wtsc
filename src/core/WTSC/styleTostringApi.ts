import { hypnenate } from '@wormery/utils'
import { CSSStyle } from './types'

/**
 * 将会以css的形式格式化
 * @author meke
 * @param {string} [selectors=this.name]
 * @param {string} [prefix='']
 * @return {*}  {string}
 * @memberof WTSC
 */
export function styleToString(style: CSSStyle): string {
  let styleString = ''
  for (const key in style) {
    const cssValue = style[key]
    styleString += `${hypnenate(key) as string}: ${cssValue};`
  }
  return styleString
}
