/**
 * 测试请求对象
 * @author: SunSeekerX
 * @Date: 2021-09-17 17:40:07
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 18:00:31
 */

import { expressRequest } from '@/utils/request/index'

export default {
  get() {
    return expressRequest({
      url: '/get',
      method: 'GET',
    })
  },

  post() {
    return expressRequest({
      url: '/post',
      method: 'POST',
    })
  },

  put() {
    return expressRequest({
      url: '/put',
      method: 'PUT',
    })
  },

  delete() {
    return expressRequest({
      url: '/delete',
      method: 'DELETE',
    })
  },

  upload() {
    return expressRequest({
      url: '/upload',
      method: 'UPLOAD',
    })
  },
}
