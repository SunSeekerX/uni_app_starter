<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-03-27 14:11:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-17 15:14:10
-->

<script>
import { mapMutations } from 'vuex'

export default {
  onLaunch: function() {
    this.$util.LogUtil.log('App Launch')
    // 更新 App info
    this.UPDATE_SYSTEM_INFO()
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
