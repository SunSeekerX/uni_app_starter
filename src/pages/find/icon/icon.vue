<template>
  <c-page background-color="#f6f6f6" box-class="wd-p-25r">
    <view>
      <view>Svg</view>
      <c-icon name="icon-kong" size="66" :svg="true" />
      <c-icon name="icon-shouye" size="66" :svg="true" />
    </view>

    <view>
      <view>Font base</view>
      <c-icon name="icon-kong" size="66" :svg="false" />
      <c-icon name="icon-shouye" size="66" :svg="false" />
      <c-icon name="icon-shouye" color="#00ff00" size="66" :svg="false" />
    </view>
    <view>
      <view>unIcon</view>
    </view>
  </c-page>
</template>

<script>
export default {
  name: 'ModuleIcon',
}
</script>
