<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-05-26 18:10:08
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-26 18:11:03
-->
<template>
  <view v-if="loading" class="content">
    <view class="loader">
      <view class="loader_overlay"></view>
      <view class="loader_cogs">
        <view class="loader_cogs__top">
          <view class="top_part"></view>
          <view class="top_part"></view>
          <view class="top_part"></view>
          <view class="top_hole"></view>
        </view>
        <view class="loader_cogs__left">
          <view class="left_part"></view>
          <view class="left_part"></view>
          <view class="left_part"></view>
          <view class="left_hole"></view>
        </view>
        <view class="loader_cogs__bottom">
          <view class="bottom_part"></view>
          <view class="bottom_part"></view>
          <view class="bottom_part"></view>
          <view class="bottom_hole"></view>
        </view>
        <view class="loading_text">loading</view>
      </view>
    </view>
  </view>
</template>

<script>
// 废弃的loading
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  justify-content: center;
  align-items: center;
}

.loader {
  position: relative;
  width: 400rpx;
  height: 400rpx;
}

.loader_overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 150rpx;
  height: 150rpx;
  margin: auto;
  background: transparent;
  border-radius: 100%;
  box-shadow: 0rpx 0rpx 0rpx 1000rpx rgba(255, 255, 255, 0.35), 0rpx 0rpx 19rpx 0rpx rgba(0, 0, 0, 0.16) inset;
}

.loader_cogs {
  position: absolute;
  top: -120rpx !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100rpx;
  height: 100rpx;
  margin: auto;

  .loading_text {
    margin: 0 auto;
  }
}

.loader_cogs__top {
  position: relative;
  width: 100rpx;
  height: 100rpx;
  -webkit-transform-origin: 50rpx 50rpx;
  transform-origin: 50rpx 50rpx;
  -webkit-animation: rotate 10s infinite linear;
  animation: rotate 10s infinite linear;
}

.loader_cogs__top view:nth-of-type(1) {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.loader_cogs__top view:nth-of-type(2) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
}

.loader_cogs__top view:nth-of-type(3) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.loader_cogs__top view.top_part {
  position: absolute;
  width: 100rpx;
  height: 100rpx;
  background: #f98db9;
  border-radius: 10rpx;
}

.loader_cogs__top view.top_hole {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50rpx;
  height: 50rpx;
  margin: auto;
  background: white;
  border-radius: 100%;
}

.loader_cogs__left {
  position: relative;
  top: 28rpx;
  left: -24rpx;
  width: 80rpx;
  height: 80rpx;
  -webkit-transform: rotate(16deg);
  transform: rotate(16deg);
  animation: rotate_left 10s 0.1s infinite reverse linear;
  -webkit-transform-origin: 40rpx 40rpx;
  transform-origin: 40rpx 40rpx;
}

.loader_cogs__left view:nth-of-type(1) {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.loader_cogs__left view:nth-of-type(2) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
}

.loader_cogs__left view:nth-of-type(3) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.loader_cogs__left view.left_part {
  position: absolute;
  width: 80rpx;
  height: 80rpx;
  background: #97ddff;
  border-radius: 6rpx;
}

.loader_cogs__left view.left_hole {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 40rpx;
  height: 40rpx;
  margin: auto;
  background: white;
  border-radius: 100%;
}

.loader_cogs__bottom {
  position: relative;
  top: -65rpx;
  left: 79rpx;
  width: 60rpx;
  height: 60rpx;
  -webkit-transform: rotate(4deg);
  transform: rotate(4deg);
  -webkit-animation: rotate_left 10.2s 0.4s infinite linear;
  animation: rotate_left 10.2s 0.4s infinite linear;
  -webkit-transform-origin: 30rpx 30rpx;
  transform-origin: 30rpx 30rpx;
}

.loader_cogs__bottom view:nth-of-type(1) {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.loader_cogs__bottom view:nth-of-type(2) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
}

.loader_cogs__bottom view:nth-of-type(3) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.loader_cogs__bottom view.bottom_part {
  position: absolute;
  width: 60rpx;
  height: 60rpx;
  background: #ffcd66;
  border-radius: 5rpx;
}

.loader_cogs__bottom view.bottom_hole {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 30rpx;
  height: 30rpx;
  margin: auto;
  background: white;
  border-radius: 100%;
}

/* Animations */
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate_left {
  from {
    -webkit-transform: rotate(16deg);
    transform: rotate(16deg);
  }

  to {
    -webkit-transform: rotate(376deg);
    transform: rotate(376deg);
  }
}

@keyframes rotate_left {
  from {
    -webkit-transform: rotate(16deg);
    transform: rotate(16deg);
  }

  to {
    -webkit-transform: rotate(376deg);
    transform: rotate(376deg);
  }
}
</style>
