<template>
  <c-page backgroundColor="#f6f6f6" class="wd-p-25r">
    <u-button
      class="wd-mb-6"
      v-for="item of list"
      :key="item.url"
      @click="
        $utools.route({
          url: item.url,
        })
      "
    >
      {{ item.name }}
    </u-button>
  </c-page>
</template>
<script>
export default {
  name: 'PageFind',
  data() {
    return {
      list: [
        {
          name: '等宽字体',
          url: '/pages/find/mono-font/mono-font',
        },
        {
          name: 'icon',
          url: '/pages/find/icon/icon',
        },
        {
          name: 'font-weight 测试',
          url: '/pages/find/font-weight/font-weight',
        },
        // {
        //   name: 'Uni-app',
        //   url: '/pages/find/uni-app/uni-app',
        // },
        {
          name: 'Uni-app 组件测试',
          url: '/pages/find/uni-app/uni-app-component',
        },
        {
          name: 'Uni-app 页面高度测试',
          url: '/pages/find/uni-app/page-height',
        },
        {
          name: 'Uni-app 页面高度测试 - nvue',
          url: '/pages/find/uni-app/page-height-nvue',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
// page {
//   background-color: #f6f6f6;
// }
</style>
