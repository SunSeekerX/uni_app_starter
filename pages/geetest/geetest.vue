<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2020-06-06 22:01:36
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-06 22:07:14
-->
<template>
  <view>
    <c-geetest></c-geetest>
    <!-- <web-view :webview-styles="webviewStyles" src="/hybrid/html/geetest/index.html" @message="getMessage"></web-view> -->
  </view>
</template>

<script>
import CGeetest from '@/components/c-geetest/c-geetest'
export default {
  components: {
    CGeetest,
  },
  data() {
    return {
      webviewStyles: {
        progress: {
          color: '#FF3333',
        },
      },
    }
  },
  methods: {
    getMessage(e) {
      uni.showModal({
        content: JSON.stringify(e.detail),
        showCancel: false,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
