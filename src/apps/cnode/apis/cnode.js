/**
 * @name About topic apis
 * @author SunSeekerX
 * @time 2019-07-15 14:55:34
 */

import { cNodeRequest } from '../utils/request/index'

export default {
  // 获取主题列表
  getTopicList: (data) => {
    return cNodeRequest({
      url: '/topics',
      method: 'GET',
      data,
    })
  },

  // 获取主题详情
  getTopicDetail: (data) => {
    return cNodeRequest({
      url: `/topic/${data.id}`,
      method: 'GET',
    })
  },
}
