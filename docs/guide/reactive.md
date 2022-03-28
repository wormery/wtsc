# 响应

响应化 api 的生成函数需要您把对应的响应 ref 函数传入进来，未来会增加自动响应环境识别并执行

## 初始化

```typescript
import { ref } from 'vue'
import { defRefPackager } from '@wormery/wtsc'
defRefPackager(ref)
```

这样的代码您只需要执行一次就可以了

## 简单使用

下面用 vue3 的计算属性做简要测试

```typescript
import { computed, ref } from 'vue'
import { defRefPackager, defTypeWTSC } from '@wormery/wtsc'

defRefPackager(ref)

const wtsc = defWTSC({})

const key = wtsc.provide('测试1')

//我们定义一个计算属性
const comV = computed(() => {
  return wtsc.inject(key)
})

//得到计算属性的值
console.log(comV.value) // 测试1

//我们给provide一个新值
wtsc.provide('测试2', key)

console.log(comV.value) // 测试2
//代表响应被监听,comV的值因为我们set了一个v2而改变
```

## 禁止响应

我们在定义 key 的时候就可以禁止响应只需要传入一个 false 就可以了

```typescript
const key = defInjKey(false)
```
