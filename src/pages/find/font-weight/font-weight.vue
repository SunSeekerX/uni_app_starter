<template>
  <c-page background-color="#f6f6f6" box-class="wd-p-25r">
    <view v-for="item of list" :key="item.className" class="wd-pt-12">
      <text class="wd-text-24" :class="item.className">font weight {{ item.className }}</text>
    </view>
  </c-page>
</template>

<script>
export default {
  name: 'PageFontWeight',
  data() {
    return {
      list: [
        {
          className: 'wd-font-100',
        },
        {
          className: 'wd-font-200',
        },
        {
          className: 'wd-font-300',
        },
        {
          className: 'wd-font-400',
        },
        {
          className: 'wd-font-500',
        },
        {
          className: 'wd-font-600',
        },
        {
          className: 'wd-font-700',
        },
        {
          className: 'wd-font-800',
        },
        {
          className: 'wd-font-900',
        },
      ],
    }
  },
}
</script>
