<template>
  <view @tap="tab()" class="prev">prev</view>
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
  position: fixed;

  /* #ifdef H5 */
  bottom: 50rpx;

  /* #endif */

  /* #ifndef H5 */
  bottom: calc(var(--window-bottom) + 50rpx);
  left: 50rpx;
  z-index: 999;

  /* #endif */
  display: flex;
  width: 88rpx;
  height: 88rpx;
  font-size: 12px;
  color: #80bd01;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 20rpx 60rpx 20rpx rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
}
</style>
