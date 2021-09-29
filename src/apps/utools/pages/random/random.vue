<!--
 * 随机工具
 * @author: SunSeekerX
 * @Date: 2021-09-17 21:36:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 21:48:09
-->

<template>
  <view class="page">
    <AppOutput :output="consoleText" />
    <AppOperationContent name="随机工具">
      <AppOperationButton buttonText="uuidv1()" @onTap="onUUIDV1" />
    </AppOperationContent>
  </view>
</template>

<script>
import AppOutput from '../../components/app-output/app-output'
import AppOperationContent from '../../components/app-operation-content/app-operation-content'
import AppOperationInput from '../../components/app-operation-input/app-operation-input'
import AppOperationButton from '../../components/app-operation-button/app-operation-button'

export default {
  name: 'UtoolsLogUtil',

  components: { AppOutput, AppOperationContent, AppOperationInput, AppOperationButton },

  data() {
    return {
      consoleText: '输出区(可点击复制)',
    }
  },

  methods: {
    onUUIDV1() {
      const { $utools } = this
      this.consoleText = $utools.RandomUtil.uuidv1()
      $utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index.scss';
</style>
