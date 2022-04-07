import { OutValue } from './index'
export interface Str extends OutValue<string> {
  value: string
}
const StrPropotype = {
  out(this: Str) {
    return this.value
  },
}

export function str(value: string): Str {
  return Object.setPrototypeOf({ value }, StrPropotype)
}
