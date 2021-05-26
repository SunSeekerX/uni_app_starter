<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-03-27 14:11:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-26 15:56:53
-->

<script>
import { mapMutations } from 'vuex'
import { initSystemInfo } from '@mypui/myp-ui/utils/system'

// #ifdef APP-PLUS
import pushy from '@/utils/pushy/index'
// #endif

export default {
  /**
   * @name nvue 界面全局数据，非nvue 使用 this
   */
  globalData: {
    $util: null,
    $constant: null,
    $api: null,
    $dayjs: null,
    $getEnv: null,
    $handleError: null,
  },
  onLaunch: function () {
    this.$util.LogUtil.log('App Launch')
    // 更新 App info
    this.UPDATE_SYSTEM_INFO()

    // 挂载属性到 globalData
    this.handleMountGlobalDataProperty()

    // #ifdef APP-PLUS || H5
    initSystemInfo()
    // #endif
    // #ifndef APP-PLUS || H5
    setTimeout(() => {
      initSystemInfo()
    }, 0)
    // #endif

    // #ifdef APP-PLUS
    // App 端启动需要的操作
    this.handleAppPlus()
    // #endif
  },
  onShow: function () {
    this.$util.LogUtil.log('App Show')
  },
  onHide: function () {
    this.$util.LogUtil.log('App Hide')
  },
  methods: {
    ...mapMutations(['UPDATE_SYSTEM_INFO']),

    // 挂载属性到 globalData
    handleMountGlobalDataProperty() {
      this.globalData.$util = this.$util
      this.globalData.$constant = this.$constant
      this.globalData.$api = this.$api
      this.globalData.$getEnv = this.$getEnv
      this.globalData.$dayjs = this.$dayjs
      this.globalData.$handleError = this.$handleError
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
@import '~@/common/scss/markrgba-css/index.scss'; /* Some magic css */
@import '~@/common/scss/index.scss'; /* 全局通用样式 */

// mypUI
@import '@mypui/myp-ui/base.scss';

/* #ifndef APP-NVUE */
// uview
@import 'uview-ui/index.scss';

// CNode 需要
@import '~@/apps/cnode/components/feng-parse/parse.css';

/* #endif */
</style>
