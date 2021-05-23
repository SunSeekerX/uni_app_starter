<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-05-23 14:05:56
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-23 14:11:10
-->
<template>
  <view>
    <view>
      <view>Svg</view>
      <c-icon name="icon-kong" size="66" :svg="true"></c-icon>
      <c-icon name="icon-shouye" size="66" :svg="true"></c-icon>
    </view>

    <view>
      <view>Font base</view>
      <c-icon name="icon-kong" size="66" :svg="false"></c-icon>
      <c-icon name="icon-shouye" size="66" :svg="false"></c-icon>
      <c-icon
        name="icon-shouye"
        color="#00ff00"
        size="66"
        :svg="false"
      ></c-icon>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
