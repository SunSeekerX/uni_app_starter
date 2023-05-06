import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import { mapState, mapGetters } from 'vuex'

import './composition-api'
import App from './App'
import store from './store'

Vue.config.productionTip = false

Vue.use(uView)
Vue.mixin({
  computed: {
    // App system info
    ...mapState('appSystemInfo', [
      'appSystemInfo',
      // #ifdef APP || MP-WEIXIN || H5
      'appWindowInfo',
      // #endif
    ]),
    ...mapGetters('appSystemInfo', ['statusBarHeightGetter', 'navBarHeightGetter', 'pageHeightGetter', 'isIosGetter']),
    // App auth
    ...mapState('appAuth', ['appTokens', 'appUserInfo', 'appMpUserInfo']),
    ...mapGetters('appAuth', ['isAppAuthLogin']),
  },
})

App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})
app.$mount()
