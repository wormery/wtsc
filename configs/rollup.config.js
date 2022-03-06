import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import { babel } from '@rollup/plugin-babel'
const moduleDir = path.resolve(__dirname, '../')

const getPath = (_path) => path.resolve(moduleDir, _path)

const buildOptions = ['cjs', 'esm', 'iife']

function genFileName(format, name, isProd) {
  const prefix = getPath('dist')
  const middle = `.${format}`
  const suffix = isProd ? '.prod.js' : '.js'
  return path.resolve(prefix, name + middle + suffix)
}

function createConfig(format, isProd = false) {
  const name = 'wtsc'

  const output = {
    file: genFileName(format, name, isProd),
    format: format,
    name,
  }

  return {
    input: getPath('./src/index.ts'),
    plugins: createPlugin(name, isProd),
    output,
  }
}

function defIfProdGet(isProd) {
  return function ifProdGet(fn, fn2 = () => undefined) {
    return isProd ? fn() : fn2()
  }
}

function createReplacePlugin(isProd) {
  const isDEV = !isProd
  return replace({
    values: {
      'global.__DEV__ = true': '',
      'global.__PROD__ = false': '',
      __DEV__: isDEV,
      __PROD__: isProd,
      'false || ': '',
    },
  })
}

const babelPlugin = babel({
  babelHelpers: 'bundled',
  exclude: 'node_modules/**',
})

function createPlugin(format, isProd) {
  const ifProdGet = defIfProdGet(isProd)

  const isSourceMap = !isProd
  const ret = []
  ret.push(
    ts({
      tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext',
          sourceMap: isSourceMap,
        },
        exclude: ['**/__tests__', 'test-dts', 'src/test/**'],
      },
    })
  )
  ret.push(createReplacePlugin(isProd))

  ret.push(resolve(['js', 'ts', 'json']))

  ret.push(
    commonjs({
      sourceMap: isSourceMap,
    })
  )

  ret.push(babelPlugin)

  ifProdGet(() => {
    ret.push(
      terser({
        module: /esm/.test(format),
        compress: {
          ecma: 2015,
          pure_getters: true,
        },
        safari10: true,
        format: {
          comments: function () {
            return false
          },
        },
      })
    )
  })

  return ret
}

const buildConfig = []

function createConfigList(isProd = false) {
  buildOptions.forEach((format) => {
    buildConfig.push(createConfig(format, isProd))
  })
}

if (process.env.NODE_ENV === 'production') {
  createConfigList(true)
} else {
  createConfigList(false)
}

export default buildConfig
