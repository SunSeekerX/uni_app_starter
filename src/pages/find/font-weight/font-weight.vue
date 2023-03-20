<template>
  <c-page background-color="#f6f6f6" class="wd-p-25r">
    <view v-for="item of 9" :key="item" class="wd-pt-12">
      <text class="wd-text-32" :class="`wd-font-${item * 100}`">font weight {{ item * 100 }}</text>
    </view>
  </c-page>
</template>

<script>
export default {
  name: 'PageFontWeight',
}
</script>
