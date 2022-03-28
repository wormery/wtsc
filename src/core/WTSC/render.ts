import { Data } from '../inject/types'
import nextTick from '../../utils/nextTick'
import { isBrowser } from '../../utils/utils'
import { defInjKey } from '../inject/injectKey'
import { warn } from '../error/warn'
interface SelectorData {
  name: string
  selector: string
  pseudoClass?: Data<string, string>
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

export const rootStyleData: StyleData = {
  id: Symbol(''),
  name: 'root',
  style: {},
  part: {},
}

export let cssTemp: any = ''

// export const styleDom = document.createElement('style')
export let styleDom: HTMLStyleElement = {} as any

// 检查到浏览器场景自动挂载style
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
        return `${k}{${style[k]}}`
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
      // 查看是不是root节点
      if (rootStyleData === l) {
        cssTemp = partStr
        return partStr
      }

      // 不是root节点就忽略更新，它可能是一个已经被删除的节点
      continue
    }

    parent.part[id] = partStr

    // 第三步父组件的依赖数减一
    const parentDependencyCounter = dependencyCounter.get(parent) ?? 0

    if (parentDependencyCounter === 0) {
      leaf.push(parent)
    }
    dependencyCounter.set(l, (dependencyCounter.get(parent) ?? 1) - 1)
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
