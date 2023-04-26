/**
 * 随机模块
 * @author: SunSeekerX
 * @Date: 2021-06-02 17:52:15
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 17:17:21
 */
import type { V1Options } from 'uuid'
export declare function uuidv1(options: V1Options | undefined): string
/**
 * 获取雪花id
 */
export declare function genSnowFlakeId(): string
