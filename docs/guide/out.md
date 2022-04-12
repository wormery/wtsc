# out 的使用

out 在执行时会将存储的内容转换为文本并输出

例如：

```typescript
wtsc.add.transition('all', s(1), 'ease').out()

//transition: all 1s ease;
```

如果使用了 class,则会输出类名

例如：

```typescript
wtsc.add.transition('all', s(1), 'ease').class('class-name').out()

//root-class-name;
```

输出的类名会包含 scoped,将会以 scoped 所定义的名字做前缀，例如

```typescript
wtsc
  .scoped('scoped-name')
  .add.transition('all', s(1), 'ease')
  .class('class-name')
  .out()

//scoped-name-class-name;
```
