// 引入依赖库
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import { mapState } from 'vuex'

// 引入文件
import App from './App'
import store from './store'
import utools from '@root/packages/limm-utools' // utools
import * as util from './utils' // 工具包
import * as constant from './constant' // 常量
import * as api from './apis' // Api
import * as handleError from './utils/handle-error' // 错误处理
import getEnv from './config'

// 依赖设置
Vue.config.productionTip = false

// 挂载全局组件和安装插件
Vue.use(uView)
Vue.mixin({
  computed: {
    ...mapState(['systemInfo']),
  },
})

// 挂载原型属性
Vue.prototype.$util = util
Vue.prototype.$utools = utools
Vue.prototype.$store = store
Vue.prototype.$constant = constant
Vue.prototype.$api = api
Vue.prototype.$handleError = handleError
Vue.prototype.$getEnv = getEnv

App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})
app.$mount()
