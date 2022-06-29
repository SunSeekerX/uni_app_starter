<template>
  <c-page backgroundColor="#f6f6f6" class="wd-p-25r">
    <AppOutput :output="consoleText" />
    <AppOperationContent name="随机工具">
      <AppOperationButton buttonText="uuidv1()" @onTap="onUUIDV1" />
    </AppOperationContent>
  </c-page>
</template>

<script>
import AppOutput from '../../components/app-output/app-output'
import AppOperationContent from '../../components/app-operation-content/app-operation-content'
import AppOperationButton from '../../components/app-operation-button/app-operation-button'

export default {
  name: 'UtoolsLogUtil',

  components: { AppOutput, AppOperationContent, AppOperationButton },

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
