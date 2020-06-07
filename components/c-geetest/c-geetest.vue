<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2020-06-06 22:02:06
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-06 22:16:49
-->
<template>
  <web-view :webview-styles="webviewStyles" src="/hybrid/html/geetest/index.html" @message="getMessage"></web-view>
</template>

<script>
export default {
  name: 'Geetest',
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
      console.log(e);
      uni.showModal({
        content: JSON.stringify(e.detail),
        showCancel: false,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
