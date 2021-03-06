import { hypnenate } from '@wormery/utils'

export function uniteClassSelectors(
  ClassSelectors: string,
  className: string
): string {
  return `${ClassSelectors}.${hypnenate(className) as string}`
}

export function uniteClassNames(classNames: string, className: string): string {
  return `${classNames} ${hypnenate(className) as string}`.trim()
}

export function uniteSelectors(selectors: string, selector: string): string {
  return `${selectors} ${selector}`.trim()
}

export function uniteHoxClassNames(
  hoxClassNames: string,
  name: string
): string {
  if (hoxClassNames === '') {
    return name
  }
  return `${hoxClassNames}-${name}`
}
