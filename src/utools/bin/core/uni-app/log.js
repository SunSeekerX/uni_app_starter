/* eslint-disable no-console */
/**
 * 日志工具
 * @author: SunSeekerX
 * @Date: 2021-09-17 20:21:47
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 21:47:21
 */
export class Log {
    constructor(appName) {
        this.appName = 'log-util: >>> ';
        this.options = {
            debug: {
                color: '#fff',
                bgColor: '#2979ff',
                fontSize: 'inherit',
            },
            log: {
                color: '#fff',
                bgColor: '#19be6b',
                fontSize: 'inherit',
            },
            warn: {
                color: '#fff',
                bgColor: '#ff9900',
                fontSize: 'inherit',
            },
            error: {
                color: '#fff',
                bgColor: '#fa3534',
                fontSize: 'inherit',
            },
        };
        appName && (this.appName = appName);
    }
    debug(...args) {
        // #ifndef APP-PLUS
        const { debug } = this.options;
        console.log(`%c ${this.appName} `, `color: ${debug.color};background-color: ${debug.bgColor}; font-size:${debug.fontSize};`, ...args);
        // #endif
        // #ifdef APP-PLUS
        console.log(`${this.appName} `, ...args);
        // #endif
    }
    log(...args) {
        // #ifndef APP-PLUS
        const { log } = this.options;
        console.log(`%c ${this.appName} `, `color: ${log.color};background-color: ${log.bgColor}; font-size:${log.fontSize};`, ...args);
        // #endif
        // #ifdef APP-PLUS
        console.log(`${this.appName} `, ...args);
        // #endif
    }
    warn(...args) {
        // #ifndef APP-PLUS
        const { warn } = this.options;
        console.warn(`%c ${this.appName} `, `color: ${warn.color};background-color: ${warn.bgColor}; font-size:${warn.fontSize};`, ...args);
        // #endif
        // #ifdef APP-PLUS
        console.warn(`${this.appName} `, ...args);
        // #endif
    }
    error(...args) {
        // #ifndef APP-PLUS
        const { error } = this.options;
        console.error(`%c ${this.appName} `, `color: ${error.color};background-color: ${error.bgColor}; font-size:${error.fontSize};`, ...args);
        // #endif
        // #ifdef APP-PLUS
        console.error(`${this.appName} `, ...args);
        // #endif
    }
    setName(name) {
        this.appName = name;
    }
    /**
     * TODO 可以优化，这里 key 直接合并 ts 会检测到隐式为 any 类型，后期优化，先粗暴的判断一下
     * @param options
     */
    setOptions(options) {
        for (const item of Object.entries(options)) {
            switch (item[0]) {
                case 'debug':
                    Object.assign(this.options['debug'], item[1]);
                    break;
                case 'log':
                    Object.assign(this.options['log'], item[1]);
                    break;
                case 'warn':
                    Object.assign(this.options['warn'], item[1]);
                    break;
                case 'error':
                    Object.assign(this.options['error'], item[1]);
                    break;
                default:
                    break;
            }
        }
    }
}
export const LogUtil = new Log();
