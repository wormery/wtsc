# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
