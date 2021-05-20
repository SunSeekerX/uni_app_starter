<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-03-27 16:35:29
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-17 15:07:26
-->

<template>
  <view class="content">
    <!-- 轮播图 -->
    <view class="u-swiper">
      <u-swiper :list="bannerList" :height="394.875" mode="number"></u-swiper>
    </view>

    <!-- 项目菜单 -->
    <view class="menu">
      <view
        v-for="item of menuList"
        :key="item.name"
        @tap="
          $util.router({
            url: item.url,
          })
        "
        class="item dp-f jc-sb ai-c h-44 mt-12 pl-12 pr-12 br-3"
        :style="`background-image: ${item.backgroundImage};`"
      >
        <text class="c-f">{{ item.name }}</text>
        <c-icon color="#ffffff" name="icon-gengduo" size="16"></c-icon>
      </view>

      <view
        class="item dp-f jc-sb ai-c h-44 mt-12 pl-12 pr-12 br-6"
        style="border: solid 1px #eee; box-shadow: 0 2px 5px rgba(0, 0, 0, .1);"
      >
        <text class="c-6">检查更新</text>
        <c-icon color="#666666" name="icon-gengduo" size="16"></c-icon>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图数组
      bannerList: ['/static/images/home/1.jpg', '/static/images/home/2.jpg'],

      // 菜单列表
      /*
      渐变色：https://webkul.github.io/coolhue/
      */
      menuList: [
        {
          name: '币安资金费率',
          url: '/pages/projects/biance-rate/biance-rate',
          backgroundImage:
            'linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%)',
        },
        {
          name: '币安资金费率测试',
          url: '/pages/projects/biance-rate/biance-rate',
          backgroundImage:
            'linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
