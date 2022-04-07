# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0-bate.29](https://github.com/wormery/wtsc/compare/v2.0.0-bate.28...v2.0.0-bate.29) (2022-04-07)


### Features

* 增加关于background八个方法的类型分别是background,backgroundClip,backgroundColor,backgroundImage,backgroundOrigin,backgroundPosition,backgroundRepeat,backgroundSize ([aaa1305](https://github.com/wormery/wtsc/commit/aaa13051b0f5c788165f60493a8c42dcdb2598a1))

## [2.0.0-bate.28](https://github.com/wormery/wtsc/compare/v2.0.0-bate.27...v2.0.0-bate.28) (2022-04-07)


### Features

* 增加css逗号语法,增加方法的完整类型 transition,transitionDelay,transitionDuration,transitionProperty,transitionTimingFunction ([c59912c](https://github.com/wormery/wtsc/commit/c59912c3a2ce24801dd94d907fa9640eaf41fe63))

## [2.0.0-bate.27](https://github.com/wormery/wtsc/compare/v2.0.0-bate.26...v2.0.0-bate.27) (2022-04-03)


### Bug Fixes

* 输出类型定义文件 ([ebf7127](https://github.com/wormery/wtsc/commit/ebf7127219d1749cf137f116876075d9314cc186))

## [2.0.0-bate.26](https://github.com/wormery/wtsc/compare/v2.0.0-bate.25...v2.0.0-bate.26) (2022-04-03)

## [2.0.0-bate.25](https://github.com/wormery/wtsc/compare/v2.0.0-bate.24...v2.0.0-bate.25) (2022-04-03)

## [2.0.0-bate.24](https://github.com/wormery/wtsc/compare/v2.0.0-bate.23...v2.0.0-bate.24) (2022-04-03)

## [2.0.0-bate.23](https://github.com/wormery/wtsc/compare/v2.0.0-bate.22...v2.0.0-bate.23) (2022-04-02)


### Bug Fixes

* 修复一个严重渲染bug,已通过单元测试,错误原因是单元测试不充分 ([15d44db](https://github.com/wormery/wtsc/commit/15d44dbcef5d85e0915e1259a93dcd385503ba3e))

## [2.0.0-bate.22](https://github.com/wormery/wtsc/compare/v2.0.0-bate.21...v2.0.0-bate.22) (2022-03-31)


### Bug Fixes

* 修复一个从bate14版本到现在才发现的一个问题,在其他项目测试使用时主题key类型错误,这个项目内没有任何错误的奇怪问题 ([0038544](https://github.com/wormery/wtsc/commit/00385446d0add478073feaae4efe8848cce7d4f9))

## [2.0.0-bate.21](https://github.com/wormery/wtsc/compare/v2.0.0-bate.20...v2.0.0-bate.21) (2022-03-30)


### Features

* if 工具函数 ([2590032](https://github.com/wormery/wtsc/commit/2590032517b9be6bef1347ea2a542d7236724b41))

## [2.0.0-bate.20](https://github.com/wormery/wtsc/compare/v2.0.0-bate.19...v2.0.0-bate.20) (2022-03-30)


### ⚠ BREAKING CHANGES

* out 现在改回函数了因为感觉头重脚轻的

### rest

* out 现在改回函数了因为感觉头重脚轻的 ([61e5c50](https://github.com/wormery/wtsc/commit/61e5c50434b0a81fd15b4fc52b4e533eee3e97c1))

## [2.0.0-bate.19](https://github.com/wormery/wtsc/compare/v2.0.0-bate.18...v2.0.0-bate.19) (2022-03-30)


### ⚠ BREAKING CHANGES

* shandbox 发现严重bug无法实现或性能损耗过大与设想不符,现在这个api由box实现,返回回调函数的返回值

### Features

* box隔离作用域更改 ([1de5b28](https://github.com/wormery/wtsc/commit/1de5b28a607125741ca2463bfc25caae6baa854e))


### Bug Fixes

* shandbox 发现严重bug无法实现或性能损耗过大与设想不符,现在这个api由box实现,返回回调函数的返回值 ([426e752](https://github.com/wormery/wtsc/commit/426e75284144583c81040ff16ffa6238b1e96595))

## [2.0.0-bate.18](https://github.com/wormery/wtsc/compare/v2.0.0-bate.17...v2.0.0-bate.18) (2022-03-29)


### ⚠ BREAKING CHANGES

* 删除shamApi、RealApi,没有对应api、修改out函数为get()、修改shandbox return wtsc,增加clean,增加box,详细使用见文档 删除所有类,全部转换为函数式api,减少对象嵌套来增强效率

### rest

* 删除shamApi、RealApi,没有对应api、修改out函数为get()、修改shandbox return wtsc,增加clean,增加box,详细使用见文档 删除所有类,全部转换为函数式api,减少对象嵌套来增强效率 ([77a4903](https://github.com/wormery/wtsc/commit/77a4903bb886f5b8d45b91bfa473941fd549e434))

## [2.0.0-bate.17](https://github.com/wormery/wtsc/compare/v2.0.0-bate.16...v2.0.0-bate.17) (2022-03-29)


### Bug Fixes

* deploy-docs ([7225255](https://github.com/wormery/wtsc/commit/7225255b0746205cf73092959a13266fe03b7078))

## [2.0.0-bate.16](https://github.com/wormery/wtsc/compare/v2.0.0-bate.15...v2.0.0-bate.16) (2022-03-28)


### Features

* animationDelay ([ac93897](https://github.com/wormery/wtsc/commit/ac9389772d588bb9d5cf071591cae35f6b859e75))
* boxShadow() ([ee7113b](https://github.com/wormery/wtsc/commit/ee7113bccad9a1dbbda66a02572bc40c7f517ef9))
* docs home ([ef9698e](https://github.com/wormery/wtsc/commit/ef9698e364e6f3d8eeadac69cd836030090d928b))
* position ([2cbaa18](https://github.com/wormery/wtsc/commit/2cbaa18037403febfa9fa3e398ba3efa48b10856))
* s() ms() Time animationDuration() ([936a47d](https://github.com/wormery/wtsc/commit/936a47dfe461c7d5fc222c26c3ebab2edc5d0c4b))
* updata apidocs ([7b20c8d](https://github.com/wormery/wtsc/commit/7b20c8d00b65282fea0ae591eeeb545bc89b7eb8))
* updata docs ([685ccdc](https://github.com/wormery/wtsc/commit/685ccdc965d2a1a4ed19349db8eb3446d2a15ccd))
* update docs ([f7f5a9e](https://github.com/wormery/wtsc/commit/f7f5a9ee9c83ba55239f4feb18221846c51538ac))


### Bug Fixes

* render 算法的一个严重错误,defWTSC创建的根wtsc也是隔离的,最终会全部汇总渲染 ([f3f2734](https://github.com/wormery/wtsc/commit/f3f2734ece9a7b8b8e5092cc4b1d28235121dbad))
* render 算法的一个严重错误,兄弟依赖只会渲染一个的bug ([3a4551b](https://github.com/wormery/wtsc/commit/3a4551b94f69a7325ebba360b1f183e221ce3cb8))
* root wtsc cover ([fd318c6](https://github.com/wormery/wtsc/commit/fd318c66c1971f6c9e506ee9950b25f6c1b4f1e7))

## [2.0.0-bate.15](https://github.com/wormery/wtsc/compare/v2.0.0-bate.14...v2.0.0-bate.15) (2022-03-24)


### Features

* keyframes ([047e338](https://github.com/wormery/wtsc/commit/047e338fb063fb6600cd75bb31e1c5325b3b1b69))
* update readme.md ([63b6fa4](https://github.com/wormery/wtsc/commit/63b6fa4f33bb199992fb6f360e80db3c6f8a681a))

## [2.0.0-bate.14](https://github.com/wormery/wtsc/compare/v2.0.0-bate.13...v2.0.0-bate.14) (2022-03-24)


### Features

* class(); pseudo() render() out() PseudoElements PseudoClasses getLeaf() dependencyCollation() update() 提级的方法新增或删除重写,还使用weakMap来分布存储,防止依赖集中无法释放导致内存泄漏,现在还有一个问题,css注册可能会内存泄漏,准备修复创建一个挂载钩子 ([6e66c5d](https://github.com/wormery/wtsc/commit/6e66c5dc1fdf4ea2d6bd9fba28b9eb3c43840e44))
* unmonunt() 卸载方法 ([b6cc43d](https://github.com/wormery/wtsc/commit/b6cc43df1937f987a9b8529dd2a0884d3fe4a624))
* update docs ([78fa8f8](https://github.com/wormery/wtsc/commit/78fa8f8254ec9a3d3ad2566d0a6d394d11464620))
* update readme.md ([f93442a](https://github.com/wormery/wtsc/commit/f93442add327ef97993cef55c44f5fdaecdc15cc))


### Bug Fixes

* 修复vite开发环境下当刷新代码,样式标签清空的问题 ([09c9157](https://github.com/wormery/wtsc/commit/09c9157bf3f46ee930c1f945a1139e7123428f64))

## [2.0.0-bate.13](https://github.com/wormery/wtsc/compare/v2.0.0-bate.12...v2.0.0-bate.13) (2022-03-21)


### ⚠ BREAKING CHANGES

* 删除defChild方法,sham方法拥有defChild功能,

### Features

* updata README.md ([7f210e3](https://github.com/wormery/wtsc/commit/7f210e33fe737075f1ba0383b0593dc35c76df52))
* update docs ([04a2951](https://github.com/wormery/wtsc/commit/04a2951c0a1019ab32445019419e7412f6084773))
* 删除defChild方法,sham方法拥有defChild功能, ([97e3802](https://github.com/wormery/wtsc/commit/97e3802384400f5cfebcd3ad16f65a8502ad9976))

## [2.0.0-bate.12](https://github.com/wormery/wtsc/compare/v2.0.0-bate.11...v2.0.0-bate.12) (2022-03-18)

## [2.0.0-bate.11](https://github.com/wormery/wtsc/compare/v2.0.0-bate.10...v2.0.0-bate.11) (2022-03-09)


### ⚠ BREAKING CHANGES

* !!!严重的破坏更改,我都没想到自己能写完,都想放弃了,由于ts类型声明的底层限制,代码梦回十年前,删除的比写的都多,代码量也从巅峰550kb到现在不到300kb,你们可以想想删除了多少功能,主api add函数没有了类型声明,原因是重载无法被分离然后合并为新函数,现在用的方案类似y于第一版wtsc的实现逻辑,取消了对象处理器概念,现在只把接口传进去来new wtsc,要求接口传入的参数必须有toString方法

### Features

* doc update ([70783eb](https://github.com/wormery/wtsc/commit/70783eb00c9f32650d1cc41b1cae08ebaf0a75c9))
* doc update ([01a1f5c](https://github.com/wormery/wtsc/commit/01a1f5c9d36f9807e77482faa933594107073c41))
* flex flexGrow flexShrink flexBasis ([87b579a](https://github.com/wormery/wtsc/commit/87b579a621a10a21a202683a2b83da59088a3344))
* height ([3442174](https://github.com/wormery/wtsc/commit/344217416e9b60dd7f37579ef278892857142082))
* maxHeight ([4d9d696](https://github.com/wormery/wtsc/commit/4d9d696e3da6da9e7df6aaa3c8b7255c5504a51f))
* minHeight ([a777da7](https://github.com/wormery/wtsc/commit/a777da7307ef38ee5a1dd65bc8590cda3c3440c4))


### Bug Fixes

* height add globalCSSValue ([6ac7c11](https://github.com/wormery/wtsc/commit/6ac7c11c69db6d6cb577b107d87f0d1b20c58244))
* minHeight add GlobalCSSValue ([0906316](https://github.com/wormery/wtsc/commit/0906316f607baba641dbca92a764fdad0e7dad95))
* width ToString ([7bac5d1](https://github.com/wormery/wtsc/commit/7bac5d141665d35aa5e16eebc78f3233eaf17490))


### rest

* !!!严重的破坏更改,我都没想到自己能写完,都想放弃了,由于ts类型声明的底层限制,代码梦回十年前,删除的比写的都多,代码量也从巅峰550kb到现在不到300kb,你们可以想想删除了多少功能,主api add函数没有了类型声明,原因是重载无法被分离然后合并为新函数,现在用的方案类似y于第一版wtsc的实现逻辑,取消了对象处理器概念,现在只把接口传进去来new wtsc,要求接口传入的参数必须有toString方法 ([3777a3d](https://github.com/wormery/wtsc/commit/3777a3d1436d841f1443f13594b72fad4714121b))

## [2.0.0-bate.10](https://github.com/wormery/wtsc/compare/v2.0.0-bate.9...v2.0.0-bate.10) (2022-03-07)


### Features

* add sham() real() shandbox() 等低消耗api ([1a3f9ef](https://github.com/wormery/wtsc/commit/1a3f9ef12efca365683e28831c7633bb99d111e4))
* storage ([655e3df](https://github.com/wormery/wtsc/commit/655e3df54fc7c614141b3ff383798bec0e770c44))
* TASK.md ([d33772a](https://github.com/wormery/wtsc/commit/d33772a1b7c6fea468f127cedca071ec3941ae51))

## [2.0.0-bate.9](https://github.com/wormery/wtsc/compare/v2.0.0-bate.8...v2.0.0-bate.9) (2022-03-05)


### Features

* 增加babel 理论可以兼容到chrome49版本 ([b2b9f59](https://github.com/wormery/wtsc/commit/b2b9f59f1478f732abcee475bd8a8b170b800fdd))

## [2.0.0-bate.8](https://github.com/wormery/wtsc/compare/v2.0.0-bate.7...v2.0.0-bate.8) (2022-03-05)


### ⚠ BREAKING CHANGES

* rest depProvide(key,value) =>
* 忘记给provide留一个key的输入接口,这个接口之前不能修改值

### Features

* update reactive readme.md ([a8531f8](https://github.com/wormery/wtsc/commit/a8531f8429c240bc8395d1f83539118740465172))
* 响应式 provider api生成器 defRefProviderAPI() ([01f6ecc](https://github.com/wormery/wtsc/commit/01f6ecc3d7183ec31df58c510cc3d1669753f518))
* 增加更多文档和注释 ([cfd6a53](https://github.com/wormery/wtsc/commit/cfd6a5330090c56913dc53dd2fc189870e190792))


### Bug Fixes

* 忘记给provide留一个key的输入接口,这个接口之前不能修改值 ([2ef2390](https://github.com/wormery/wtsc/commit/2ef2390a33247d857fef0ca16e3ea7bb838be679))


### rest

* rest depProvide(key,value) => ([7966c20](https://github.com/wormery/wtsc/commit/7966c205e67ce2d6f2a6a307069661dd43c23a0d))

## [2.0.0-bate.7](https://github.com/wormery/wtsc/compare/v2.0.0-bate.6...v2.0.0-bate.7) (2022-03-04)


### Features

* __DEV__ 开发环境识别 ([38fc27e](https://github.com/wormery/wtsc/commit/38fc27e840966979b15f06ddaa4651615bd8fb36))
* doc update ([435e1a3](https://github.com/wormery/wtsc/commit/435e1a320afa15758a92d6ba64a6bd04977ec613))
* more comments ([6ddfcc7](https://github.com/wormery/wtsc/commit/6ddfcc716aa55ca7ab18ea8e5bfb43ce0d2916de))
* more comments on cssvalue types ([6102e9e](https://github.com/wormery/wtsc/commit/6102e9eba680f1a9579795b612bed18d68446343))
* 全局csskey获得,方法virtualWorld ([a89ab88](https://github.com/wormery/wtsc/commit/a89ab88c6e29920b5a97cad1c061984ea572bfad))

## [2.0.0-bate.6](https://github.com/wormery/wtsc/compare/v2.0.0-bate.5...v2.0.0-bate.6) (2022-03-03)


### ⚠ BREAKING CHANGES

* 为了增加功能,以及项目稳定对整个项目文件分割做改变,并添加了若干功能,主题切换,现在可以在全局作用域内更换主题,主题切换从没这么简单

### Bug Fixes

* 打包时发现有一个引入错误打包失败,已修复 ([a99012b](https://github.com/wormery/wtsc/commit/a99012bda5002bf160be2f3376074fdd00c771c5))


### rest

* 为了增加功能,以及项目稳定对整个项目文件分割做改变,并添加了若干功能,主题切换,现在可以在全局作用域内更换主题,主题切换从没这么简单 ([39c7849](https://github.com/wormery/wtsc/commit/39c784906866400d026874155c9b32303d61e203))

## [2.0.0-bate.5](https://github.com/wormery/wtsc/compare/v2.0.0-bate.4...v2.0.0-bate.5) (2022-03-03)


### ⚠ BREAKING CHANGES

* api更改,使用不变,类型重构,思维更流程更容易理解,parsers中的wtsc重构

### Features

* add theme.ts ([8ba8a15](https://github.com/wormery/wtsc/commit/8ba8a152a59ccf908ff4df3b922ceb39e95560b0))


### rest

* api更改,使用不变,类型重构,思维更流程更容易理解,parsers中的wtsc重构 ([2fbdcda](https://github.com/wormery/wtsc/commit/2fbdcda67fae81da3455b3a1a740523bf290b487))

## [2.0.0-bate.4](https://github.com/wormery/wtsc/compare/v2.0.0-bate.3...v2.0.0-bate.4) (2022-02-28)


### ⚠ BREAKING CHANGES

* 重构WTSCAPI feat: documents

### Features

* add isWTSC&isInject ([cae392a](https://github.com/wormery/wtsc/commit/cae392add23d5924275eb1e1ce13c4b9185568f4))


### rest

* 重构WTSCAPI feat: documents ([9430797](https://github.com/wormery/wtsc/commit/943079704041980b455cf6b892a8e1692ddb9374))

## [2.0.0-bate.3](https://github.com/wormery/wtsc/compare/v2.0.0-bate.2...v2.0.0-bate.3) (2022-02-27)

## [2.0.0-bate.2](https://github.com/wormery/wtsc/compare/v2.0.0-bate.1...v2.0.0-bate.2) (2022-02-26)


### Features

* add some cssvalue keywarld ([aaec71e](https://github.com/wormery/wtsc/commit/aaec71ea36b273912b0d624d2a02252c7ec4ce92))

## [2.0.0-bate.1](https://github.com/wormery/wtsc/compare/v2.0.0-bate.0...v2.0.0-bate.1) (2022-02-19)

## [2.0.0-bate.0](https://github.com/wormery/wtsc/compare/v1.0.1...v2.0.0-bate.0) (2022-02-19)


### ⚠ BREAKING CHANGES

* 重大更改重构几乎所有功能
* rest Parsers
* rest Inject
* rest core/index
* rest WTSC

### Features

* add CSSValue ([0924036](https://github.com/wormery/wtsc/commit/09240360d4b4d15230dc65f341aea61c52fbbe83))
* add defineWTSC ([f9d2f94](https://github.com/wormery/wtsc/commit/f9d2f945402650162e813c7a19de6aaddce9db08))
* add isParserReturnValue() ([72c0522](https://github.com/wormery/wtsc/commit/72c05227e6db943acf554a56652fcb4cb62f9f81))
* add ParserSkip class ([b8e9484](https://github.com/wormery/wtsc/commit/b8e94847d490a5aa344c58c6ccd39a310671a26c))
* add standard-version ([8be59eb](https://github.com/wormery/wtsc/commit/8be59eb0b942115eb179e93df71a9bb31db810e6))
* add unit test 'inject.spec.ts' ([2764ae0](https://github.com/wormery/wtsc/commit/2764ae09f33964935c90cdcfae0f7c42395f16bd))
* add unit test 'wtsc.spec.ts' ([cc521a7](https://github.com/wormery/wtsc/commit/cc521a72d09dfeb9e683960f49f1b1c41e519503))
* add unit test "BaseParsers.spec.ts" ([dae8e2b](https://github.com/wormery/wtsc/commit/dae8e2b7573974e0519997528f989d60e09a4f06))
* add unit test error.spec.ts ([57164e4](https://github.com/wormery/wtsc/commit/57164e47391195f23f372741656d3ff5244b9d32))
* add wtsc.name:string  and toString() ([defa975](https://github.com/wormery/wtsc/commit/defa975a86fb2200a3b79de05622d4a95a671864))
* add WTSC.save() ([b28f72e](https://github.com/wormery/wtsc/commit/b28f72e24154a95b5895769639ecc9d42174f067))
* and parsersResulthandleWarn() function ([9fa70c6](https://github.com/wormery/wtsc/commit/9fa70c6309568faa43e76c8b5d743311e8bc7e0d))
* defChild() can define its own child WTSC name ([bfa3635](https://github.com/wormery/wtsc/commit/bfa36357a1fdefbf9e24991674bfa2555cb09fc2))


### Bug Fixes

* config fix ([3bfd784](https://github.com/wormery/wtsc/commit/3bfd784bd3a7cf314e539d6055e9e636c1f207ce))
* deleted useless files ([ebbd64e](https://github.com/wormery/wtsc/commit/ebbd64e9dd01e5c93313d99dcc567578e1f8bc60))
* fix the error reported by build ([4544f57](https://github.com/wormery/wtsc/commit/4544f57d34f1c4e60d681ad5149b1b2903019e14))
* One type forgot to write the operation error ([1b5f63a](https://github.com/wormery/wtsc/commit/1b5f63a56dda5a6d7096830746853a3294bd79c0))
* rm lib folder ([cc5d9c3](https://github.com/wormery/wtsc/commit/cc5d9c3481e5121f5a0e3c8115b7a80df507f959))


### rest

* rest core/index ([937d8fb](https://github.com/wormery/wtsc/commit/937d8fb47946132cab3a49b9d301b5bf4ce2f326))
* rest Inject ([96871cc](https://github.com/wormery/wtsc/commit/96871cc474389144324e29fcda2e8ca634d0414d))
* rest Parsers ([d2a5141](https://github.com/wormery/wtsc/commit/d2a5141f011a1503a06c9bd350c1726f5b29c961))
* rest WTSC ([1c377bf](https://github.com/wormery/wtsc/commit/1c377bf0e4be25f631baa4a3c0ef9cf39cf25192))
* 重大更改重构几乎所有功能 ([1809bdd](https://github.com/wormery/wtsc/commit/1809bddc576fdf3fada03f6dc021a39784146480))
