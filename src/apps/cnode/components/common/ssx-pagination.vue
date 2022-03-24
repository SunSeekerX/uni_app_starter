<template>
  <view class="content">
    <view class="prev">《</view>
    <view class="page-list">
      <view @tap="handlePageChange()" class="page current">1</view>
      <view class="page">2</view>
      <view class="page">3</view>
      <view class="page">4</view>
      <view class="page">5</view>
      <view class="page">...</view>
    </view>
    <view class="next">》</view>
  </view>
</template>

<script>
// 废弃的分页器
export default {
  props: {
    total: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    // Page change
    handlePageChange() {},
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 60rpx;
  padding: 10rpx 0;
  line-height: 60rpx;

  .prev,
  .next {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60rpx;
    height: 60rpx;
    background-color: #f4f4f5;
    color: #c0c4cc;
    font-size: 12px;
  }

  .prev {
    margin-right: 10rpx;
  }

  .next {
    margin-left: 10rpx;
  }

  .page-list {
    display: flex;

    .page {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60rpx;
      height: 60rpx;
      color: #606266;
    }

    .current {
      background-color: #80bd01;
      color: #fff;
    }
  }
}
</style>
