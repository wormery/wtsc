import { OutValue } from './index'
import { URL } from './url'
import { Color } from './color/Color'
import { isOutValue, genPack, setPrototypeOf } from '../utils/utils'
export interface Image extends OutValue {
  image: string | URL | Color
}
const pack = genPack('image(', ')')
const ImagePrototype = {
  out(this: Image, wtsc: any) {
    const image = this.image
    if (isOutValue(image)) {
      return pack(image.out(wtsc))
    }
    return pack(image)
  },
}

export function image(image: string | URL | Color): Image {
  return setPrototypeOf({ image }, ImagePrototype)
}
