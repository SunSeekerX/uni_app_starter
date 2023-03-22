/**
 * Utools 小程序版本入口
 * @author: SunSeekerX
 * @Date: 2021-06-03 00:00:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 13:22:15
 */
/// <reference types="@dcloudio/types" />
import dayjs from 'dayjs';
import * as uuid from 'uuid';
import * as CommonUtil from './core/common';
import * as UniAppUtil from './core/uni-app';
import * as ValidateUtil from './core/validate';
import * as EncodeUtil from './core/encode';
import * as PerformanceUtil from './core/performance';
import * as RandomUtil from './core/random';
import { encryptMD5, encryptMD5ToString, getRSAEnCryptor, encryptRSA2Base64, encryptRSA2Base64Plain, decryptRSABase64, decryptRSABase64Plain } from './core/encrypt';
declare const EncryptUtil: {
    encryptMD5: typeof encryptMD5;
    encryptMD5ToString: typeof encryptMD5ToString;
    getRSAEnCryptor: typeof getRSAEnCryptor;
    encryptRSA2Base64: typeof encryptRSA2Base64;
    encryptRSA2Base64Plain: typeof encryptRSA2Base64Plain;
    decryptRSABase64: typeof decryptRSABase64;
    decryptRSABase64Plain: typeof decryptRSABase64Plain;
};
export * from './core/uni-app';
export { dayjs, uuid, CommonUtil, ValidateUtil, EncodeUtil, EncryptUtil, PerformanceUtil, RandomUtil };
declare const _default: {
    CommonUtil: typeof CommonUtil;
    UniAppUtil: typeof UniAppUtil;
    dayjs: typeof dayjs;
    uuid: typeof uuid;
    ValidateUtil: typeof ValidateUtil;
    EncodeUtil: typeof EncodeUtil;
    EncryptUtil: {
        encryptMD5: typeof encryptMD5;
        encryptMD5ToString: typeof encryptMD5ToString;
        getRSAEnCryptor: typeof getRSAEnCryptor;
        encryptRSA2Base64: typeof encryptRSA2Base64;
        encryptRSA2Base64Plain: typeof encryptRSA2Base64Plain;
        decryptRSABase64: typeof decryptRSABase64;
        decryptRSABase64Plain: typeof decryptRSABase64Plain;
    };
    PerformanceUtil: typeof PerformanceUtil;
    RandomUtil: typeof RandomUtil;
    getUIStyle(): string;
    toast(msg: string, options?: UniApp.ShowToastOptions): void;
    route(options: import("./core/uni-app/interface").UniRouteOptions): void;
    copy(value: string | number, options: import("./core/uni-app/interface").UniCopyOptions): void;
    setClipboardData(options?: UniApp.SetClipboardDataOptions): Promise<any>;
    openUrl(url: string, options?: import("./core/uni-app/interface").UniOpenUrlOptions): void;
    Request: typeof UniAppUtil.Request;
    Log: typeof UniAppUtil.Log;
    LogUtil: UniAppUtil.Log;
};
export default _default;
