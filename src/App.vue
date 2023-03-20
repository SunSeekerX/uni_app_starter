<script>
import { mapMutations } from 'vuex'

// #ifdef APP-PLUS
import pushy from '@/utils/pushy/index'
// #endif

export default {
  /**
   * nvue 界面全局数据，非nvue 使用 this
   */
  globalData: {
    $util: null,
    $constant: null,
    $api: null,
    $getEnv: null,
    $handleError: null,
    $utools: null,
  },
  onLaunch() {
    console.log('App Launch')
    // 更新 App info
    this.onUpdateSystemInfo()

    // 挂载属性到 globalData
    this.handleMountGlobalDataProperty()

    // #ifdef APP-PLUS
    // App 端启动需要的操作
    this.handleAppPlus()
    // #endif
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  },
  methods: {
    ...mapMutations(['onUpdateSystemInfo']),

    // 挂载属性到 globalData
    handleMountGlobalDataProperty() {
      this.globalData.$util = this.$util
      this.globalData.$constant = this.$constant
      this.globalData.$api = this.$api
      this.globalData.$getEnv = this.$getEnv
      this.globalData.$handleError = this.$handleError
      this.globalData.$utools = this.$utools
    },

    // App 端启动需要的操作
    handleAppPlus() {
      // 锁定屏幕
      plus.screen.lockOrientation('portrait-primary')
      if (plus.runtime.appid !== 'HBuilder') {
        // 真机运行不需要检查更新，真机运行时appid固定为'HBuilder'，这是调试基座的appid
        // 检查更新
        pushy.getUpdate()
      }
    },
  },
}
</script>

<style lang="scss">
// @import '../packages/limm-markrgba-css/src/index.scss'; /* Some magic css */
@import '../packages/limm-windi-css-uni/src/index.scss';

/* #ifndef APP-NVUE */

/* uview */
@import '@/uni_modules/uview-ui/index.scss';

/* CNode 需要 */
@import '~@/apps/cnode/components/feng-parse/parse.css';

image {
  will-change: transform;
}

// 不加 view 微信小程序不会生效
*,
view {
  box-sizing: border-box;
}

/* #endif */
</style>
