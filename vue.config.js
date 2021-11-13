/**
 * Vue 打包配置
 * @author: SunSeekerX
 * @Date: 2021-05-07 20:56:07
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-17 16:05:09
 */

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  transpileDependencies: ['@limm/uni-pushy-client'],
  configureWebpack: {
    resolve: {
      alias: {
        '#root': resolve('./'),
      },
    },
  },
}
