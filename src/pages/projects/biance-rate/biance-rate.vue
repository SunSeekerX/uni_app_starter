<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-05-17 21:08:55
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-25 16:38:43
-->
<template>
  <view class="content">
    <c-fixed-box :rpx="false">
      <view class="w-750r pl-25r pr-25r">
        <u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search>

        <view class="dp-f jc-sb ai-c h-34">
          <text class="fw-b fs-16">下次资金费率时间</text>
          <text class="fs-16">{{
            premiumList.length ? $dayjs(premiumList[0].nextFundingTime).format($constant.dayjsFormat) : '更新中...'
          }}</text>
        </view>

        <view> </view>
      </view>
    </c-fixed-box>

    <view class="menu">
      <uni-transition :duration="800" ref="ani" :mode-class="['fade', 'slide-bottom']" :show="state.isShow">
        <view v-if="premiumList.length">
          <view
            v-for="item of premiumList"
            :key="item.symbol"
            class="item dp-f jc-sb ai-c h-34"
            style="border-bottom: solid 1px #eee;"
          >
            <text class="fw-b fs-16">{{ item.symbol }}</text> <text class="fs-16">{{ item.lastFundingRate }}</text>
          </view>
        </view>

        <c-empty v-else />
      </uni-transition>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      state: {
        isShow: true,
      },
      // 交易对列表
      premiumList: [],
      // 搜索关键词
      keyword: '',
    }
  },
  methods: {
    // 获取资金费率
    async onGetPremiumIndex() {
      try {
        const res = await this.$api.Biance.premiumIndex()
        this.premiumList = res
        this.$util.toast('更新成功')
      } catch (error) {
        this.$handleError.handleApiRequestException(error)
      } finally {
        uni.stopPullDownRefresh()
      }
    },
  },
  onLoad() {
    this.onGetPremiumIndex()
  },
  onPullDownRefresh() {
    this.onGetPremiumIndex()
  },
}
</script>

<style lang="scss" scoped></style>
