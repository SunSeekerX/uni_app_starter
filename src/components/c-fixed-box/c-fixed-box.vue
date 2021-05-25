<template>
  <view>
    <!-- 内容占位区域 -->
    <view
      :style="{
        height: contentHeight,
        backgroundColor: background,
      }"
      class="content-placing"
    ></view>

    <!-- 内容显示区域 -->
    <view
      :style="{
        height: contentHeight,
        top: addUnit(contentTop, rpx),
        bottom: addUnit(bottom, rpx),
        left: addUnit(left, rpx),
        right: addUnit(right, rpx),
        backgroundColor: background,
      }"
      class="pt-f dp-fc z-1"
    >
      <slot />
    </view>
  </view>
</template>

<script>
import { addUnit } from '@/utils/index'
import { systemInfo } from '@/utils/mixin/index'
export default {
  name: 'c-fixed-box',
  mixins: [systemInfo],
  computed: {
    contentHeight() {
      return addUnit(this.height, this.rpx)
    },

    contentTop() {
      return this.top ? this.top : this.systemInfo.windowTop
    },
  },
  props: {
    // 内容高度
    height: {
      type: [Number, String],
      required: false,
      default: '100%',
    },

    // 内容高度
    top: {
      type: Number,
      required: false,
      default: 0,
    },

    bottom: {
      type: Number,
      required: false,
      default: 0,
    },

    left: {
      type: Number,
      required: false,
      default: 0,
    },

    right: {
      type: Number,
      required: false,
      default: 0,
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
  mounted() {
    console.log(this.systemInfo)
  },
}
</script>

<style lang="scss" scoped>
.content-placing {
  z-index: -1;
}

.content {
  // position: fixed;
  // z-index: 1;
}
</style>
