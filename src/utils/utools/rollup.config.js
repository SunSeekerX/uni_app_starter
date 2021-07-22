/**
 * rollup 打包配置
 * @author: SunSeekerX
 * @Date: 2021-06-02 18:42:23
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-22 17:46:08
 */

import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import fileSize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

// 一段自定义的内容，以下内容会添加到打包结果中
const footer = `
if(typeof window !== 'undefined') {
  window._utools_VERSION_ = '${pkg.version}'
}`

export default {
  input: 'src/index.ts',
  output: [
    // {
    //   file: pkg.main,
    //   format: 'cjs',
    //   footer,
    // },
    {
      file: pkg.module,
      format: 'esm',
      footer,
    },
    // {
    //   file: pkg.browser,
    //   format: 'umd',
    //   name: 'utools',
    //   footer,
    // },
  ],
  plugins: [
    typescript(),
    json(),
    nodeResolve(),
    fileSize(),
    terser({
      compress: {
        defaults: false,
      },
      format: {
        comments: true,
      },
    }),
    commonjs(),
  ],
  watch: {
    include: ['src/**'],
    exclude: 'node_modules/**',
  },
}
