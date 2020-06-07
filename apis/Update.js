/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-05-18 23:33:27
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-19 16:21:12
 */

import { updateRequest as request } from '@/utils/request/index'

export default {
  update({ version, name }) {
    return request({
      url: '/update',
      method: 'get',
      params: {
        version,
        name,
      },
    })
  },
}
