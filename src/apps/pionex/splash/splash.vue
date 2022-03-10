<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-05-23 13:31:18
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 20:19:04
-->

<template>
  <view class="content dp-f jc-c ai-c">
    <uni-transition :duration="800" ref="ani" :mode-class="['fade', 'slide-bottom']" :show="state.isShowSplash">
      <view class="dp-f fd-c">
        <image class="w-120 h-120 br-6" src="/static/images/projects/pionex/logo.jpg"></image>
        <text class="c-6 fs-14 mt-12">全国首家量化交易所</text>
      </view>
    </uni-transition>
  </view>
</template>

<script>
export default {
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
