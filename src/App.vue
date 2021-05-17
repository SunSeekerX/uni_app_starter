<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-03-27 14:11:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-18 00:06:08
-->

<script>
import { mapMutations } from 'vuex'
// #ifdef APP-PLUS
import pushy from '@/utils/pushy/index'
// #endif

export default {
  onLaunch: function() {
    this.$util.LogUtil.log('App Launch')
    // 更新 App info
    this.UPDATE_SYSTEM_INFO()

    // #ifdef APP-PLUS
    if (plus.runtime.appid !== 'HBuilder') {
      // 真机运行不需要检查更新，真机运行时appid固定为'HBuilder'，这是调试基座的appid
      // 检查更新
      pushy.getUpdate()
    }
    // #endif
  },
  onShow: function() {
    this.$util.LogUtil.log('App Show')
  },
  onHide: function() {
    this.$util.LogUtil.log('App Hide')
  },
  methods: {
    ...mapMutations(['UPDATE_SYSTEM_INFO']),
  },
}
</script>

<style lang="scss">
@import '~@/common/scss/markrgba-css/index.scss'; /* Some magic css */
@import '~@/common/scss/index.scss'; /* 全局通用样式 */

/* #ifndef APP-NVUE */
// uview
@import 'uview-ui/index.scss';

/* #endif */
</style>
