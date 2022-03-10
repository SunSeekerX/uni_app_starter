<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-05-26 18:10:08
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-26 18:10:40
-->
<template>
  <view>
    <!-- #ifndef H5 -->
    <!-- <view class="status_bar">  
			<view class="top_view"></view>  
		</view>  -->
    <!-- #endif -->
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
/* #ifndef H5 */
.status_bar {
  width: 100%;
  height: var(--status-bar-height);
  background-color: #444;
}

.top_view {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: var(--status-bar-height);
  background-color: #444;
}

/* #endif */
// 头部logo
.header {
  display: flex;
  width: 750rpx;
  padding: 25rpx 0;

  /* #ifndef H5 */
  margin-bottom: 50rpx;

  /* #endif */
  background-color: #444;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  // logo
  .cnode-logo {
    width: 240rpx;
    height: 68rpx;
    padding-bottom: 25rpx;
  }

  // 搜索
  .header-search {
    display: flex;
    width: 480rpx;
    height: 66rpx;
    padding: 0 20rpx;
    background-color: #888;
    border-radius: 50rpx;
    transition: 0.3s;
    align-items: center;

    .search-icon {
      width: 50rpx;
      font-weight: 600;
      color: #444;
    }

    .search-input {
      width: 430rpx;

      input {
        width: 410rpx;
        height: 66rpx;
        font-size: 24rpx;
        line-height: 66rpx;
        color: #666;
      }
    }
  }

  .header-search:hover {
    background-color: #fff;
  }
}
</style>
