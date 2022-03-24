import { Data } from '../inject/types'
import nextTick from '../../utils/nextTick'
import { isBrowser } from '../../utils/utils'
import { defInjKey } from '../inject/injectKey'
import { warn } from '../error/warn'
interface SelectorData {
  name: string
  selector: string
  pseudoClass?: {
    [k in string]: string
  }
  style: string
}
export const selectorDataInj = defInjKey<SelectorData>()

interface StyleData {
  id: symbol
  name: string
  style: Data<string, string>
  part: Data<symbol, string>
  parent?: StyleData | undefined | null
}

export const styleDataInj = defInjKey<StyleData, true>()

export let cssTemp: any = ''

// export const styleDom = document.createElement('style')
export let styleDom: HTMLStyleElement = {} as any

/**
 * 伪元素类型
 */
export type PseudoElements =
  | ':after'
  | '::after'
  | '::backdrop'
  | ':before'
  | '::before'
  | '::cue'
  | '::cue-region'
  | ':first-letter'
  | '::first-letter'
  | ':first-line'
  | '::first-line'
  | '::file-selector-button'
  | '::grammar-error'
  | '::marker'
  // | '::part()' 暂时没有实现
  | '::placeholder'
  | '::selection'
  // | '::slotted()'
  | '::spelling-error'
  | '::target-text'

export type PseudoClasses =
  | ':active'
  | ':any-link'
  | ':blank'
  | ':checked'
  | ':current'
  | ':default'
  | ':defined'
  | ':dir()'
  | ':disabled'
  | ':drop'
  | ':empty'
  | ':enabled'
  | ':first'
  | ':first-child'
  | ':first-of-type'
  | ':fullscreen'
  | ':future'
  | ':focus'
  | ':focus-visible'
  | ':focus-within'
  | ':has()'
  | ':host'
  | ':host()'
  | ':host-context()'
  | ':hover'
  | ':indeterminate'
  | ':in-range'
  | ':invalid'
  | ':is()'
  | ':lang()'
  | ':last-child'
  | ':last-of-type'
  | ':left'
  | ':link'
  | ':local-link'
  | ':not()'
  | ':nth-child()'
  | ':nth-col()'
  | ':nth-last-child()'
  | ':nth-last-col()'
  | ':nth-last-of-type()'
  | ':nth-of-type()'
  | ':only-child'
  | ':only-of-type'
  | ':optional'
  | ':out-of-range'
  | ':past'
  | ':placeholder-shown'
  | ':read-only'
  | ':read-write'
  | ':required'
  | ':right'
  | ':root'
  | ':scope'
  | ':target'
  | ':target-within'
  | ':user-invalid'
  | ':valid'
  | ':visited'
  | ':where()'

if (isBrowser) {
  try {
    const style = document.createElement('style')
    // 设置style属性
    styleDom.type = 'text/css'

    style.id = 'wtscStyle'

    style.innerHTML = cssTemp

    // 将style样式存放到head标签
    document.getElementsByTagName('head')[0].appendChild(style)

    // vite工具动态更新样式会清空style标签，此是自动监听更新样式
    let isUpdating = false
    style.addEventListener('load', () => {
      if (!isUpdating) {
        isUpdating = true
        style.innerHTML = cssTemp
        setTimeout(() => {
          isUpdating = false
        }, 0)
      }
    })

    styleDom = style
  } catch (E) {
    warn('在将style标签添加到页面时发生了错误', E)
  }
}

let taskDdded: boolean = false

const toBeUpdated: StyleData[] = []

export function getLeaf(): StyleData[] {
  const leaf = []

  const weakSet = new WeakSet()
  let styleData
  while (true) {
    styleData = toBeUpdated.pop()

    if (!styleData) {
      break
    }

    if (weakSet.has(styleData)) {
      continue
    }

    leaf.push(styleData)

    let parent = styleData.parent
    while (parent) {
      weakSet.add(parent)
      parent = parent.parent
    }
  }
  // 删除非叶子节点更新
  return leaf.filter((item) => {
    return !weakSet.has(item)
  })
}

export function dependencyCollation(
  leaf: StyleData[]
): WeakMap<object, number> {
  const dependencyCounter = new WeakMap<object, number>()
  let n: number | undefined
  leaf.forEach((item) => {
    let parent = item.parent
    while (parent) {
      n = dependencyCounter.get(parent)
      if (n) {
        dependencyCounter.set(parent, n + 1)
      } else {
        dependencyCounter.set(parent, 0)
      }
      parent = parent.parent
    }
  })
  return dependencyCounter
}
export function addPro(pro: string, name: string): string {
  return pro + '-' + name
}

export function render(): string {
  const leaf = getLeaf()
  const dependencyCounter = dependencyCollation(leaf)

  while (true) {
    const l = leaf.pop()

    if (!l) {
      break
    }
    const id = l.id
    // 第一步将style 更新渲染到part里面
    const style = l.style
    l.part[id] = Object.keys(style)
      .map((k) => {
        return `.${l.name}-${k}{${style[k]}}`
      })
      .join('\n')

    // 第二步将当前的part放到父组件的part里面
    const part = l.part
    const partStr = Object.getOwnPropertySymbols(part)
      .map((s) => {
        return part[s]
      })
      .join('\n')

    const parent = l.parent
    if (!parent) {
      cssTemp = partStr
      return partStr
    }

    parent.part[id] = partStr

    // 第三步父组件的依赖数减一
    const parentDependencyCounter = (dependencyCounter.get(l) ?? 1) - 1
    if (parentDependencyCounter === 0) {
      leaf.push(parent)
    }
    dependencyCounter.set(l, (dependencyCounter.get(l) ?? 1) - 1)
  }
  return ''
}

export function update(styleData: StyleData): void {
  toBeUpdated.push(styleData)

  if (taskDdded) {
    return
  }

  nextTick(() => {
    styleDom.innerHTML = render()
    taskDdded = false
  })
  taskDdded = true
}

export function initStyleDom(_styleDom: object): void {
  styleDom = _styleDom as any
}
