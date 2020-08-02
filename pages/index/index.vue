<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2020-06-06 21:08:01
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-06 22:01:03
-->
<template>
  <view class="container">
    <view @tap="router('/pages/geetest/geetest')" class="item">极验验证</view>
    <view @tap="router('/pages/tradingview/tradingview')" class="item">Tradingview</view>
   </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    router(url) {
      this.$util.router({
        url,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  .item {
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333333;
    font-size: 16px;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.07);
  }
}
</style>
