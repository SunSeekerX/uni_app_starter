<template>
  <c-page background-color="#f6f6f6" box-class="wd-p-25r">
    <view>
      <text>Uni-app 组件测试</text>
    </view>

    <view>
      <view class="uni-title uni-common-mt">
        flex-direction: row
        <text>\n横向布局</text>
      </view>
      <view class="uni-flex uni-row">
        <view class="flex-item uni-bg-red">A</view>
        <view class="flex-item uni-bg-green">B</view>
        <view class="flex-item uni-bg-blue">C</view>
      </view>

      <view class="uni-title uni-common-mt">
        flex-direction: column
        <text>\n纵向布局</text>
      </view>
      <view class="uni-flex uni-column">
        <view class="flex-item flex-item-V uni-bg-red">A</view>
        <view class="flex-item flex-item-V uni-bg-green">B</view>
        <view class="flex-item flex-item-V uni-bg-blue">C</view>
      </view>
    </view>
  </c-page>
</template>

<script>
/**
 * 官方示例项目
 * github: https://github.com/dcloudio/hello-uniapp
 * demo: https://hellouniapp.dcloud.net.cn/pages/component/view/view
 */
export default {
  name: 'PageUniAppComponent',
}
</script>

<style lang="scss" scoped></style>
