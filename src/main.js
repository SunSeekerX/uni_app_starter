/**
 * 程序入口
 * @author: SunSeekerX
 * @Date: 2020-11-05 19:26:15
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 17:48:44
 */

/**
 * @name 引入依赖库
 */
import Vue from 'vue'
import uView from 'uview-ui'
import dayjs from 'dayjs'

/**
 * @name 依赖设置
 */
Vue.config.productionTip = false

/**
 * @name 引入文件
 */
import App from './App'
import store from './store/index'
import utools from './utools' // utools
import * as util from './utils/index' // 工具包
import * as constant from './constant' // 常量
import * as api from './apis' // Api
import * as handleError from './utils/handle-error' // 错误处理
import getEnv from './config/index'

/**
 * @name 挂载全局组件和安装插件
 */
Vue.use(uView)

/**
 * @name 挂载原型属性
 */
Vue.prototype.$util = util
Vue.prototype.$utools = utools
Vue.prototype.$store = store
Vue.prototype.$constant = constant
Vue.prototype.$api = api
Vue.prototype.$handleError = handleError
Vue.prototype.$dayjs = dayjs
Vue.prototype.$getEnv = getEnv

App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})
app.$mount()
