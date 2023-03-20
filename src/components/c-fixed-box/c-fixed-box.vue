<template>
  <view>
    <!-- 内容占位区域 -->
    <view
      :style="{
        height: addUnit(height, rpx),
        backgroundColor: background,
      }"
      class="content-placing"
    />

    <!-- 内容显示区域 -->
    <view
      :style="{
        height: addUnit(height, rpx),
        top: addUnit(top, rpx),
        bottom: addUnit(bottom, rpx),
        left: addUnit(left, rpx),
        right: addUnit(right, rpx),
        backgroundColor: background,
      }"
      class="wd-fixed wd-flex wd-z-1"
    >
      <slot />
    </view>
  </view>
</template>

<script>
import { addUnit } from '@/utils/index'
export default {
  name: 'CFixedBox',
  props: {
    // 内容高度
    height: {
      type: [Number, String],
      required: false,
      default: 'auto',
    },

    // 内容高度
    top: {
      type: [Number, String],
      required: false,
      default: 'auto',
    },

    bottom: {
      type: [Number, String],
      required: false,
      default: 'auto',
    },

    left: {
      type: [Number, String],
      required: false,
      default: 'auto',
    },

    right: {
      type: [Number, String],
      required: false,
      default: 'auto',
    },

    // 是否使用 rpx 单位
    rpx: {
      type: Boolean,
      required: false,
      default: false,
    },

    background: {
      type: String,
      required: false,
      default: '#fff',
    },
  },
  methods: {
    addUnit,
  },
}
</script>

<style lang="scss" scoped>
.content-placing {
  z-index: -1;
}
</style>
