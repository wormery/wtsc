import { initStyleDom } from '../../../../core/WTSC/render'
import { pseudoDOM } from './pseudeDOM'
const sets: Array<(value: string) => void> = []
initStyleDom(
  pseudoDOM((value) => {
    sets.forEach((s) => s(value))
  })
)
describe('render.ts', () => {})
