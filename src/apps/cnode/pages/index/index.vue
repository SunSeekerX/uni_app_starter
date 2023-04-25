<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-05-26 13:48:57
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 20:13:37
-->

<template>
  <view>
    <!-- 头部 -->
    <ssx-header />

    <!-- 话题 -->
    <view class="topic-wrap">
      <!-- 分类 -->
      <view class="topic-classify">
        <block v-for="classIfy of classIfyList" :key="classIfy.id">
          <view
            class="classify-item"
            :class="{ selected: currentClassIfy === classIfy.id }"
            @tap="handleClassIfyChange(classIfy.id)"
          >
            {{ classIfy.name }}
          </view>
        </block>
      </view>

      <!-- 列表 -->
      <view v-if="topicList.length" class="topic-list">
        <!-- 话题项 -->
        <block v-for="topic of topicList" :key="topic.id">
          <view class="topic" @tap="navigator(`../topic-details/topic-details?id=${topic.id}`)">
            <view class="topic-author-avatar">
              <image class="author-avatar-url" :src="topic.author.avatar_url" lazy-load />
            </view>
            <view v-if="currentClassIfy === 1" class="topic-type type-good">精华</view>
            <view v-else class="topic-type">{{ topic.tab }}</view>
            <view class="topic-info">
              <view class="topic-title">{{ topic.title }}</view>
              <view class="topic-other">
                <view class="topic-view">
                  <text class="count-of-replies">{{ topic.reply_count }}</text
                  >/<text>{{ topic.visit_count }}</text>
                </view>
                <view class="topic-time">{{ topic.last_reply_at }}</view>
              </view>
            </view>
          </view>
        </block>
        <!-- 分页器 -->
        <view class="pagination">
          <view class="pagination-action">
            <view class="prev" @tap="handlePageChange('prev')">prev</view>
            <view class="next" @tap="handlePageChange('next')">next</view>
          </view>
          <view class="current-page">当前是第{{ page }}页</view>
        </view>
      </view>
      <!-- No data -->
      <ssx-no-data v-if="!topicList.length" />
    </view>
  </view>
</template>

<script>
import combined from '@/utils/combined'

import SsxNoData from '../../components/common/ssx-no-data'
import SsxHeader from '../../components/common/ssx-header'
import { CNode } from '../../apis/index'

