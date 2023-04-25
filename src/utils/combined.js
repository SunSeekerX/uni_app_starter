import * as api from '@/apis'
import * as util from '@/utils'
import * as constant from '@/constant'
import getEnv from '@/config'
import * as handleError from '@/utils/handle-error' // 错误处理
import utools from '@/uni_modules/limm-utools' // utools

const combined = {
  api,
  util,
  constant,
  getEnv,
  handleError,
  utools,
}

export default combined
