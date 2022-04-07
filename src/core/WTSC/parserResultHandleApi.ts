import { isUndef, isString, isFunction, isArray } from '@wormery/utils'
import { WTSCOptions } from './option'
import { isInjectKey, MixInjectValue } from '../inject/injectKey'
import { WTSC } from './WTSC'
import { StyleValue, AddRest, AddValue } from './types'
import { skip } from '../error/error'
import { parserSpace } from '../parser/ParserSpace'
import { preAddKey, wtsc } from './WTSCPrototype'
import { OutValue } from '../../../dist/CSSValue/index'

/**
 * @author meke
 * @private
 * @template F
 * @param {string} key
 * @param {F} handle
 * @param {...any[]} rest
 * @return {*}  {WTSC<T>}
 * @memberof WTSC
 */
export function parsersResultHandle(...rest: StyleValue): WTSC<any, any> {
  return toHandle(rest)
}
function toHandle(rest: StyleValue): WTSC<any, any> {
  parserSpace(preAddKey, () => {
    wtsc.addAny(preAddKey, ...rest)
  })
  return wtsc
}
export function Add(key: string, ...rest: StyleValue): WTSC<any, any> {
  return wtsc.addAny(key, ...rest)
}

let _wtsc: any

export function styleValueToString<O extends WTSCOptions, ParsersInterface>(
  wtsc: WTSC<O, ParsersInterface>,
  styleValue: StyleValue
): string {
  _wtsc = wtsc
  if (isAddRestList(styleValue)) {
    return addRestListToString(styleValue)
  } else {
    return addRestToString(styleValue)
  }
}

function addRestListToString(addRestList: AddRest[]): string {
  return addRestList.map((addRest) => addRestToString(addRest)).join(',')
}

export function isAddRestList(v: StyleValue): v is AddRest[] {
  if (v.length <= 0) {
    return false
  }
  return isArray(v[0])
}
let index: any

function addRestToString(addRest: AddRest): string {
  return addRest
    .map((v: MixInjectValue<AddValue>, _index) => {
      index = _index
      if (isInjectKey(v)) {
        // undefine跳过本条css不处理，通用错误处理会记录处理情况
        const addValue: AddValue = wtsc.inject(v) as any

        if (__DEV__) {
          if (isUndef(addValue)) {
            theInjectkeyGetsAnUndefinedWarning(index)
          }
        }

        return addValueTostring(addValue)
      }
      return addValueTostring(v)
    })
    .join(' ')
}

function addValueTostring(addValue: AddValue): string {
  if (isString(addValue)) {
    return addValue
  }

  if (typeof addValue === 'number') {
    return addValue.toString()
  }

  return outValueToString(addValue as any)
}

function outValueToString(outValue: OutValue<string>): string {
  if (__DEV__) {
    if (isUndef(outValue)) {
      aUndefWarning(index)
    }
  }

  if (__DEV__) {
    if (!isFunction(outValue.out)) {
      notAFunctionWarn(index)
    }
  }
  return outValue.out(_wtsc)
}

function warningForStyleToString(index: number, msg: string): never {
  skip(`第${index}个参数，`, msg)
}
function theInjectkeyGetsAnUndefinedWarning(index: number): never {
  warningForStyleToString(index, 'Injectkey返回了一个undefined')
}
function aUndefWarning(index: number): never {
  warningForStyleToString(index, `第${index}个参数是一个undefined`)
}
function notAFunctionWarn(index: number): void {
  warningForStyleToString(
    index,
    `当前正在处理的StyleValue的第${index}个参数，既不是string也不具有out方法，\
本css将会被忽略，请查看您是否有强制类型转换来解决问题`
  )
}
