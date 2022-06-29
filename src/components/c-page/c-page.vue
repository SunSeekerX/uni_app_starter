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
  /* #ifdef H5 */
  min-height: calc(100vh - var(--status-bar-height) - var(--window-top) - var(--window-bottom));

  /* #endif */

  /* #ifdef APP-PLUS */
  min-height: calc(100vh - var(--window-top) - var(--window-bottom));

  /* #endif */
}
</style>
