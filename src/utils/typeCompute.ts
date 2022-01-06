/**
 * 类型等于两个类型相等返回true
 */
export type TypeEqual<X, Y> = X extends Y
  ? Y extends X
    ? true
    : false
  : false;

/**
 * 类型或运算,输入任何一个类型true，返回true否则为false
 */
export type TypeOr<X extends boolean, Y extends boolean> = TypeEqual<
  X,
  true
> extends true
  ? true
  : TypeEqual<Y, true>;

/**
 * 类型并，如果输入两个true返回true,否则返回false
 */
export type TypeAnd<X extends boolean, Y extends boolean> = TypeEqual<
  X,
  true
> extends true
  ? TypeEqual<Y, true> extends true
    ? true
    : false
  : false;
