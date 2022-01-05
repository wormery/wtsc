/**
 * it can check whether is a undefine type ,
 * it till you.
 *
 * @param v it object to be checked.
 * @returns it is undefine will return true;
 */
export function isUndef(v: any): boolean {
  return v === undefined;
}

export function isNotUndef(v: any): boolean {
  return !isUndef(v);
}

/**
 * enter  any object ,
 * it can check whether  is a null type ,
 * and tell you.
 *
 * @param v it is an object to be checked.
 * @returns if it is null ,it will return true;
 */
export function isNull(v: any): boolean {
  return v === null;
}

/**
 * this will check is it null or undefine ，this will return true
 *
 * @param v it can be anything type;
 * @returns   if it is null  or undefine ,it will return true;
 */
export function isUndefAndNull(v: any): boolean {
  return isNull(v) || isUndef(v);
}

/**
 * based on coming Object,
 * return true or false.
 *
 * @param v  it is a Object to determine
 * @returns if it should return true ,it will return true.
 */
export function isTure(v: any): boolean {
  return !!v === true;
}

/**
 * based on incoming Object,
 * return true or false
 *
 * @param v it is a Object to determine.
 * @returns  if it should return true ,it will return false.
 */
export function isFalse(v: any): boolean {
  return !!v === false;
}

/**
 * 是否是基础类型
 *
 *check whether is it a primitive type;
 *
 * @param v 要确定的对象
 * @returns 是基础类型则返回是 it is basic type ,ts is returned;
 */
export function isPrimitive(v: any): boolean {
  return (
    typeof v === "string" ||
    typeof v === "number" ||
    typeof v === "boolean" ||
    typeof v === "symbol"
  );
}
export function isArray(v: any): boolean {
  return Array.isArray(v);
}

/**
 *
 * @param v
 * @returns
 */
export function isObject(v: any): boolean {
  return v !== null && typeof v === "object";
}

/**
 * if is a string type,it will return true.
 *
 * @param v \
 * @returns
 */
export function isString(v: any): boolean {
  return typeof v === "string";
}

/**
 * if is a boolean type,it is return true;
 *
 * @param v
 * @returns
 */
export function isBoolean(v: any): boolean {
  return typeof v === "boolean";
}

/**
 * if is a symbol type,it is true
 *
 *
 * @param v
 * @returns
 */
export function isSymbol(v: any): boolean {
  return typeof v === "symbol";
}
/**
 * if is a number type ,it is return true;
 *
 * @param v
 * @returns
 */
export function isNumber(v: any): boolean {
  return typeof v === "number";
}

export function isPromise(v: any) {
  return (
    v instanceof Promise || (v.then === "function" && v.catch === "function")
  );
}

export function makeMap(mapString: string): (v: any) => boolean {
  const arr = mapString.split(",");

  let map: any = Object.create(null);

  for (let i = 0; i < map.length; i++) {
    map[arr[i]] = true;
  }

  return (v: any) => !!v && !!map[v.toLocaleLowerCase()];
}

export const isGlobalValue = makeMap("inherit,initial,unset");

export const isAuto = (v: any) => !!v && v == "auto";
