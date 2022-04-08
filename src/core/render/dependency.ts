import { StyleData } from './styleData'
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
