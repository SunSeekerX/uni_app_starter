<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-09-06 14:22:51
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 21:44:25
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
  name: 'UtoolsPageIndex',
  data() {
    return {
      // 菜单列表
      /*
        渐变色：https://webkul.github.io/coolhue/
        */
      menuList: [
        {
          name: 'uni-app',
          description: 'uni-app 相关',
          url: '/apps/utools/pages/uni-app/uni-app',
          backgroundImage: 'linear-gradient( to left, #70F570, #49C628)',
        },
        {
          name: 'encode',
          description: '编码解码相关',
          url: '/apps/utools/pages/encode/encode',
          backgroundImage: 'linear-gradient( to left, #F05F57, #360940)',
        },
        {
          name: 'encrypt',
          description: '加密解密相关',
          url: '/apps/utools/pages/encrypt/encrypt',
          backgroundImage: 'linear-gradient( to left, #FFAA85, #B3315F;',
        },
        {
          name: 'validate',
          description: '正则验证相关',
          url: '/apps/utools/pages/validate/validate',
          backgroundImage: 'linear-gradient( to left, #97ABFF, #123597);',
        },
        {
          name: 'log',
          description: '日志工具',
          url: '/apps/utools/pages/log/log',
          backgroundImage: 'linear-gradient( to left, #FFF6B7, #F6416C);',
        },
        {
          name: 'random',
          description: '随机工具',
          url: '/apps/utools/pages/random/random',
          backgroundImage: 'linear-gradient( to left, #3B2667, #BC78EC);',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.description-text {
  color: #fff;
  font-size: 12px;
}
</style>
