<template>
  <view>
    <view class="wd-text-32 wd-text-666"> DappBrowserIndex </view>
    <view>
      <text>metaMask是否已连接：</text>
      <text>{{ state.isMetaMaskConnected ? '是' : '否' }}</text>
    </view>
    <u-button type="primary" text="连接 metamask" @tap="onConnectMetamask" />
  </view>
</template>
<script>
import detectEthereumProvider from '@metamask/detect-provider'
import combined from '@/utils/combined'
// import Web3 from 'web3/dist/web3.min.js'

export default {
  name: 'DappBrowserIndex',
  data() {
    return {
      // 状态
      state: {
        // 是否已连接
        isMetaMaskConnected: false,
      },
      // 以太坊提供者
      ethereumProvider: null,
    }
  },
  onLoad() {
    // 侦测以太坊提供者
    this.onDetectEthereumProvider()
  },
  methods: {
    // 侦测以太坊提供者
    async onDetectEthereumProvider() {
      uni.showLoading({
        title: '侦测以太坊提供者...',
      })
      const provider = await detectEthereumProvider()
      uni.hideLoading()
      console.log(provider)
      if (provider) {
        this.ethereumProvider = provider
      } else {
        combined.utools.toast('未发现以太坊提供者')
      }
    },
    // 连接到 metamask
    async onConnectMetamask() {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => {
          console.log(res)
          combined.utools.toast('获取账号成功')
        })
        .catch((error) => {
          if (error.code === 4001) {
            combined.utools.toast('用户拒绝请求')
          } else if (error.code === -32002) {
            combined.utools.toast('请解锁钱包')
          } else {
            combined.utools.toast(error.message)
          }
          console.error(error)
        })
    },
  },
}
</script>
<style lang="scss" scoped></style>
