# defWTSC

创建一个应用实例

每个 WTSC 实例都是通过 wtsc 创建的

## 简单使用

```typescript
import { defWTSC } from '@wormery/wtsc'
const wtsc = defWTSC({})
```

## 参数

您可以传入一个参数是一个 option

下面将展示 option 的一些可选属性列表

- name 给根 wtsc 起个名字，如果不输入的话默认为 root

```typescript
type: string
```

- defThemeKeys 您可以传入一个回掉函数，它的返回值将设置为 wtsc.the

```typescript
type: (this: Inject, provide: <T>(value: T) => InjectKey<T, true>) => TheKey
```

- themeList 根据前面的 defThemeKey 的返回值类型动态推断的去返回满足一下类型的一个参数

```typescript
type:{
    [mode in string]: {[themeName in string]:TheKey}
  }

```
