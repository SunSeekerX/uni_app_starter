/**
 * rollup 打包配置
 * @author: SunSeekerX
 * @Date: 2021-06-02 18:42:23
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 00:17:14
 */

import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import fileSize from 'rollup-plugin-filesize'
import alias from '@rollup/plugin-alias'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    alias({
      entries: [{ find: '@', replacement: './' }],
    }),
    typescript(),
    json(),
    nodeResolve(),
    fileSize(),
    commonjs(),
  ],
  watch: {
    include: ['src/**'],
    exclude: 'node_modules/**',
  },
}
