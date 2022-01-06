import { isNotUndef, isUndef, isUndefAndNull } from "./isType";
import { TypeEqual, TypeOr } from "./typeCompute";

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
export function hasOwn<O extends Object, K extends symbol | string | number>(
  obj: O,
  key: K
): obj is IsHasType<O, K> {
  return hasOwnProperty.call(obj, key);
}

/**
 * 查看有没有某属性有的话就在类型上添加此属性代表的类型，但是由于不知道此属性的值是什么类型所以默认给了any
 *
 * @param obj 要检查的对象
 * @param key  要检查的属性，注意如果输入变量将可能消除类型判断，所以我们就对于异常返回依然返回原类型（获取不到你变量里可能存在的类型）
 * @returns 如果为true 类型将包含输入的属性
 */
export function hasProp<O extends Object, K extends symbol | string | number>(
  obj: O,
  key: K
): obj is IsHasType<O, K> {
  let x: any = (obj as any)[key];
  return !!obj && !isUndef(x);
}

/**
 * 如果等于string | symbol| number之一就认为是不合理返回，将返回类型O
 */
type IsHasType<O, K extends symbol | string | number> = TypeOr<
  TypeOr<TypeEqual<K, string>, TypeEqual<K, symbol>>,
  TypeEqual<K, number>
> extends true
  ? O
  : O & { [key in K]: any };

/**
 * 是某个存在吗，传入那个存在
 * @param THE  那个存在
 * @returns 返回一个函数，如果向里面传入之前的那个词则返回true
 */
export function isThe<T>(THE: T) {
  return (V: any) => THE === V;
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
 * 找到以横线开头的ring|symbol
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

/**
 * 将symboltostring 然后去掉Symbol()拿到括号里面的东西
 * @param symbol
 * @returns symbol()里面的东西
 */
export function getSymbolStr(symbol: symbol) {
  const str = symbol.toString();
  return str.slice(7, str.length - 1);
}
