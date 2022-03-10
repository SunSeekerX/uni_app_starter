<!--
 * tools
 * @author: SunSeekerX
 * @Date: 2021-03-27 23:41:33
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 21:49:01
-->

<template>
  <view>
    <view class="content">
      <!-- 项目菜单 -->
      <view class="menu">
        <view
          v-for="item of menuList"
          :key="item.name"
          @tap="
            $utools.route({
              url: item.url,
            })
          "
          class="dp-f fd-r jc-sb ai-c br-6 mb-12 p-all-12"
          :style="`background-image: ${item.backgroundImage};`"
        >
          <view class="dp-f fd-c f-1">
            <view class="item fd-r jc-sb ai-c lh-34">
              <text class="c-f fs-16 fw-b">{{ item.name }}</text>
            </view>

            <!-- 描述 -->
            <view class="description mt-6">
              <text class="description-text">{{ item.description }}</text>
            </view>
          </view>

          <c-icon color="#ffffff" name="icon-gengduo" size="16"></c-icon>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 菜单列表
      /*
      渐变色：https://webkul.github.io/coolhue/
      */
      menuList: [
        {
          name: 'utools',
          description: '适合 uni-app 开发的工具包',
          url: '/apps/utools/pages/index/index',
          backgroundImage: 'linear-gradient( to right, #70F570, #49C628)',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.description-text {
  font-size: 12px;
  color: #fff;
}
</style>
