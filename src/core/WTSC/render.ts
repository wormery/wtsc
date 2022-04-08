import nextTick from '../../utils/nextTick'
import { isBrowser } from '../../utils/utils'
import { warn } from '../error/warn'
import { defStyleData, StyleData } from './styleData'

export const rootStyleData: StyleData = defStyleData('root')

export function isRootStyleData(sd: StyleData): boolean {
  return rootStyleData.id === sd.id
}

export let cssTemp: any = ''

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

    setStyle(cssTemp)

    styleDom = style
  } catch (E) {
    warn('在将style标签添加到页面时发生了错误', E)
  }
}
function setStyle(s: string): void {
  // nolistening = true
  styleDom.innerHTML = cssTemp
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
  leaf.forEach((item) => {
    // 第一步 当前要求是叶节点，所以叶节点全部为零
    dependencyNumberMap.set(item, 0)

    // 对本树枝的所有节点初始化
    let sd = item.parent
    while (sd) {
      const n = dependencyNumberMap.get(sd)

      // 第二步 如果已经初始化了就+1依赖并退出这个叶节点的获取依赖进程
      if (n) {
        dependencyNumberMap.set(sd, n + 1)
        break
      }
      // 第三步 能访问到这个父节点就肯定有一个依赖项
      dependencyNumberMap.set(sd, 1)

      // 第四步 获得父 并继续初始化
      sd = sd.parent
    }
  })
  return dependencyNumberMap
}
export function addPro(pro: string, name: string): string {
  return pro + '-' + name
}

export function render(): string {
  if (toBeUpdated.length === 0) {
    return cssTemp
  }

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
      if (isRootStyleData(sd)) {
        return partStr
      }
      sd = undefined
      // 不是root节点就忽略更新，它可能是一个已经被删除的节点
      continue
    }

    parent.part[id] = partStr

    // 第三步父组件的依赖数减一
    const newDependencyNumber = dependencyNumberMap.get(parent) ?? 1

    // 第四步如果这个sd已经没有依赖项了，就开始执行
    if (newDependencyNumber === 1) {
      sd = parent
      continue
    } else {
      dependencyNumberMap.set(parent, newDependencyNumber - 1)
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

  nextTick(mount)
  taskDdded = true
}

export function mount(): void {
  cssTemp = render()

  setStyle(cssTemp)
  taskDdded = false
}

export function initStyleDom(_styleDom: object): void {
  styleDom = _styleDom as any
}
