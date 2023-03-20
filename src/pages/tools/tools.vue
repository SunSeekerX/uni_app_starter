<template>
  <c-page background-color="#f6f6f6" box-class="wd-p-25r">
    <view
      v-for="item of menuList"
      :key="item.name"
      class="wd-flex wd-flex-row wd-justify-between wd-items-center wd-rounded-6 wd-mb-12 wd-p-12"
      :style="{
        'background-image': item.backgroundImage,
      }"
      @tap="
        $utools.route({
          url: item.url,
        })
      "
    >
      <view class="wd-flex wd-flex-col wd-flex-1">
        <view class="item wd-flex-row wd-justify-between wd-items-center wd-leading-34">
          <text class="wd-text-fff wd-text-16 wd-font-bold">{{ item.name }}</text>
        </view>

        <!-- 描述 -->
        <view class="description wd-mt-6">
          <text class="wd-text-fff wd-text-12">{{ item.description }}</text>
        </view>
      </view>

      <c-icon color="#ffffff" name="icon-gengduo" size="16" />
    </view>
  </c-page>
</template>

<script>
export default {
  name: 'PageTools',
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

<style lang="scss" scoped></style>
