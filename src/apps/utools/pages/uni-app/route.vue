<template>
  <view
    class="page wd-flex wd-flex-col"
    style="height: calc(100vh - var(--window-top)); background: linear-gradient(to right, #70f570, #49c628)"
  >
    <text class="wd-text-fff wd-text-36">{{ routeType }}</text>

    <view v-if="routeType === 'reLaunch'" class="wd-text-fff wd-text-24">
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

    <view v-if="routeType === 'redirectTo'" class="wd-text-fff wd-text-24">
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
