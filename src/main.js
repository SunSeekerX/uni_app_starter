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
    ...mapState('appSystemInfo', [
      'appSystemInfo',
      // #ifdef APP || MP-WEIXIN || H5
      'appWindowInfo',
      // #endif
    ]),
    ...mapGetters('appSystemInfo', ['statusBarHeight', 'navigationBarHeight', 'pageHeightC']),
  },
})

App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})
// const app = new (typeof App === 'function' ? App : Vue.extend(Object.assign({ mpType: 'app' }, App)))()
app.$mount()
