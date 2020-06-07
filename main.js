/**
 * @name: main.js
 * @author: SunSeekerX
 * @Date: 2020-06-06 21:08:00
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-06 21:33:18
 */
/**
 * @name 引入依赖库
 */
import Vue from 'vue'

/**
 * @name 引入文件
 */
import App from './App'
import store from './store/index'
import * as api from '@/apis/index'
import * as util from '@/utils/index'
import * as handleError from '@/utils/handle-error'
/**
 * @name 依赖设置
 */
Vue.config.productionTip = false

/**
 * @name 挂载全局组件和安装插件
 */

/**
 * @name 挂载原型属性
 */
Vue.prototype.$store = store
Vue.prototype.$api = api
Vue.prototype.$util = util
Vue.prototype.$handleError = handleError
App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})
app.$mount()
