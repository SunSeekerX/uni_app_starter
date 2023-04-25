const path = require('path')
const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  parallel: false,
  configureWebpack: {
    plugins: [
      ScriptSetup({
        /* options */
      }),
    ],
    resolve: {
      alias: {
        '@root': resolve('./'),
      },
    },
  },
  chainWebpack(config) {
    // disable type check and let `vue-tsc` handles it
    config.plugins.delete('fork-ts-checker')
  },
}
