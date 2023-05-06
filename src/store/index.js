import Vue from 'vue'
import Vuex from 'vuex'

import appSystemInfo from './modules/app-system-info'
import appAuth from './modules/app-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appSystemInfo,
    appAuth,
  },
})
