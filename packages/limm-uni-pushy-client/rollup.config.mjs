import fileSize from 'rollup-plugin-filesize'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'bin/bundle.esm.js',
      format: 'es',
    },
  ],
  plugins: [fileSize(), ],
  watch: {
    include: ['src/**'],
    exclude: 'node_modules/**',
  },
}
