/**
 * 校验相关
 * @author: SunSeekerX
 * @Date: 2020-05-26 16:15:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-06 17:38:52
 */

/**
 * 校验手机号码
 * @param { string|number } val - 手机号码
 * @return { Boolean }
 */
export function isMobilePhone(val: string | number): boolean {
  return /^1[3456789]\d{9}$/.test(String(val))
}

/**
 * 校验身份证号码
 * @param { string } val - 身份证号码
 * @returns { boolean }
 */
export function isIDCard(val: string): boolean {
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  return /(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(val)
}

/**
 * 验证电子邮箱格式
 * @param { string } val - 邮箱号码
 * @returns { boolean }
 */
export function isEmail(val: string): boolean {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(val)
}

/**
 * 验证十进制数字
 * @param { string } val - 数字值
 */
// export function isNumber(val: string | number): boolean {
//   return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(String(val))
// }

/**
 * 验证 url 地址
 * @param { string } val - 需要验证的地址字符串
 * @returns { boolean }
 */
export function isUrl(val: string): boolean {
  return /^(?:(?:https?|ftp):\/\/)?(?:[\da-z.-]+)\.(?:[a-z.]{2,6})(?:\/\w\.-]*)*\/?/.test(String(val))
}
