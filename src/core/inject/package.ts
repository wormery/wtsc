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
