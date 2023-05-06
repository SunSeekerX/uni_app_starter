import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import fileSize from 'rollup-plugin-filesize'
import alias from '@rollup/plugin-alias'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'esm/bundle.esm.js',
        format: 'es',
      },
    ],
    plugins: [
      alias({
        entries: [{ find: '@/*', replacement: './src/*' }],
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
  },
  {
    input: 'src/index.mp.ts',
    output: [
      {
        file: 'esm/bundle.esm.mp.js',
        format: 'es',
      },
    ],
    plugins: [
      alias({
        entries: [{ find: '@/*', replacement: './src/*' }],
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
  },
]
