export class Percentage {
  constructor(public n: number, public unit: '%') {}
  toString(): string {
    return this.n.toString() + this.unit
  }
}
export function PE(p: number): Percentage {
  return new Percentage(p, '%')
}
