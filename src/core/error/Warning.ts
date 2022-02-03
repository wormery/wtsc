export class Warning extends Error {
  constructor(public msg: string) {
    super()
  }
}
