/**
 * 随机模块
 */

import { v1 } from 'uuid'
import type { V1Options } from 'uuid'
import { SnowFlake } from './snowflake'

const idWorker = new SnowFlake(1n, 1n)

export function uuidv1(options: V1Options | undefined): string {
  return v1(options)
}

/**
 * 获取雪花id
 */
export function genSnowFlakeId(): string {
  return idWorker.nextId().toString()
}
