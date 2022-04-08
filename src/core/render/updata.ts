import { StyleData } from './styleData'
import nextTick from '../../utils/nextTick'
import { render } from './render'
import { setStyle } from './SETDOMSTYLE'

let taskDdded: boolean = false

export const toBeUpdated: StyleData[] = []
export function update(styleData: StyleData): void {
  toBeUpdated.push(styleData)

  if (taskDdded) {
    return
  }

  nextTick(mount)
  taskDdded = true
}

export function mount(): void {
  setStyle(render())
  taskDdded = false
}
