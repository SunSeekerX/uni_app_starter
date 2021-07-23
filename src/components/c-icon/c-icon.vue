<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-02-02 20:07:38
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-23 10:30:54
-->

<template>
  <!-- #ifdef APP-NVUE -->
  <text @click="onClick" class="c-icon" :style="iconStyle">{{
    icons[name]
  }}</text>
  <!-- #endif -->

  <!-- #ifndef APP-NVUE -->
  <svg v-if="isUseSvg" :style="iconStyle" class="c-icon-svg" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
  <text
    v-else
    @click="onClick"
    class="c-icon"
    :class="name"
    :style="iconStyle"
  ></text>
  <!-- #endif -->
</template>

<script>
// #ifdef APP-NVUE
import icons from './icons'
import base64ttf from './base64ttf'
// #endif

// #ifdef H5
import './iconfont-svg'
// #endif
import { addUnit } from '@/utils/index'

export default {
  name: 'CustomIcon',
  props: {
    size: {
      type: [Number, String],
      default: 'inherit',
    },

    width: {
      type: [Number, String],
      default: 'auto',
    },
    height: {
      type: [Number, String],
      default: 'auto',
    },

    color: {
      type: String,
      default: '#333333',
    },

    name: {
      type: String,
      required: true,
    },

    rpx: {
      type: Boolean,
      required: false,
      default: false,
    },

    bubble: {
      type: Boolean,
      required: false,
      default: true,
    },

    svg: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    iconStyle() {
      if (this.isUseSvg) {
        let condition = null
        if (this.size === 'inherit') {
          condition = {
            width: addUnit(this.width, this.rpx),
            height: addUnit(this.height, this.rpx),
            'line-height': addUnit(this.height, this.rpx),
          }
        } else {
          condition = {
            width: addUnit(this.size, this.rpx),
            height: addUnit(this.size, this.rpx),
            'line-height': addUnit(this.size, this.rpx),
          }
        }
        return condition
      } else {
        return {
          color: this.color,
          fontSize:
            this.size === 'inherit' ? 'inherit' : addUnit(this.size, this.rpx),
          width: addUnit(this.width, this.rpx),
          height: addUnit(this.height, this.rpx),
          'line-height': addUnit(this.height, this.rpx),
        }
      }
    },

    isUseSvg() {
      // #ifdef H5
      return this.svg
      // #endif

      // #ifndef H5
      // eslint-disable-next-line no-unreachable
      return false
      // #endif
    },
  },

  methods: {
    onClick(e) {
      this.$emit('click')
      if (!this.bubble && e) {
        e.stopPropagation()
      }
    },
  },

  // #ifdef APP-NVUE
  data() {
    return {
      icons: icons,
    }
  },

  beforeCreate() {
    /**
     * iconfont 需要用ttf转base64
     * 转换网址：https://www.giftofspeed.com/base64-encoder/
     */
    const dom = uni.requireNativePlugin('dom')
    dom.addRule('fontFace', {
      fontFamily: 'iconfont',
      src: `url('data:font/truetype;charset=utf-8;base64,${base64ttf}')`,
    })
  },
  // #endif
}
</script>

<style scoped>
/* #ifndef APP-NVUE */
@import './iconfont.css'; /* Iconfont */

.c-icon-svg {
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}

/* #endif */

.c-icon {
  font-family: iconfont;
  text-align: center;
  text-decoration: none;
}
</style>
