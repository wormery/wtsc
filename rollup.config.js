import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import { babel } from '@rollup/plugin-babel'

const getPath = (_path) => path.resolve(__dirname, _path)

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

// // ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.esm.json'), // 导入本地ts配置
  exclude: ['src/test/**'],
})
const commonjsPlugin = commonjs({
  sourceMap: false,
})
const babelPlugin = babel({})

function createPlugin(format, isProd) {
  return [
    tsPlugin,
    resolve(['js', 'ts', 'json']),
    createReplacePlugin(isProd),
    // babelPlugin,
    commonjsPlugin,
    ...(isProd
      ? [
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
          }),
        ]
      : []),
  ]
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

function createReplacePlugin(isProd) {
  return replace({ values: { __DEV__: isProd } })
}
