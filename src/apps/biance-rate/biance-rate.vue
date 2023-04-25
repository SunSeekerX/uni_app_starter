<template>
  <view>
    <!-- 固定高度 fixed 组件 -->
    <c-fixed-box :rpx="false" :height="120" :top="appSystemInfo.windowTop + 44">
      <view
        class="wd-flex wd-flex-col wd-justify-center wd-h-120 wd-w-750r wd-pl-25r wd-pr-25r"
        style="border-bottom: solid #eee 1px"
      >
        <u-search v-model="keyword" placeholder="请输入交易对" :show-action="false" @change="onSearchChange" />
        <view class="wd-flex wd-justify-between wd-items-center wd-h-34">
          <text class="wd-font-bold wd-text-16">下次资金费率时间</text>
          <text class="wd-text-16">{{ handleFormatTime(premiumList) }}</text>
        </view>
        <view class="wd-flex wd-justify-between wd-items-center wd-h-34">
          <text class="wd-font-bold wd-text-16">交易对</text>
          <text
            :style="{
              'background-color': sort === 'desc' ? '#28C76F' : '#EA5455',
            }"
            class="wd-text-16 wd-p-10r wd-rounded-6 wd-text-fff"
            @tap="onSort"
            >排序: {{ sort === 'desc' ? '降序' : '升序' }}</text
          >
        </view>
      </view>
    </c-fixed-box>

    <u-transition mode="fade-up" :duration="800" :show="state.isShow">
      <view class="wd-px-12">
        <view v-if="searchList.length">
          <view
            v-for="item of searchList"
            :key="item.symbol"
            class="item wd-flex wd-justify-between wd-items-center wd-h-34"
            style="border-bottom: solid 1px #eee"
          >
            <text class="wd-font-bold wd-text-16">{{ item.symbol }}</text>
            <text class="wd-text-16">{{ item.lastFundingRate }}%</text>
          </view>
        </view>
      </view>
    </u-transition>
  </view>
</template>

<script>
import combined from '@/utils/combined'

export default {
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
        const res = await combined.api.Biance.premiumIndex()
        if (res.length) {
          for (const item of res) {
            item.lastFundingRate = (parseFloat(item.lastFundingRate) * 100).toFixed(3)
          }
          this.premiumList = res
          // 搜索
          const searchList = this.handleSearch(res)
          // 排序
          this.searchList = this.handleSortRate(searchList)

          combined.utools.toast('更新成功')
        } else {
          combined.utools.toast('数据为空')
        }
      } catch (error) {
        combined.handleError.handleApiRequestException(error)
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
    // 格式化时间
    handleFormatTime(premiumList) {
      return premiumList.length
        ? combined.utools.dayjs(premiumList[0].nextFundingTime).format(combined.constant.dayjsFormat)
        : '更新中...'
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
