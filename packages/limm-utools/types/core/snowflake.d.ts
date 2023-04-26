/**
 * 雪花 id 算法
 * @author: SunSeekerX
 * @Date: 2021-11-27 19:29:04
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-11-27 20:56:28
 */
/**
 * Twitter_Snowflake
 *
 * SnowFlake的结构如下(共64bits，每部分用-分开):
 *   0 - 0000000000 0000000000 0000000000 0000000000 0 - 00000 - 00000 - 000000000000
 *   |   ----------------------|----------------------   --|--   --|--   -----|------
 * 1bit不用                41bit 时间戳                  数据标识id 机器id     序列号id
 *
 * - 1位标识，二进制中最高位为1的都是负数，但是我们生成的id一般都使用整数，所以这个最高位固定是0
 * - 41位时间截(毫秒级)，注意，41位时间截不是存储当前时间的时间截，而是存储时间截的差值（当前时间截 - 开始时间截得到的值），这里的的开始时间截，一般是我们的id生成器开始使用的时间，由我们程序来指定的（如下下面程序IdWorker类的startTime属性）。41位的时间截，可以使用69年，年T = (1L << 41) / (1000L * 60 * 60 * 24 * 365) = 69
 * - 10位的数据机器位，可以部署在1024个节点，包括5位dataCenterId和5位workerId
 * - 12位序列，毫秒内的计数，12位的计数顺序号支持每个节点每毫秒(同一机器，同一时间截)产生4096个ID序号
 * - 加起来刚好64位，为一个Long型。
 * SnowFlake的优点是
 *   - 整体上按照时间自增排序
 *   - 并且整个分布式系统内不会产生ID碰撞(由数据中心ID和机器ID作区分)
 *   - 并且效率较高，经测试，SnowFlake每秒能够产生26万ID左右。
 */
export declare class SnowFlake {
  twepoch: bigint
  workerIdBits: bigint
  dataCenterIdBits: bigint
  sequenceBits: bigint
  maxWorkerId: bigint
  maxDataCenterId: bigint
  sequenceMask: bigint
  workerIdShift: bigint
  dataCenterIdShift: bigint
  timestampLeftShift: bigint
  sequence: bigint
  lastTimestamp: bigint
  workerId: bigint
  dataCenterId: bigint
  /**
   * 构造函数
   * 运行在内阁
   * @param {bigint} workerId 工作ID (0~31)
   * @param {bigint} dataCenterId 数据中心ID (0~31)
   * @param {bigint} sequence 毫秒内序列 (0~4095)
   */
  constructor(workerId: bigint, dataCenterId: bigint)
  /**
   * 获得下一个ID (该方法是线程安全的)
   *
   * @returns {bigint} SnowflakeId 返回 id
   */
  nextId(): bigint
  /**
   * 阻塞到下一个毫秒，直到获得新的时间戳
   * @param {bigint} lastTimestamp 上次生成ID的时间截
   * @return {bigint} 当前时间戳
   */
  tilNextMillis(lastTimestamp: bigint): bigint
  /**
   * 返回以毫秒为单位的当前时间
   * @return {bigint} 当前时间(毫秒)
   */
  timeGen(): bigint
}
