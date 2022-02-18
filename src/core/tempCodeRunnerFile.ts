const test = new WTSC({
  http(): { toString: () => string } {
    return '3322'
  },
})

const sss = defineInjKey('sss', 'ddd')
test.provide(sss, 'ddd')
console.log(test.inject(sss))