export default {
  name: 'CnodeINdex',
  components: {
    SsxNoData,
    SsxHeader,
  },
  data() {
    return {
      // 当前帖子分类
      currentClassIfy: 0,
      // 分类列表
      classIfyList: [
        {
          id: 0,
          name: '全部',
        },
        {
          id: 1,
          name: '精华',
        },
        {
          id: 2,
          name: '分享',
        },
        {
          id: 3,
          name: '问答',
        },
        {
          id: 4,
          name: '招聘',
        },
      ],
      // 帖子列表
      topicList: [],
      // 页码
      page: 1,
      // 条数
      limit: 40,
    }
  },
  methods: {
    // 获取数据
    async handleGetTopicList(params) {
      try {
        // Clear topic list
        this.topicList = []
        const res = await CNode.getTopicList(params)
        if (res.success) {
          const topicList = res.data
          this.topicList = this.handleTopicDataFilter(topicList)
        } else {
          combined.utools.toast('request api error')
        }
      } catch (e) {
        combined.utools.toast(e.message)
      } finally {
        // Stop pull down refresh
        uni.stopPullDownRefresh()
      }
    },
    // 话题分类切换
    handleClassIfyChange(classIfyId) {
      if (this.currentClassIfy === classIfyId) {
        return
      } else {
        // Reset topicList
        this.topicList = []
        // Change currentClassIfy
        this.currentClassIfy = classIfyId

        const params = {
          tab: this.handleGetTab(),
          limit: this.limit,
          page: 1,
        }
        // Reset page
        this.page = 1
        // Request
        this.handleGetTopicList(params)
      }
    },
    // 话题数据过滤
    handleTopicDataFilter(data) {
      if (data && data.length) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].tab) {
            // 过滤话题数据
            switch (data[i].tab) {
              case 'share':
                data[i].tab = '分享'
                break
              case 'ask':
                data[i].tab = '问答'
                break
              case 'job':
                data[i].tab = '招聘'
                break
              case 'good':
                data[i].tab = '精华'
                break
              default:
                break
            }
          }
          // 过滤最近回复时间
          data[i].last_reply_at = combined.utools.dayjs(data[i].last_reply_at).format('YYYY-MM-DD HH:mm:ss')
        }
        return data
      } else {
        combined.utools.toast('不是有效的数据')
      }
    },
    // 上下一页
    handlePageChange(action) {
      if (action === 'prev') {
        if (this.page === 1) {
          combined.utools.toast('这是第一页鸭')
        } else {
          const params = {
            page: --this.page,
            limit: this.limit,
            tab: this.handleGetTab(),
          }
          // Request
          this.handleGetTopicList(params)
        }
      } else if (action === 'next') {
        const params = {
          page: ++this.page,
          limit: this.limit,
          tab: this.handleGetTab(),
        }
        // Request
        this.handleGetTopicList(params)
      }
    },
    // 获取当前分类id对应的tab
    handleGetTab() {
      switch (this.currentClassIfy) {
        case 0:
          return ''
        case 1:
          return 'good'
        case 2:
          return 'share'
        case 3:
          return 'ask'
        case 4:
          return 'job'
        default:
          return ''
      }
    },
    navigator(url) {
      uni.navigateTo({
        url,
      })
    },
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.handleGetTopicList({
      page: this.page,
      limit: this.limit,
      tab: this.handleGetTab(),
    })
  },
  // 页面加载
  onLoad() {
    this.handleGetTopicList({
      limit: this.limit,
      page: this.page,
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/css/index.css';

page {
  background-color: #e1e1e1;
}

// 话题
.topic-wrap {
  width: 730rpx;
  margin: 0 10rpx 25rpx;
  border-radius: 6rpx;
  background-color: #fff;

  // 分类
  .topic-classify {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    width: 710rpx;
    padding: 10rpx;
    border-radius: 6rpx;
    background-color: #f6f6f6;

    .classify-item {
      width: 132rpx;
      transition: 0.15s;
      border-radius: 6rpx;
      color: #80bd01;
      font-size: 14px;
      text-align: center;
    }

    .selected {
      background-color: #80bd01;
      color: #fff;
    }
  }

  // 列表
  .topic-list {
    width: 730rpx;
    border-radius: 6rpx;
    background-color: #fff;

    // 话题项
    .topic {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      width: 730rpx;
      height: 100rpx;
      padding: 5rpx 0;
      border-bottom: #f0f0f0 solid 2rpx;

      .topic-author-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100rpx;
        height: 100rpx;

        .author-avatar-url {
          width: 60rpx;
          height: 60rpx;
        }
      }

      .topic-type {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64rpx;
        margin-right: 10rpx;
        padding: 0 4rpx;
        border-radius: 6rpx;
        background-color: #e5e5e5;
        color: #999;
        font-size: 12px;
      }

      .type-good {
        background-color: #80bd01;
        color: #fff;
      }

      .topic-info {
        width: 548rpx;

        .topic-title {
          width: 420rpx;
          overflow: hidden;
          color: #333;
          line-height: 40rpx;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .topic-other {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          width: 528rpx;
          line-height: 40rpx;

          .topic-view {
            color: #b4b4b4;
            font-size: 10px;

            .count-of-replies {
              color: #9e78c0;
            }
          }

          .topic-time {
            color: #778087;
            font-size: 12px;
          }
        }
      }
    }

    // 分页器
    .pagination {
      display: flex;
      width: 730rpx;

      .pagination-action {
        display: flex;
        justify-content: space-between;
        width: 215rpx;
        height: 60rpx;
        padding: 15rpx;

        .prev,
        .next {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100rpx;
          height: 60rpx;
          border-radius: 12rpx;
          background-color: #f6f6f6;
          color: #80bd01;
          font-size: 12px;
        }
      }

      .current-page {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
        width: 515rpx;
        color: #999;
        font-size: 14px;
      }
    }
  }
}
</style>
