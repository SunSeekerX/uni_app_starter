<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-05-23 13:31:18
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 20:19:04
-->

<template>
  <view class="content wd-flex wd-justify-center wd-items-center">
    <uni-transition :duration="800" ref="ani" :mode-class="['fade', 'slide-bottom']" :show="state.isShowSplash">
      <view class="wd-flex wd-flex-col">
        <image class="wd-w-120 wd-h-120 wd-rounded-6" src="/static/images/projects/pionex/logo.jpg"></image>
        <text class="wd-text-666 wd-text-14 wd-mt-12">全国首家量化交易所</text>
      </view>
    </uni-transition>
  </view>
</template>

<script>
export default {
  name: 'PionexSplash',
  data() {
    return {
      state: {
        isShowSplash: false,
      },
    }
  },
  methods: {
    onTransitionFinish() {
      const key = `${this.$constant.appName}/pionex/start`
      const toIndex = () => {
        this.$utools.route({
          url: '/pages/projects/pionex/index/index',
          type: 'redirectTo',
        })
      }
      const flag = uni.getStorageSync(key)
      if (flag) {
        toIndex()
      } else {
        this.state.isShowSplash = true
        uni.setStorageSync(key, true)
        setTimeout(toIndex, 800)
      }
    },
  },

  onLoad() {
    this.onTransitionFinish()
  },
}
</script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
}
</style>
