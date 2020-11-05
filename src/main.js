/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-11-05 19:26:15
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-11-05 20:37:20
 */

/**
 * @name 引入依赖库
 */
import Vue from 'vue'

/**
 * @name 依赖设置
 */
Vue.config.productionTip = false

/**
 * @name 引入文件
 */
import App from './App'
import store from './store/index'
import * as util from './util/index'

/**
 * @name 挂载全局组件和安装插件
 */

/**
 * @name 挂载原型属性
 */
Vue.prototype.$util = util
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})
app.$mount()
