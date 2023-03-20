<template>
  <view class="wd-flex wd-flex-col wd-flex-1">
    <view
      class="wd-w-750r"
      style="background-color: red"
      :style="{
        height: `${systemInfo.statusBarHeight}px`,
      }"
    />
    <view class="wd-w-750r wd-flex-center" style="background-color: green; height: 44px">
      <text class="wd-text-fff wd-text-18">导航栏</text>
    </view>
    <view
      class="wd-w-750r wd-flex-center wd-flex-col"
      style="background-color: blue; transition: all 2s"
      :style="{
        height: `${systemInfo.screenHeight - systemInfo.statusBarHeight - 44}px`,
      }"
    >
      <view>
        <text class="wd-text-fff wd-text-18">windowHeight: {{ systemInfo.windowHeight }}</text>
      </view>
      <view>
        <text class="wd-text-fff wd-text-18">screenHeight: {{ systemInfo.screenHeight }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PageUniAppPageHeight',
  computed: {
    ...mapState(['systemInfo']),
  },
}
</script>

<style lang="scss" scoped></style>
