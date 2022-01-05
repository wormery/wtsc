import BasicsUnit, {
  belongToBasicsUnit,
  filterUnitByBasicsUnit,
} from "./BasicsUnit";

export function fourValueDetcetor(rest: Array<string | number>) {
  const defaultUnit = BasicsUnit.PX;
  const restNumber = rest.length;
  let res: string[] = [];
  if (restNumber == 0) {
    throwError("您必须传入一些参数，您没有传入任何");
  }
  for (let i = 0; i < rest.length; i++) {
    let r = rest[i];
    if (typeof r === "string") {
      r = r.toLocaleLowerCase();
      if (filterUnitByBasicsUnit(r)) {
        res.push(r);
      } else {
        throwError("您传入的margin文本格式错误");
      }
    } else if (typeof r === "number") {
      i++;
      const num = r;
      r = rest[i];
      const unit = r;
      if (
        i < restNumber &&
        typeof unit === "string" &&
        belongToBasicsUnit(unit)
      ) {
        res.push(num + unit);
      } else {
        throwError("您传入的参数格式存在错误，数字类型后面必须跟随单位");
      }
    }
  }

  if (res.length <= 4) {
    let css = "";
    for (let i = 0; i < res.length; i++) {
      const cssFrag = res[i];
      css += cssFrag + " ";
    }
    css = css.slice(0, css.length - 1);
    return css;
  } else {
    throwError(
      "您传入的参数格式存在错误，为什么会传入超过4个<<有效参数>>呢，他们分别是" +
        resizeBy.toString()
    );
    return;
  }
}

export function throwError(msg: string, name?: string) {
  const e = Error(msg);

  if (!!name) {
    e.name = name;
  }

  throw e;
}
