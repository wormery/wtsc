import { isBrowser } from '../../utils'
import { warn } from '../error/warn'

export let cssTemp: string = ''

// export const styleDom = document.createElement('style')
export let styleDom: HTMLStyleElement = {} as any

// 检查到浏览器场景自动挂载style
if (isBrowser) {
  try {
    const style = document.createElement('style')
    // 设置style属性
    style.setAttribute('type', 'text/css')

    style.id = 'wtscStyle'

    style.innerHTML = cssTemp

    // 将style样式存放到head标签
    document.getElementsByTagName('head')[0].appendChild(style)

    setStyle()

    styleDom = style
  } catch (E) {
    warn('在将style标签添加到页面时发生了错误', E)
  }
}

export function setStyle(s?: string): void {
  if (s) {
    cssTemp = s
  }
  // nolistening = true
  styleDom.innerHTML = cssTemp
}

export function initStyleDom(_styleDom: object): void {
  styleDom = _styleDom as any
}
