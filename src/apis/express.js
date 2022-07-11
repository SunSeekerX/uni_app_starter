/**
 * 测试请求对象
 * @author: SunSeekerX
 * @Date: 2021-09-17 17:40:07
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 19:47:28
 */

import { expressRequest } from '@/utils/request'

export default {
  get() {
    return expressRequest(
      {
        url: '/get',
        method: 'GET',
        header: {
          headerParam1: 'headerParam1',
        },
      },
      {
        a: 1,
        b: 2,
      },
      3
    )
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

  upload({ filePath, name, formData }) {
    return expressRequest({
      url: '/upload',
      method: 'UPLOAD',
      filePath,
      name,
      formData,
    })
  },
}
