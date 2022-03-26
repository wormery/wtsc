import { isString } from '@wormery/utils'
import { WTSC, hideAddStack, findAddStack, wtsc } from '../core/WTSC/WTSC'
import { Percentage } from './Percentage'
import { Data } from '../core/inject/types'
import { styleToString } from '../core/WTSC/styleTostringApi'
import { OutValue } from './index'
import { styleDataInj, addPro, update } from '../core/WTSC/render'
interface KeyframsData {
  name: string
  keyfram: Data<string, string>
}

let keyframsData!: KeyframsData

function addKeyframe(keyFrame: string | Percentage, w: WTSC<any, any>): void {
  const style = w.outStyle()
  const keyfram = keyframsData.keyfram

  const part = styleToString(style)
  if (isString(keyFrame)) {
    keyfram[keyFrame] = part
  } else {
    keyfram[keyFrame.out(w)] = part
  }
}

export interface Keyframes extends OutValue {
  keyfromsData: KeyframsData
}

function out(this: Keyframes, wtsc: WTSC<any, any>): string {
  const styleData = wtsc.inject(styleDataInj)

  const keyfromsData = this.keyfromsData
  const keyfram = keyfromsData.keyfram
  const part = Object.keys(keyfram)
    .map((k) => {
      return `${k} {${keyfram[k]}}`
    })
    .join(' ')

  const pro = addPro(styleData.name, keyfromsData.name)

  const selector = `@keyframes ${pro}`

  styleData.style[selector] = part

  update(styleData)

  return pro
}
export function keyframes<T extends WTSC<any, any>>(
  name: string,
  callBack: (addKeyfram: typeof addKeyframe, wtsc: T) => void,
  wtsc: T
): Keyframes
export function keyframes(
  name: string,
  callBack: (addKeyfram: typeof addKeyframe) => void
): Keyframes

export function keyframes<T extends WTSC<any, any>>(
  name: string,
  callBack: (addKeyfram: typeof addKeyframe, wtsc: T) => void,
  w: T = wtsc as any
): Keyframes {
  hideAddStack()
  keyframsData = { name, keyfram: {} }

  callBack(addKeyframe, w.sham() as any)

  findAddStack()

  return {
    keyfromsData: keyframsData,
    out,
  }
}
