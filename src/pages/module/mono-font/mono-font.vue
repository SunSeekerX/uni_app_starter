<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-03-27 23:41:33
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 21:52:42
-->

<template>
  <view>
    <view>部分设备字体默认就是等宽所以看不出来差别！</view>
    <view>普通字体</view>
    <view class="fs-40">012340123401234</view>
    <view class="fs-40">567895678956789</view>

    <view>等宽字体</view>
    <view><c-mono-font class="fs-40" text="012340123401234" /> </view>
    <view><c-mono-font class="fs-40" text="567895678956789" /> </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
