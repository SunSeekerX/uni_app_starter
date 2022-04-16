<!--
 * 根组件
 * @author: SunSeekerX
 * @Date: 2021-03-27 14:11:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 21:30:11
-->

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
    this.$util.LogUtil.log('App Launch')
    // 更新 App info
    this.UPDATE_SYSTEM_INFO()

    // 挂载属性到 globalData
    this.handleMountGlobalDataProperty()

    // #ifdef APP-PLUS
    // App 端启动需要的操作
    this.handleAppPlus()
    // #endif
  },
  onShow() {
    this.$util.LogUtil.log('App Show')
  },
  onHide() {
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
@import '../packages/windi-css-uni/src/index.scss';
@import '@/common/scss/index.scss'; /* 全局通用样式 */

/* #ifndef APP-NVUE */

/* uview */
@import 'uview-ui/index.scss';

/* CNode 需要 */
@import '~@/apps/cnode/components/feng-parse/parse.css';

image {
  will-change: transform;
}

* {
  box-sizing: border-box;
}

/* #endif */
</style>
