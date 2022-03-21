const nextTickData: Array<() => void> = []
let timouter: NodeJS.Timeout = setTimeout(() => {})

export default function nextTick(f: () => void): void {
  nextTickData.push(f)

  clearTimeout(timouter)
  timouter = setTimeout(nextTickRun, 0)
}

function nextTickRun(): void {
  nextTickData.forEach((f) => f())
}
