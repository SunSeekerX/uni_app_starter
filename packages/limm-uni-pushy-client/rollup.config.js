/**
 * rollup 打包配置
 * @author: SunSeekerX
 * @Date: 2021-06-02 18:42:23
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 00:17:14
 */

import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import fileSize from 'rollup-plugin-filesize'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'bin/bundle.esm.js',
      format: 'es',
    },
  ],
  plugins: [fileSize(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
  watch: {
    include: ['src/**'],
    exclude: 'node_modules/**',
  },
}
