<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-01-06 20:55:49
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-15 15:32:55
-->

<template>
  <view :data-theme="theme" :class="{ 'custom-provider': pageHeight }">
    <slot />
  </view>
</template>

<script>
import { mapGetters } from 'vuex'
import { setNavTheme } from '@/utils/mixin/set-nav-theme'

export default {
  name: 'CustomProvider',
  props: {
    pageHeight: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    ...mapGetters({
      theme: 'THEME',
      themeVal: 'themeVal',
    }),
  },
  mounted() {
    setNavTheme(this.theme, this.themeVal('colorNavigationBg'))
  },
}
</script>

<style lang="scss" scoped>
.custom-provider {
  min-height: calc(100vh - var(--window-top) - var(--window-bottom));
  background-color: var(--color-page-bg);
}
</style>
