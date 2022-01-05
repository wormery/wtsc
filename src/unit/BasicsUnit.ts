import { CSSValueType } from "../core/WTSC";
import Unit from "./Unit";

enum BasicsUnit {
  /**
   * 自动
   */
  AUTO = "auto",

  /**
   * 百分比
   */
  PE = "%",

  CH = "ch",

  /**
   * 厘米
   */
  CM = "cm",

  /**
   * 字体的一个根据设备大小改变的单位，可以手动指定
   */
  EM = "em",

  EX = "ex",

  FR = "fr",

  IN = "in",

  /**
   * 毫米
   */
  MM = "mm",

  PC = "pc",

  PT = "pt",

  /**
   * 像素单位
   */
  PX = "px",

  REM = "rem",

  /**
   * 屏幕的高度
   */
  VH = "vh",

  /**
   * 屏幕长和宽最大的那个
   */
  VMAX = "vmax",

  /**
   * 屏幕长和宽最小的那个
   */
  VMIN = "vmin",

  /**
   * 屏幕的宽
   */
  VW = "vw",
}
export default BasicsUnit;

export function belongToBasicsUnit(str: string) {
  for (const key in BasicsUnit) {
    const element = (BasicsUnit as any)[key];
    if (element === str) {
      return true;
    }
  }
  return false;
}

export const filterUnitByBasicsUnit = (function () {
  let rule = "";
  for (const key in BasicsUnit) {
    const element = (BasicsUnit as any)[key];
    rule += "^[0-9]+[0-9]*" + element + "$|";
  }
  rule = rule.slice(0, rule.length - 1);

  return function (css: string) {
    return css.search(rule) === 0;
  };
})();
