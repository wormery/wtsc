let test = undefined;
console.log(test || (test = "d"));
const test1 = {
  xxx() {},
};
console.log(typeof test1.xxx);

interface xxx {
  call<T, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    thisArg: T,
    ...args: A
  ): R;
}
class xxxi implements xxx {
  call<T, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    thisArg: T,
    ...args: A
  ): R {
    throw new Error("Method not implemented.");
  }
}
function fn<A extends any[], R extends any>(
  Fn: { (...rest: A): R },
  ...rest: A
): R {
  return <R>Fn(...rest);
}
function testfn(str: string, num: number, sdd: "343") {}

fn(testfn, "", 3, "343");

xxxi.call(testfn);

type xxxxx = {
  test(str: string): string;
};
type yyyyy<X, A extends any[], R> = {
  [num in keyof X]: { (...rest: A): R };
};

class testClass<T, K, A extends any[], R> {
  add: { [K in keyof T]:  } = <{ [K in keyof T]: T[K] }>{};
  constructor(ty: { [K in keyof T]: T[K] }) {}
}

function test2(str: string) {}
interface Test4Interface {
  width(str: string): number;
}

class test4 implements Test4Interface {
  width(str: string) {
    return 3;
  }
}

const test3 = new testClass(new test4());
test3.add.width("");
