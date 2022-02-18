// 处理核心
// 创建基础的实现处理器
import { defineBaseWTSC } from './parsers/index'
export * from './core/index'
// 这些是实现处理器
export * as parsers from './parsers/index'

export { defineBaseWTSC as createBaseWTSC }
// 默认推荐的处理器，普通用户只需要导出它就可了，它是一个函数，运行会创建一个处理器
export { defineBaseWTSC as defineWTSC }

const wtsc = defineBaseWTSC()

export default wtsc
console.log(wtsc.add.width('20px').out())
