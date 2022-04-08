import { StyleData, defStyleData } from './styleData'
import { dependencyCounter } from './dependency'
import { getLeaf } from './leaf'
import { toBeUpdated } from './updata'
import { cssTemp } from './SETDOMSTYLE'

export const renderData: StyleData = defStyleData('render')

export function isRenderData(sd: StyleData): boolean {
  return renderData.id === sd.id
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

    renderCurrent(sd)

    // 第二步将当前的part放到父组件的part里面
    const partStr = merge(sd)

    const parent = sd.parent
    if (parent) {
      parent.part[id] = partStr
    } else {
      // 这里的作用是检查节点是否被删除，此删除行为可能发生上一帧的某个时间段
      // ，但是在删除之前添加到队列里

      // 查看是不是root节点
      if (isRenderData(sd)) {
        return partStr
      }
      sd = undefined
      // 不是root节点就忽略更新，它可能是一个已经被删除的节点
      continue
    }

    sd = next(parent, renderQueue, dependencyNumberMap)
  }
  return ''
}

function renderCurrent(sd: StyleData): void {
  const id = sd.id

  const style = sd.style
  sd.part[id] = Object.keys(style)
    .map((k) => {
      return `${k}{${style[k]}}`
    })
    .join('\n')
}

function merge(sd: StyleData): string {
  const part = sd.part
  return Object.getOwnPropertySymbols(part)
    .map((s) => {
      return part[s]
    })
    .join('\n')
}

function next(
  parent: StyleData,
  renderQueue: StyleData[],
  dependencyNumberMap: WeakMap<object, number>
): StyleData | undefined {
  // 第三步父组件的依赖数减一
  const newDependencyNumber = dependencyNumberMap.get(parent) as number

  if (newDependencyNumber > 1) {
    dependencyNumberMap.set(parent, newDependencyNumber - 1)

    // 从队列里执行下一个
    return renderQueue.pop()
  }

  // 第四步如果这个sd已经没有依赖项了，就开始执行
  return parent
}
