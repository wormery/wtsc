import { isString } from '@wormery/utils'
import { WTSC } from '../core/WTSC/WTSC'
import { Percentage } from './Percentage'
import { Data } from '../core/inject/types'
import { styleToString } from '../core/WTSC/styleTostringApi'
import { OutValue } from './index'
import { styleDataInj, addPro, update } from '../core/WTSC/render'
import { hideAddStack, findAddStack, wtsc } from '../core/WTSC/WTSCPrototype'
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

export function keyframes(
  name: string,
  callBack: (addKeyfram: typeof addKeyframe) => void
): Keyframes {
  hideAddStack()
  keyframsData = { name, keyfram: {} }

  wtsc.shandbox(() => callBack(addKeyframe))

  findAddStack()

  return {
    keyfromsData: keyframsData,
    out,
  }
}
