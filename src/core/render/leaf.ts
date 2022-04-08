import { StyleData } from './styleData'
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
