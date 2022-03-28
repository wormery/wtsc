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

export interface StyleData {
  id: symbol
  name: string
  style: Data<string, string>
  part: Data<symbol, string>
  parent?: StyleData | undefined | null
}
export function defStyleData(
  name: string,
  parent: StyleData | undefined | null,
  id: symbol = Symbol('StyleDataId')
): StyleData {
  return {
    id,
    name,
    style: {},
    part: {},
    parent,
  }
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

export function getLeaf(toBeUpdated: StyleData[]): StyleData[] {
  const leaf = []

  const recordLeaf = new WeakSet()
  const baranchSet = new WeakSet()
  let styleData
  while (true) {
    styleData = toBeUpdated.pop()

    if (!styleData) {
      break
    }

    // 重复的更新
    if (recordLeaf.has(styleData)) {
      continue
    }

    if (baranchSet.has(styleData)) {
      continue
    }

    leaf.push(styleData)
    recordLeaf.add(styleData)

    let parent = styleData.parent
    while (parent) {
      baranchSet.add(parent)
      parent = parent.parent
    }
  }
  // 删除非叶子节点更新
  return (
    leaf
      .filter((item) => {
        return !baranchSet.has(item)
      })
      // 默认push到最后面，未了尽量不出问题，还按照原来的顺序排列
      .reverse()
  )
}

export function dependencyCounter(leaf: StyleData[]): WeakMap<object, number> {
  const dependencyNumberMap = new WeakMap<object, number>()
  let n: number | undefined
  leaf.forEach((item) => {
    dependencyNumberMap.set(item, 0)
    let sd = item.parent

    while (sd) {
      n = dependencyNumberMap.get(sd)

      if (n) {
        dependencyNumberMap.set(sd, n + 1)
      } else {
        dependencyNumberMap.set(sd, 1)
      }
      sd = sd.parent
    }
  })
  return dependencyNumberMap
}
export function addPro(pro: string, name: string): string {
  return pro + '-' + name
}

export function render(): string {
  const renderQueue = getLeaf(toBeUpdated)
  const dependencyNumberMap = dependencyCounter(renderQueue)

  let sd = renderQueue.pop()
  while (sd) {
    const id = sd.id
    // 第一步将style 更新渲染到part里面
    const style = sd.style
    sd.part[id] = Object.keys(style)
      .map((k) => {
        return `${k}{${style[k]}}`
      })
      .join('\n')

    // 第二步将当前的part放到父组件的part里面
    const part = sd.part
    const partStr = Object.getOwnPropertySymbols(part)
      .map((s) => {
        return part[s]
      })
      .join('\n')

    const parent = sd.parent
    if (!parent) {
      // 这里的作用是检查节点是否被删除，此删除行为可能发生上一帧的某个时间段
      // ，但是在删除之前添加到队列里

      // 查看是不是root节点
      if (rootStyleData === sd) {
        cssTemp = partStr
        return partStr
      }

      // 不是root节点就忽略更新，它可能是一个已经被删除的节点
      continue
    }

    parent.part[id] = partStr

    // 第三步父组件的依赖数减一
    const newDependencyNumber = (dependencyNumberMap.get(parent) as number) - 1

    dependencyNumberMap.set(parent, newDependencyNumber)

    // 第四步如果这个sd已经没有依赖项了，就开始执行
    if (newDependencyNumber === 0) {
      sd = parent
      continue
    }

    // 从队列里执行下一个
    sd = renderQueue.pop()
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
