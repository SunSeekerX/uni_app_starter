/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-11-05 20:28:42
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-11-05 20:30:25
 */

/**
 * @name 引入依赖库
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * @name 引入文件
 */
import theme from './modules/theme'
import getters from './getters'

/**
 * @name 挂载全局组件和安装插件
 */
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    theme,
  },

  state: {
    // App 系统信息
    systemInfo: {},
  },

  mutations: {
    // Update system info
    UPDATE_SYSTEM_INFO(state) {
      state.systemInfo = uni.getSystemInfoSync()
    },
  },

  actions: {},

  getters,
})
