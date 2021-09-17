<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-02-02 14:16:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-16 23:04:13
-->

<template>
  <view>
    <!-- #ifndef APP-NVUE -->
    <c-provider
      class="dp-f fd-c ai-c jc-c"
      :style="{
        height: `${comHeight}px`,
        'background-color': backgroundColor,
      }"
      :page-height="false"
    >
      <c-icon :name="icon" size="66" :color="color" :svg="isUseSvg"></c-icon>
      <text class="fs-12 mt-5" :style="{ color: color }">空空如也</text>
    </c-provider>
    <!-- #endif -->

    <!-- #ifdef APP-NVUE -->
    <view
      :style="`height: ${comHeight}px; flex-direction: column; align-items: center; justify-content: center; background-color: ${
        backgroundColor || themeVal('colorContentBg')
      };`"
    >
      <c-icon :name="icon" size="66" :color="color || themeVal('colorInfoDisabled')"></c-icon>

      <text :style="`font-size: 12px; color: ${color || themeVal('colorInfoDisabled')};`" class="c-9">空空如也</text>
    </view>
    <!-- #endif -->
  </view>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

// 默认颜色
const defaultColor = '#DC316C'
// 默认图标名
const defaultIconName = 'icon-kong'

export default {
  name: 'CustomEmpty',
  props: {
    // 组件高度
    height: {
      type: [Number, String],
      required: false,
      default: 200,
    },
    // 组件背景色
    backgroundColor: {
      type: String,
      required: false,
      // #ifndef APP-NVUE
      default: 'var(--color-content-bg)',
      // #endif
      // #ifdef APP-NVUE
      default: '',
      // #endif
    },
    // 组件前景色，提示文字，图标
    color: {
      type: String,
      required: false,
      // #ifndef APP-NVUE
      // default: 'var(--color-info-disabled)',
      // #endif
      // #ifdef APP-NVUE
      // default: '',
      // #endif
      default: defaultColor,
    },
    // 图标
    icon: {
      type: String,
      required: false,
      default: defaultIconName,
    },
    // svg
    svg: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  computed: {
    // #ifdef APP-NVUE
    ...mapGetters({
      themeVal: 'themeVal',
    }),
    // #endif
    ...mapState({
      systemInfo: (state) => state.systemInfo,
    }),

    comHeight() {
      const { windowHeight, safeArea } = this.systemInfo
      if (this.height === 200 && windowHeight) {
        // #ifdef H5
        return windowHeight - 44
        // #endif
        // #ifndef H5
        return safeArea.height - 44
        // #endif
      } else {
        return this.height
      }
    },

    /*
    是否使用 svg
    设置了 color 属性 svg 属性不生效
    */
    isUseSvg() {
      if (this.color === defaultColor) {
        return true
      } else {
        return this.svg
      }
    },
  },
}
</script>
