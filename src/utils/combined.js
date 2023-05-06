import * as api from '@/apis'
import * as util from '@/utils'
import * as constant from '@/constant'
import getEnv from '@/config'
import * as handleError from '@/utils/handle-error'
import utools from '@/uni_modules/limm-utools'

const combined = {
  api,
  util,
  constant,
  getEnv,
  handleError,
  utools,
}

export default combined
