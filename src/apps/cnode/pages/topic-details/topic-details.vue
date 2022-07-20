<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-05-26 13:48:57
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 20:13:47
-->

<template>
  <view>
    <!-- 头部 -->
    <ssx-header />

    <!-- 话题详情 -->
    <view class="topic-detail">
      <!-- 话题详情 -->
      <view v-if="topic.id">
        <!-- 话题头部 -->
        <view class="detail-header">
          <view class="topic-title">{{ topic.title }}</view>
          <view class="topic-header-info"
            >•发布于{{ topic.create_at }}•作者 {{ topic.author.loginname }}•{{ topic.visit_count }} 次浏览•来自
            {{ topic.tab }}</view
          >
        </view>
        <!-- 话题内容 -->
        <view class="detail-content"><uParse :content="topic.content" @navigate="navigate" /></view>
        <!-- 话题回复 -->
        <view class="detail-reply">
          <!-- 回复标题 -->
          <view class="reply-title">{{ topic.reply_count }}回复</view>
          <!-- 回复列表 -->
          <view class="reply-list">
            <block v-for="(reply, replyIndex) of topic.replies" :key="reply.id">
              <view class="reply">
                <view class="reply-header">
                  <view class="reply-author-avatar"> <image :src="reply.author.avatar_url" /> </view>
                  <view class="reply-info">
                    <text class="reply-author">{{ reply.author.loginname }}</text>
                    <text class="reply-time">{{ replyIndex + 1 }}楼•{{ reply.create_at }}</text>
                  </view>
                </view>
                <view class="reply-content"> <uParse :content="reply.content" @navigate="navigate" /> </view>
              </view>
            </block>
          </view>
        </view>
      </view>

      <!-- No data -->
      <ssx-no-data v-if="!topic.id" />
    </view>

    <!-- 返回按钮 -->
    <ssx-fix-button />
  </view>
</template>

<script>
import uParse from '../../components/feng-parse/parse'
import SsxHeader from '../../components/common/ssx-header'
import SsxNoData from '../../components/common/ssx-no-data'
import SsxFixButton from '../../components/common/ssx-fix-button'
import { CNode } from '../../apis/index'

export default {
  components: {
    uParse,
    SsxHeader,
    SsxNoData,
    SsxFixButton,
  },
  data() {
    return {
      // 加载层
      loading: false,
      // 话题ID
      topicId: '',
      topic: {
        id: '',
        author_id: '',
        tab: '',
        content: '',
        title: '',
        last_reply_at: '',
        good: false,
        top: false,
        reply_count: 0,
        visit_count: 0,
        create_at: '',
        author: {
          loginname: '',
          avatar_url: '',
        },
        replies: [],
        is_collect: false,
      },
    }
  },
  methods: {
    navigate(href) {
      if (this.$utools.ValidateUtil.isUrl(href)) {
        this.$utools.openUrl(href)
      }
    },
    // 获取话题详情
    async handleGetTopicDetail(id) {
      try {
        const res = await CNode.getTopicDetail({ id })
        if (res.success) {
          this.topic = this.handleTopicDetailFilter(res.data)
        } else {
          this.$utools.toast('request api error')
        }
      } catch (e) {
        console.warn(e)
        this.$utools.toast(e.message)
      } finally {
        // Stop pull down refresh
        uni.stopPullDownRefresh()
      }
    },
    // 话题详情数据过滤
    handleTopicDetailFilter(topic) {
      // 过滤话题数据
      switch (topic.tab) {
        case 'share':
          topic.tab = '分享'
          break
        case 'ask':
          topic.tab = '问答'
          break
        case 'job':
          topic.tab = '招聘'
          break
        case 'good':
          topic.tab = '精华'
          break
        default:
          break
      }
      topic.create_at = this.$utools.dayjs(topic.create_at).format('YYYY-MM-DD HH:mm:ss')
      // 设置标题
      uni.setNavigationBarTitle({
        title: topic.title,
      })
      return topic
    },
  },
  onLoad(options) {
    if (options.id) {
      this.topicId = options.id
      this.handleGetTopicDetail(this.topicId)
    }
  },
}
</script>

<style>
/* @import '../../components/gaoyia-parse/parse.css'; */
</style>

<style lang="scss" scoped>
@import '../../common/css/index.css';

page {
  background-color: #e1e1e1;
}

// 话题详情
.topic-detail {
  display: flex;
  flex-direction: column;
  margin: 0 15rpx 25rpx;
  padding: 20rpx;
  border-radius: 6rpx;
  background-color: #fff;

  // 话题头部
  .detail-header {
    border-bottom: #e5e5e5 solid 2rpx;

    .topic-title {
      color: #333;
      font-size: 22px;
      font-weight: 700;
    }

    .topic-header-info {
      color: #838383;
      font-size: 12px;
    }
  }

  // 话题回复
  .detail-reply {
    // 回复标题
    .reply-title {
      height: 40rpx;
      background-color: #f6f6f6;
      color: #333;
      font-size: 14px;
      line-height: 40rpx;
    }

    // 回复列表
    .reply-list {
      .reply {
        padding: 25rpx 0 0;
        border-bottom: #f0f0f0 solid 2rpx;

        .reply-header {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: flex-start;
          height: 88rpx;

          .reply-author-avatar {
            margin-right: 15rpx;

            image {
              width: 60rpx;
              height: 60rpx;
            }
          }

          .reply-info {
            .reply-author {
              margin-right: 15rpx;
              color: #666;
              font-size: 12px;
              font-weight: 700;
            }

            .reply-time {
              color: #08c;
              font-size: 11px;
            }
          }
        }
      }
    }
  }
}
</style>
