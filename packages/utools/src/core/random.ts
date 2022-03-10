/**
 * 随机模块
 * @author: SunSeekerX
 * @Date: 2021-06-02 17:52:15
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 17:17:21
 */

import { v1 } from 'uuid'
import type { V1Options } from 'uuid'

export function uuidv1(options: V1Options | undefined): string {
  return v1(options)
}
