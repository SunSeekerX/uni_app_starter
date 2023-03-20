<template>
  <c-page background-color="#f6f6f6" box-class="wd-p-25r">
    <view>部分设备字体默认就是等宽所以看不出来差别！</view>
    <view>普通字体</view>
    <view class="wd-text-40">012340123401234</view>
    <view class="wd-text-40">567895678956789</view>

    <view>等宽字体</view>
    <view><c-mono-font class="wd-text-40" text="012340123401234" /> </view>
    <view><c-mono-font class="wd-text-40" text="567895678956789" /> </view>
  </c-page>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
