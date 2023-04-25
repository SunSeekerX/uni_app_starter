import { bianceRequest } from '@/utils/request/index'

/**
 * 最新标记价格和资金费率
 * 采集各大交易所数据加权平均
 * 权重: 1
 */
export const premiumIndex = () => bianceRequest({ url: '/fapi/v1/premiumIndex', method: 'GET' })
