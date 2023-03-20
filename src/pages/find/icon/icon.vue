<template>
  <c-page background-color="#f6f6f6" class="wd-p-25r">
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
      <unIcon name="kefu" />
    </view>
  </c-page>
</template>

<script>
import unIcon from '@/components/un-icon/un-icon'
export default {
  name: 'ModuleIcon',
  components: {
    unIcon,
  },
}
</script>
