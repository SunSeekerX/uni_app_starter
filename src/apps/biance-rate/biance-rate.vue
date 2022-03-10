<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-05-17 21:08:55
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 22:23:31
-->

<template>
  <view>
    <c-fixed-box :rpx="false" :height="120" :top="systemInfo.windowTop">
      <view class="dp-f fd-c jc-c h-120 w-750r pl-25r pr-25r" style="border-bottom: solid #eee 1px;">
        <u-search placeholder="请输入交易对" v-model="keyword" @change="onSearchChange" :show-action="false"></u-search>
        <view class="dp-f jc-sb ai-c h-34">
          <text class="fw-b fs-16">下次资金费率时间</text>
          <text class="fs-16">{{
            premiumList.length
              ? $utools.dayjs(premiumList[0].nextFundingTime).format($constant.dayjsFormat)
              : '更新中...'
          }}</text>
        </view>
        <view class="dp-f jc-sb ai-c h-34">
          <text class="fw-b fs-16">交易对</text>
          <text
            @tap="onSort"
            :style="`background-color: ${sort === 'desc' ? '#28C76F' : '#EA5455'};`"
            class="fs-16 p-all-10r br-6 c-f"
            >排序: {{ sort === 'desc' ? '降序' : '升序' }}</text
          >
        </view>
      </view>
    </c-fixed-box>

    <view class="content">
      <view class="menu">
        <uni-transition :duration="800" ref="ani" :mode-class="['fade', 'slide-bottom']" :show="state.isShow">
          <view v-if="searchList.length">
            <view
              v-for="item of searchList"
              :key="item.symbol"
              class="item dp-f jc-sb ai-c h-34"
              style="border-bottom: solid 1px #eee;"
            >
              <text class="fw-b fs-16">{{ item.symbol }}</text> <text class="fs-16">{{ item.lastFundingRate }}%</text>
            </view>
          </view>

          <c-empty v-else />
        </uni-transition>
      </view>
    </view>
  </view>
</template>

<script>
import { systemInfo } from '@/utils/mixin/index'
export default {
  mixins: [systemInfo],
  data() {
    return {
      state: {
        isShow: true,
      },
      // 交易对列表
      premiumList: [],
      // 搜索列表
      searchList: [],
      // 搜索关键词
      keyword: '',
      // 排序方式 降序：desc 升序：asc
      sort: 'desc',
    }
  },

  methods: {
    // 获取资金费率
    async onGetPremiumIndex() {
      try {
        // this.state.isShow = false
        const res = await this.$api.Biance.premiumIndex()
        if (res.length) {
          for (const item of res) {
            item.lastFundingRate = (parseFloat(item.lastFundingRate) * 100).toFixed(3)
          }
          this.premiumList = res
          // 搜索
          const searchList = this.handleSearch(res)
          // 排序
          this.searchList = this.handleSortRate(searchList)
          this.$utools.toast('更新成功')
        } else {
          this.$utools.toast('数据为空')
        }
      } catch (error) {
        this.$handleError.handleApiRequestException(error)
      } finally {
        // this.state.isShow = true
        uni.stopPullDownRefresh()
      }
    },

    // 排序资金费率
    handleSortRate(arr) {
      return arr.sort((a, b) => {
        if (this.sort === 'desc') {
          // 降序
          return Number(b.lastFundingRate) - Number(a.lastFundingRate)
        } else {
          // 升序
          return Number(a.lastFundingRate) - Number(b.lastFundingRate)
        }
      })
    },

    // 手动排序
    onSort() {
      if (this.sort === 'desc') {
        // 降序
        this.sort = 'asc'
      } else {
        // 升序
        this.sort = 'desc'
      }
      if (this.keyword) {
        this.searchList = this.handleSortRate(this.searchList)
      } else {
        this.searchList = this.handleSortRate(this.premiumList)
      }
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 100,
      })
    },

    // 搜索币种
    handleSearch(arr) {
      const { keyword } = this
      if (keyword) {
        const resList = []
        for (let item of arr) {
          if (item.symbol.includes(keyword.toUpperCase())) {
            resList.push(item)
          }
        }
        return resList
      } else {
        return arr
      }
    },

    // 手动搜索
    onSearchChange() {
      // 搜索
      const searchList = this.handleSearch(this.premiumList)
      // 排序
      this.searchList = this.handleSortRate(searchList)
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
