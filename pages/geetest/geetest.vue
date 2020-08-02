<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2020-06-06 22:01:36
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-08-02 18:01:38
-->
<template>
  <view>
    <view id="node">极验dom</view>

    <!-- #ifdef APP-PLUS -->
    <button @tap="test.onTriggerAppService">触发逻辑层Appservice方法</button>
    <!-- #endif -->
    <!-- #ifdef H5 -->
    <button @tap="onTriggerAppService">触发逻辑层Appservice方法</button>
    <!-- #endif -->

    <!-- #ifdef APP-PLUS -->
    <button @tap="onChangeOptions" :prop="option" :change:prop="test.renderjsMethod">触发视图层renderjs方法</button>
    <!-- #endif -->

    <!-- #ifdef H5 -->
    <button @tap="renderjsMethod">触发视图层renderjs方法</button>
    <!-- #endif -->
  </view>
</template>

<script module="test" lang="renderjs">
import '@/static/js/gt'
import axios from 'axios'

export default {
  mounted() {
    this.initGeetest()
    console.log(this.$ownerInstance)
  },
  methods: {
    // Init Geetest(初始化极验)
    async initGeetest() {
      let res = await axios.get(
        'http://dev.entry.bandex.lvyii.com/user/startCaptchaServlet',
        {
          params: {
            source: 'pc',
          },
        },
      )
      res = res.data

      window.initGeetest(
        {
          https: true,
          gt: res.gt,
          challenge: res.challenge,
          offline: !res.success,
          new_captcha: true,
          // new_captcha: res.new_captcha, // 用于宕机时表示是新验证码的宕机
          // offline: !res.data.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
          product: 'popup', // 产品形式，包括：float，popup,bind隐藏式
          width: '100%',

          // lang: lang_gt
        },

        captchaObj => {
          this.captchaObj = captchaObj
          captchaObj.appendTo('#node')
          captchaObj
            .onReady(() => {
              //验证码ready之后才能调用verify方法显示验证码
            })
            .onSuccess(() => {
              const result = captchaObj.getValidate()
              console.log('captchaObj.getValidate()>>>', result)

              /**
               * 在H5指向全局页面级Vue实例
               * 在app指向视图层Vue实例
               */
              console.log(
                '验证成功之后的this',
                this.onTriggerAppService(result),
              )

              // vm.callMethod('test', result)
            })
            .onError(e => {
              console.error(e)
            })
        },
      )
    },

    renderjsMethod(e) {
      console.log('我是renderjs里面的方法', e)
    },

    onTriggerAppService(e) {
      console.log('我是renderjs里面的方法触发逻辑层')

      const vm = this.$ownerInstance

      vm.callMethod('getTrigger', e)
    },
  },
}
</script>

<script>
// import CGeetest from '@/components/c-geetest/c-geetest'
export default {
  components: {
    // CGeetest,
  },
  data() {
    return {
      webviewStyles: {
        progress: {
          color: '#FF3333',
        },
      },

      option: {
        key: 'value',
        desc: '我是逻辑层的数据',
      },
    }
  },
  methods: {
    getMessage(e) {
      uni.showModal({
        content: JSON.stringify(e.detail),
        showCancel: false,
      })
    },

    test(e) {
      console.log('test>>>>>>>>>>>>>', e)
    },

    onChangeOptions() {
      this.option.key = new Date().getTime()
    },

    getTrigger(e) {
      console.log('我是逻辑层方法我被触发了', e)
    },
  },
}
</script>

<style lang="scss" scoped></style>
