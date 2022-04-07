import { repeatX, repeatY, repeat, space, round, noRepeat } from './keyword'
export type Repeat = repeatX | repeatY | repeat | space | round | noRepeat
export type BackgroundRepeatRestValue =
  // 单值
  | [Repeat]
  // 双值
  | [Repeat, Repeat]
