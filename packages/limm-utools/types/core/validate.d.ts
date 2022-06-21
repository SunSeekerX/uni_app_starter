/**
 * 校验相关
 * @author: SunSeekerX
 * @Date: 2020-05-26 16:15:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 20:16:28
 */
/**
 * 校验手机号码
 * @param { string|number } val - 手机号码
 * @return { Boolean }
 */
export declare function isMobilePhone(val: string | number): boolean;
/**
 * 校验身份证号码
 * @param { string } val - 身份证号码
 * @returns { boolean }
 */
export declare function isIDCard(val: string): boolean;
/**
 * 验证电子邮箱格式
 * @param { string } val - 邮箱号码
 * @returns { boolean }
 */
export declare function isEmail(val: string): boolean;
/**
 * 验证十进制数字
 * @param { string } val - 数字值
 */
export declare function isNumber(val: string | number): boolean;
/**
 * 验证 url 地址
 * @param { string } val - 需要验证的地址字符串
 * @returns { boolean }
 */
export declare function isUrl(val: string): boolean;
