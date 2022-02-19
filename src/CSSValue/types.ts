import {
  cavailable,
  cfill,
  cfixContent,
  cinherit,
  cinitial,
  cmaxcontent,
  cmincontent,
  crevert,
  cunset,
  CVar,
  Length,
  Percentage,
  CMin,
  CMax,
  cauto,
} from '.'

export type GlobalCSSValues =
  | typeof cinherit
  | typeof cinitial
  | typeof cunset
  | typeof crevert
  | CVar

export type CSSSizeTypes = Length | Percentage | GlobalCSSValues | CMin | CMax

export type CssAllValueType =
  | typeof cinherit
  | typeof cinitial
  | typeof cunset
  | typeof crevert

export type CSSHWType =
  | Length
  | Percentage
  | GlobalCSSValues
  | typeof cauto
  | typeof cfixContent
  | typeof cmaxcontent
  | typeof cmincontent
  | typeof cavailable
  | typeof cfill
