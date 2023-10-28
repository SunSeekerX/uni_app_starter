const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  parallel: false,
  configureWebpack: {
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
