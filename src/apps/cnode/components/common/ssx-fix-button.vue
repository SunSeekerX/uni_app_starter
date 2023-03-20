<template>
  <view class="prev" @tap="tab()">prev</view>
</template>

<script>
export default {
  methods: {
    tab() {
      uni.navigateBack({
        delta: 1,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.prev {
  display: flex;
  position: fixed;
  z-index: 999;

  /* #ifdef H5 */
  bottom: 50rpx;

  /* #endif */

  /* #ifndef H5 */
  bottom: calc(var(--window-bottom) + 50rpx);
  left: 50rpx;

  /* #endif */
  align-items: center;
  justify-content: center;
  width: 88rpx;
  height: 88rpx;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 20rpx 60rpx 20rpx rgb(0 0 0 / 20%);
  color: #80bd01;
  font-size: 12px;
}
</style>
