import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'

Vue.config.productionTip = false

Vue.use(uView)

App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
