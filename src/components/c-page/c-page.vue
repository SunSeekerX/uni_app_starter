<template>
  <view class="page" :style="`background-color: ${backgroundColor};`"> <slot /> </view>
</template>
<script>
export default {
  name: 'CustomPage',
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: 'transparent',
    },
  },
}
</script>
<style lang="scss" scoped>
.page {
  flex: 1;

  /* #ifndef APP-NVUE */
  min-height: calc(100vh - var(--window-top) - var(--window-bottom) - env(safe-area-inset-bottom));

  /* #endif */
}
</style>
