import { isNotUndef, isUndef, isUndefAndNull } from "./isType";

export function remove(arr: Array<any>, item: any): number {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1).length;
    }
    return index;
  }
  return -2;
}

const hasOwnProperty = Object.prototype.hasOwnProperty;
export function hasOwn(obj: Object, key: string) {
  return hasOwnProperty.call(obj, key);
}
export function hasProp(obj: Object, key: string) {
  let x: any = (obj as any)[key];
  return !!obj && !isUndef(x);
}

/**
 *
 *
 * @param array 将要被插入的数组
 * @param index 插入的位置
 * @param rest 任意数量的数组
 * @returns 返回新数组
 */
export function mergeArray<T>(array: T[], index: number, ...rest: T[][]) {
  let newArr = [];
  let p1 = 0;
  for (; p1 < index; p1++) {
    newArr.push(array[p1]);
  }
  for (const restarr of rest) {
    for (const item of restarr) {
      newArr.push(item);
    }
  }
  for (let i = p1; i < array.length; i++) {
    const item = array[i];
    newArr.push(item);
  }
  return newArr;
}

export function cached<F extends { (str: string, ...rest: any[]): any }>(
  handle: F
): F {
  const cache = Object.create(null);

  const cachecd: F = function (str: string, ...rest: any[]) {
    const obj = cache[str];
    return isNotUndef(obj) ? obj : (cache[str] = handle(str, ...rest));
  } as F;

  return cachecd;
}

/**
 * 找到以横线开头的
 * 括号里进行分组
 * 括号里的是第一组
 * 第一组应该是-
 */
const camelizeRE = /-(\w)/g;
/**
 * 转换为骆驼命名法
 */
export const camelize = cached((str: string) => {
  return str.replace(camelizeRE, (_, r: string) => r.toUpperCase());
});

/**
 * 首字母大写
 */
export const capitalize = cached((str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

/**
 * 大写字母
 */
const hypnenateRE = /([A-Z])/;

/**
 * 驼峰命名转横线命名法
 */
export const hypnenate = cached((str: string) => {
  return str
    .replace(hypnenateRE, (r: string) => {
      return `-${r}`;
    })
    .toLowerCase();
});

/**
 * 给函数绑定新指定的this，并返回一个新的函数
 * @param _this
 * @param fn
 * @returns  新的函数
 */
export function polyfillBind<F extends { (...rest: any): any }>(
  _this: Object,
  fn: F
) {
  const boundFn: F = <F>function (...rest: any) {
    return fn.apply(_this, rest);
  };
  return boundFn;
}

/**
 * 数组去重
 *
 * @param arr 数组
 * @returns 无重复的数组
 */
export function unique<E extends any[]>(arr: E) {
  return Array.from(new Set(arr));
}
