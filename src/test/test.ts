// const style = createWTSC()
//   .add.width("15px")
//   .add.height("23px")
//   .addStyle("height", "20px")
//   .addAnyStyle("any", "style")
//   .return();
// console.log(style);

// import fs = require("@wormery");
import { WTSC } from '../core'
console.log('3333')

// const xxx = new WTSC({
//   height(n: number) {
//     return n.toString() + 'px'
//   },
//   width(n: number) {
//     return n.toString() + 'px'
//   },
//   position(s: string) {
//     return s
//   },
// })
const test = new WTSC({
  http(): { toString: () => string } {
    return ''
  },
})

console.log(test.defChild())

// const teststyle = xxx.add
//   .height(20)
//   .add.width(30)
//   .add('width', 3)
//   .add('position', '')
//   .return()
// console.log(teststyle)
