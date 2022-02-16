export default class SufUnit {
  constructor(public num: number, public unit: string) {}
  public toString(): string {
    return this.num.toString() + this.unit.toString()
  }
}
