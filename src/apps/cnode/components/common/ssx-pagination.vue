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
  width: 100%;
  height: 60rpx;
  padding: 10rpx 0;
  line-height: 60rpx;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  .prev,
  .next {
    display: flex;
    width: 60rpx;
    height: 60rpx;
    font-size: 12px;
    color: #c0c4cc;
    background-color: #f4f4f5;
    justify-content: center;
    align-items: center;
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
      width: 60rpx;
      height: 60rpx;
      color: #606266;
      justify-content: center;
      align-items: center;
    }

    .current {
      color: #fff;
      background-color: #80bd01;
    }
  }
}
</style>
