<!--
 * navigateTo
 * @author: SunSeekerX
 * @Date: 2021-09-17 14:28:27
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 14:57:27
-->

<template>
  <view
    class="page dp-fc fd-c"
    style="height: calc(100vh - var(--window-top)); background: linear-gradient(to right, #70f570, #49c628);"
  >
    <text class="c-f fs-36">{{ routeType }}</text>

    <view v-if="routeType === 'reLaunch'" class="c-f fs-24">
      <view>reLaunch 之后路由栈被清空，不会出现返回按钮</view>
      <button
        type="primary"
        @tap="
          $utools.route({
            url: '/pages/tools/tools',
            type: 'switchTab',
          })
        "
        >回到工具页</button
      >
    </view>

    <view v-if="routeType === 'redirectTo'" class="c-f fs-24">
      redirectTo 来源的页面被关闭，你将会会到 utools 列表页
    </view>
  </view>
</template>

<script>
export default {
  name: 'UtoolsUniAppRouteNavigateTo',

  data() {
    return {
      routeType: '',
    }
  },

  onLoad(options) {
    const { type } = options
    this.routeType = type
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index.scss';
</style>
