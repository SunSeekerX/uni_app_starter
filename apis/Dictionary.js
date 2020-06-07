import { defauleRequest as request } from '@/utils/request/index'

export default{
  getSystemDict() {
    return request({
      url: '/system/dict/data/all',
      method: 'get'
    })
  },
}
