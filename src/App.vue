<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-03-27 14:11:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-04-03 17:40:49
-->

<script>
export default {
  onLaunch: function() {
    this.$util.logUtil.log('App Launch')
  },
  onShow: function() {
    this.$util.logUtil.log('App Show')
  },
  onHide: function() {
    this.$util.logUtil.log('App Hide')
  },
}
</script>

<style lang="scss">
@import '~@/common/scss/markrgba-css/index.scss'; /* Some magic css */

/* #ifndef APP-NVUE */
// uview
@import 'uview-ui/index.scss';

/* #endif */
</style>
