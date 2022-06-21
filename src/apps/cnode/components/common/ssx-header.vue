<template>
  <view>
    <!-- 头部 -->
    <view class="header">
      <!-- logo -->
      <image class="cnode-logo" src="@/static/images/projects/cnode/cnodejs_light.svg"></image>
      <!-- 搜索 -->
      <view class="header-search">
        <view class="search-icon iconfont icon-search"></view>
        <view class="search-input"><input type="text" /></view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
// 头部logo
.header {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 750rpx;

  /* #ifndef H5 */
  margin-bottom: 50rpx;
  padding: 25rpx 0;
  padding-bottom: 20rpx;

  /* #endif */
  background-color: #444;

  // logo
  .cnode-logo {
    width: 240rpx;
    height: 68rpx;
    padding-bottom: 25rpx;
  }

  // 搜索
  .header-search {
    display: flex;
    align-items: center;
    width: 480rpx;
    height: 66rpx;
    padding: 0 20rpx;
    transition: 0.3s;
    border-radius: 50rpx;
    background-color: #888;

    .search-icon {
      width: 50rpx;
      color: #444;
      font-weight: 600;
    }

    .search-input {
      width: 430rpx;

      input {
        width: 410rpx;
        height: 66rpx;
        color: #666;
        font-size: 24rpx;
        line-height: 66rpx;
      }
    }
  }

  .header-search:hover {
    background-color: #fff;
  }
}
</style>
