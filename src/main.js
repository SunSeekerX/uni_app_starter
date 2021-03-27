/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-11-05 19:26:15
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-03-27 14:52:11
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
// 工具包
import * as util from './utils/index'
// 项目配置
import config from './config/index'

/**
 * @name 挂载全局组件和安装插件
 */

/**
 * @name 挂载原型属性
 */
Vue.prototype.$util = util
Vue.prototype.$store = store
Vue.prototype.$config = config

App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})
app.$mount()
