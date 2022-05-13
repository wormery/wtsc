/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-var-requires */
import { nextTick } from '../../utils'
import { warn } from '../error/warn'
import { config } from '../config/config'
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
export type Pack = <Value = any, Pack = any>(value: Value, pack?: Pack) => Pack
export type Unpack = <Value = any, Pack = any>(pack: Pack) => Value

export let pack: Pack = function (value: any, pack?: any) {
  return value
}

export let unpack: Unpack = function (value: any) {
  return value
}

type RefFun = <T>(value: T) => Ref<T>

interface Ref<T> {
  value: T
}

/**
 * 传入一个ref，定义ref打包器
 * @author meke
 * @export
 * @param {RefFun} _ref
 * @return {*}  {void}
 */
export function defRefPackager(_ref: RefFun): void {
  pack = (value: any, pack?: any): any => {
    if (pack) {
      pack.value = value
      return pack
    }

    return _ref(value)
  }
  unpack = (pack: any): any => {
    return pack.value
  }
}

// 自动添加响应
try {
  const test: Array<() => boolean> = [
    () => {
      //@ts-ignore
      if (vue) {
        //@ts-ignore
        return autoInpurt(vue)
      }
      return false
    },
    () => {
      //@ts-ignore
      if (Vue) {
        //@ts-ignore
        return autoInpurt(Vue)
      }
      return false
    },
  ]

  const r = test.reduce((previousValue, currentValue) => {
    if (previousValue) {
      return true
    }
    try {
      return currentValue()
    } catch {
      return false
    }
  }, false)

  if (!r) {
    throw new Error('')
  }

  function autoInpurt(v: any): boolean {
    const [main] = v.version.split('.')
    if (main === '3') {
      //@ts-ignore
      const { ref } = v
      //自动引入测试代码
      const s = Symbol('')
      const test = ref(s)
      if (test.value === s) {
        //@ts-ignore
        defRefPackager(ref)
        return true
      }
    }
    return false
  }
} catch {
  if (__DEV__) {
    nextTick(() => {
      if (config.warn.all || config.warn.autoInput) {
        warn(
          '自动添加响应vue失败，您可能不在一个vue您可以使用defRefPackager(ref)来定义ref响应,使用turnOffAutoImportWarning()来关闭警告'
        )
      }
    })
  }
}

export function turnOffAutoImportWarning(): void {
  autoInput = false
}
