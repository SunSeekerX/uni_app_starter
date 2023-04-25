import Vue from 'vue'
import Vuex from 'vuex'

import appSystemInfo from './modules/app-system-info'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    appSystemInfo,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
})
