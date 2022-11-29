import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    // theme,
  },
  state: {
    // App 系统信息
    systemInfo: {},
  },
  mutations: {
    onUpdateSystemInfo(state) {
      state.systemInfo = uni.getSystemInfoSync()
    },
  },
  actions: {},
  getters,
})
