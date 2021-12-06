function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 英语(美国)
 * @author: SunSeekerX
 * @Date: 2021-05-05 22:13:18
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-08-10 21:50:21
 */
var en_US = {
  is_request_updating: 'Checking for updates...',
  is_silent_updating: 'Silent update in progress...',
  is_update_success: 'The update has been completed, and the APP needs to be restarted to take effect',
  is_updating: 'Updating...',
  notice_update_closed: 'Update closed',
  notice_no_update_url: 'No update url',
  notice_no_project_id: 'No project id',
  notice_unknown_error: 'Unknown error',
  notice_install_fail: 'Install fail',
  notice_native_update_required: 'Native update required',
  notice_wgt_update_required: 'Wgt update required',
  notice_no_update: 'No update',
  notice_api_fail: 'Api request fail',
  notice_api_error: 'Api request error',
  notice_no_download_url: 'No download url',
  notice_is_updating: 'Updating...',
  notice_on_new_version: 'New version ',
  notice_no_update_now: 'Cancel',
  notice_update_now: 'Update',
  notice_updating: 'Updating...',
  notice_update_app: 'Upgrade',
  notice_update_cancel: 'Cancel',
  notice_update_background: 'Background',
  notice_update_close: 'Close',
  console_get_uuid_fail: 'Get uuid fail',
  console_api_response: 'Api response',
  console_unknown_error: 'UnKnown error',
  console_update_type_not_support: 'Update type not support',
  console_is_install: 'Installing...',
  console_install_success: 'Install success!',
  console_download_fail: 'Download fail!',
  console_prepare_download: 'Prepare...',
  console_downloading: 'Downloading...',
  console_has_downloaded: '',
  console_download_cancel: 'Canceled',
  console_start_request_update: 'Start request update...',
  console_silent_update_success: 'Silent update success',
  console_download_task_request: 'Request download url',
  console_download_task_connected: 'Download url connected',
  console_download_task_success: 'Download success',
  console_config_update_success: 'Config update success',
  console_invalid_console_type: 'Invalid console type',
  console_init_config: 'Init config',
  console_get_info_start: 'Starting get system info'
};
/**
 * 简体中文(中国)
 * @author: SunSeekerX
 * @Date: 2021-05-05 22:13:07
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-08-10 21:50:16
 */

var zh_CN = {
  is_request_updating: '正在检查更新中...',
  is_silent_updating: '正在静默更新中...',
  is_update_success: '已经更新完成，需要重启App生效',
  is_updating: '正在更新中...',
  notice_update_closed: '更新被关闭',
  notice_no_update_url: '无检查更新地址',
  notice_no_project_id: '无项目ID或项目ID不正确',
  notice_unknown_error: '未知错误',
  notice_install_fail: '安装文件失败',
  notice_native_update_required: '需要更新原生版本',
  notice_wgt_update_required: '需要更新wgt版本',
  notice_no_update: '暂无更新',
  notice_api_fail: 'Api 请求失败',
  notice_api_error: 'Api 请求错误',
  notice_no_download_url: '无下载地址',
  notice_is_updating: '正在为您更新，请耐心等待',
  notice_on_new_version: '发现新版本',
  notice_no_update_now: '暂不升级',
  notice_update_now: '立即升级',
  notice_updating: '正在为您更新，请耐心等待',
  notice_update_app: '升级APP',
  notice_update_cancel: '取消下载',
  notice_update_background: '后台下载',
  notice_update_close: '关闭',
  console_get_uuid_fail: '获取设备uuid失败',
  console_api_response: '接口响应',
  console_unknown_error: '发生未知错误',
  console_update_type_not_support: '不支持的更新方法',
  console_is_install: '正在安装文件...',
  console_install_success: '应用资源更新完成!',
  console_download_fail: '文件下载失败!',
  console_prepare_download: '准备下载...',
  console_downloading: '开始下载...',
  console_has_downloaded: '已下载',
  console_download_cancel: '用户手动取消下载',
  console_start_request_update: '开始检查更新...',
  console_silent_update_success: '静默更新完成',
  console_download_task_request: '下载任务开始请求',
  console_download_task_connected: '下载任务网络连接已建立，服务器返回响应，准备传输数据内容',
  console_download_task_success: '下载任务已完成',
  console_config_update_success: '配置更新成功',
  console_invalid_console_type: '无效的控制台提示类型',
  console_init_config: '初始化信息',
  console_get_info_start: '开始获取获取系统信息'
};
/**
 * 国际化
 * @author: SunSeekerX
 * @Date: 2021-05-05 22:13:25
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-08-10 21:50:27
 */

var langs = {
  en_US: en_US,
  zh_CN: zh_CN
};

function $t(locale, key) {
  return langs[locale][key];
}
/**
 * Pushy
 * @author: SunSeekerX
 * @Date: 2021-08-06 14:44:35
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-08-10 23:05:13
 */


var Pushy = /*#__PURE__*/function () {
  function Pushy() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Pushy);

    /**
     * @name 发布订阅
     */
    // 事件缓存列表
    this.list = {}; // 当前应用的APPID

    this.appid = ''; // 原生版本名:string

    this.nativeVersion = ''; //  原生版本号:number

    this.nativeVersionCode = 0; // wgt 资源版本

    this.wgtVersion = ''; // wgt 资源版本号

    this.wgtVersionCode = 0; // 是否初始化完成

    this._isInitFinish = false; // 系统信息

    this.systemInfo = {}; // state

    this.state = {
      // 是否正在检查更新
      isGettingUpdate: false,
      // 是否正在更新
      isUpdating: false,
      // 是否正在静默更新
      isSilentUpdating: false,
      // 是否已经静默更新
      isSilentUpdated: false
    };
    this._config = {
      /**
       * 项目id
       */
      projectId: '',

      /**
       * 是否打开检查更新
       */
      // update: true,

      /**
       * 检查更新地址
       */
      updateUrl: '',

      /**
       * 弹窗图标url "/" 相当于项目根目录（cli 创建的项目为 src）
       */
      logo: '',

      /**
       * 是否打开调试
       */
      isDebug: false,

      /**
       * log 是否转换成 string, 解决某些使用情况下无法打印对象形式的 log
       */
      logString: true,

      /**
       * 是否强制安装更新包
       */
      forceUpdate: false,

      /**
       * 主题色
       */
      mainColor: '#FF5B78',

      /**
       * 是否使用自定义界面
       */
      custom: false,

      /**
       * 国际化标识
       */
      locale: 'zh_CN'
    }; // 生效的配置

    this._workSetting = {}; // 合并用户设置

    this._setConfig(options);
    /**
     * @name 自定义更新相关
     */
    // 资源信息


    this._cSourceInfo = {};
    this._cDownLoadTask = null;
    /**
     * 弹窗对象
     */
    // 更新

    this.updateMaskLayer = undefined;
    this.updatePopupView = undefined; // 下载

    this.downloadMaskLayer = undefined;
    this.downloadPopupView = undefined;
  }
  /**
   * @name 发布订阅
   */
  // 订阅


  _createClass(Pushy, [{
    key: "on",
    value: function on(event, fn) {
      (this.list[event] || (this.list[event] = [])).push(fn);
      return this;
    } // 监听一次

  }, {
    key: "once",
    value: function once(event, fn) {
      // 先绑定，调用后删除
      var _this = this;

      function on() {
        _this.off(event, on);

        fn.apply(_this, arguments);
      }

      on.fn = fn;

      _this.on(event, on);

      return _this;
    } // 取消订阅

  }, {
    key: "off",
    value: function off(event, fn) {
      var _this = this;

      var fns = _this.list[event]; // 如果缓存列表中没有相应的 fn，返回false

      if (!fns) return false;

      if (!fn) {
        // 如果没有传 fn 的话，就会将 event 值对应缓存列表中的 fn 都清空
        fns && (fns.length = 0);
      } else {
        // 若有 fn，遍历缓存列表，看看传入的 fn 与哪个函数相同，如果相同就直接从缓存列表中删掉即可
        var cb;

        for (var i = 0, cbLen = fns.length; i < cbLen; i++) {
          cb = fns[i];

          if (cb === fn || cb.fn === fn) {
            fns.splice(i, 1);
            break;
          }
        }
      }

      return _this;
    } // 发布

  }, {
    key: "_emit",
    value: function _emit() {
      var _arguments = arguments;

      var _this = this; // 第一个参数是对应的 event 值，直接用数组的 shift 方法取出


      var event = [].shift.call(arguments); // 如果缓存列表里没有 fn 就返回 false

      if (!_this.list[event]) {
        return false;
      } // const fns = [..._this.list[event]]
      // // 如果缓存列表里没有 fn 就返回 false
      // if (!fns || fns.length === 0) {
      //   return false
      // }
      // 遍历 event 值对应的缓存列表，依次执行 fn


      _this.list[event].forEach(function (fn) {
        fn.apply(_this, _arguments);
      });

      return _this;
    }
    /**
     * 初始化设置方法，该方法内无法发布事件
     * @param { Object } options
     * @return { Void }
     */

  }, {
    key: "_setConfig",
    value: function _setConfig(options) {
      // 公开可重写的设置key
      var _publicSettings = Object.keys(this._config); // 合并传入的设置对象，如果传入了非公开设置的key会被丢弃


      var _workSetting = {};

      for (var _i = 0, _Object$keys = Object.keys(options); _i < _Object$keys.length; _i++) {
        var item = _Object$keys[_i];

        if (_publicSettings.includes(item)) {
          _workSetting[item] = options[item];
        }
      } // 合并设置对象


      Object.assign(this._config, _workSetting); // 给出生效设置对象

      Object.assign(this._workSetting, _workSetting);
    }
    /**
     * 初始化请求参数
     * @return { Promise<Boolean> }
     */

  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      return new Promise(function (resolve) {
        // 获取原生版本参数
        var _plus$runtime = plus.runtime,
            appid = _plus$runtime.appid,
            version = _plus$runtime.version,
            versionCode = _plus$runtime.versionCode; // appid

        _this2.appid = appid; // 原生版本

        _this2.nativeVersion = version; // 原生版本号

        _this2.nativeVersionCode = Number(versionCode); // 系统信息

        _this2.systemInfo = uni.getSystemInfoSync(); // 读取 wgt 版本号

        plus.runtime.getProperty(appid, function (res) {
          var version = res.version,
              versionCode = res.versionCode;
          _this2.wgtVersion = version;
          _this2.wgtVersionCode = Number(versionCode); // 获取设备 uuid, 有可能失败,但不影响正常流程

          plus.device.getInfo({
            success: function success(deviceInfo) {
              _this2.systemInfo.uuid = deviceInfo.uuid;

              _this2._closeableConsole({
                type: 'log',
                title: '_init',
                message: '获取 uuid 成功'
              });
            },
            fail: function fail(e) {
              _this2._console({
                type: 'error',
                title: '获取设备uuid失败',
                message: e.message
              });

              _this2._closeableConsole({
                type: 'log',
                title: '_init',
                message: '获取 uuid 失败' + e.message
              });
            }
          });

          _this2._closeableConsole({
            type: 'log',
            title: '_init',
            message: '初始化获取系统信息完成'
          }); // 初始化成功


          _this2._isInitFinish = true; // 发布 onInitSuccess 事件

          _this2._emit('onInitSuccess'); // 成功返回


          resolve(true);
        });
      });
    }
    /**
     * 更新配置
     */

  }, {
    key: "updateConfig",
    value: function updateConfig(options) {
      this._setConfig(options);

      this._closeableConsole({
        type: 'log',
        title: this._$t('console_config_update_success')
      });
    }
    /**
     * 获取系统信息
     */

  }, {
    key: "getInfo",
    value: function () {
      var _getInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 开始获取获取系统信息
                this._closeableConsole({
                  type: 'log',
                  title: 'getInfo',
                  message: this._$t('console_get_info_start')
                }); // 判断是否初始化


                if (this._isInitFinish) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return this._init();

              case 4:
                info = {
                  // 当前应用的APPID
                  appid: this.appid,
                  // 原生版本名:string
                  nativeVersion: this.nativeVersion,
                  //  原生版本号:number
                  nativeVersionCode: this.nativeVersionCode,
                  // wgt 资源版本
                  wgtVersion: this.wgtVersion,
                  // wgt 资源版本号
                  wgtVersionCode: this.wgtVersionCode,
                  // 系统信息
                  systemInfo: this.systemInfo,
                  // 个人配置
                  _config: this._config,
                  // 生效的配置
                  _workSetting: this._workSetting
                };

                this._closeableConsole({
                  type: 'log',
                  title: 'getInfo',
                  message: info
                });

                return _context.abrupt("return", Promise.resolve(info));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInfo() {
        return _getInfo.apply(this, arguments);
      }

      return getInfo;
    }()
    /**
     * @name 检查更新，只会 resolve， 不会 reject
     * @return { Promise<object> } 包装的结果对象，
     * `statusCode` <Number> 状态码，执行该方法之后的结果主要根据状态码进行判断
     * 251：需要更新原生版本 data、response、message
     * 252：需要更新wgt版本 data、response、message
     * 253：暂无更新 response、message
     * 254：请求成功，但接口响应返回失败 response、message
     * 452：用户未配置更新地址 message
     * 453：无项目ID或项目ID不正确 message
     * 473：正在检查更新 message
     * 474：正在静默更新 message
     * 475：已经静默更新完成，需要重启App生效 message
     * 476：正在更新中... message
     * 500：请求失败 message、error
     * 505：未知错误
     * `message` 	<String> 信息描述
     * `data` 		<Object> native 或者 wgt 包信息
     * `response` <Object> 原生响应对象
     * `error` 		<Error> 原生错误对象
     * @desc 25x 接口状态 45x 用户配置 47x pushy状态 500 错误
     * @return { Promise<object> } 包装的响应对象
     */

  }, {
    key: "getUpdate",
    value: function () {
      var _getUpdate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(manual) {
        var custom, _this$_config, updateUrl, projectId, res;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                custom = this._config.custom; // 判断是否初始化

                if (this._isInitFinish) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return this._init();

              case 4:
                if (!this.state.isGettingUpdate) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", Promise.resolve({
                  statusCode: 473,
                  message: this._$t('console_config_update_success')
                }));

              case 8:
                if (!this.state.isSilentUpdating) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return", Promise.resolve({
                  statusCode: 474,
                  message: this._$t('is_silent_updating')
                }));

              case 12:
                if (!this.state.isSilentUpdated) {
                  _context2.next = 16;
                  break;
                }

                return _context2.abrupt("return", Promise.resolve({
                  statusCode: 475,
                  message: this._$t('is_update_success')
                }));

              case 16:
                if (!this.state.isUpdating) {
                  _context2.next = 18;
                  break;
                }

                return _context2.abrupt("return", Promise.resolve({
                  statusCode: 476,
                  message: this._$t('is_updating')
                }));

              case 18:
                _this$_config = this._config, updateUrl = _this$_config.updateUrl, projectId = _this$_config.projectId;

                if (updateUrl) {
                  _context2.next = 23;
                  break;
                }

                return _context2.abrupt("return", Promise.resolve({
                  statusCode: 452,
                  message: this._$t('notice_no_update_url')
                }));

              case 23:
                if (projectId) {
                  _context2.next = 25;
                  break;
                }

                return _context2.abrupt("return", Promise.resolve({
                  statusCode: 453,
                  message: this._$t('notice_no_project_id')
                }));

              case 25:
                // 打开正在检查更新
                this.state.isGettingUpdate = true; // 发布 onStartGetUpdate - 开始检查更新

                this._emit('onStartGetUpdate'); // 网络请求


                _context2.next = 29;
                return this._onRequestUpdate();

              case 29:
                res = _context2.sent;

                // 日志提示
                this._closeableConsole({
                  type: 'log',
                  title: this._$t('console_api_response'),
                  message: res.response
                }); // 根据 statusCode 处理结果


                _context2.t0 = res.statusCode;
                _context2.next = _context2.t0 === 251 ? 34 : _context2.t0 === 252 ? 37 : _context2.t0 === 253 ? 40 : _context2.t0 === 254 ? 42 : _context2.t0 === 500 ? 44 : 46;
                break;

              case 34:
                // 251：需要更新原生版本
                // 发布需要更新原生版本事件
                this._emit('onNativeUpdateRequired', res);

                if (custom) {
                  this._cSourceInfo = res.data;
                } else {
                  this._startUpdate(res.data, manual);
                }

                return _context2.abrupt("break", 50);

              case 37:
                // 252：需要更新wgt版本
                // 发布需要更新wgt版本事件
                this._emit('onWgtUpdateRequired', res);

                if (custom) {
                  this._cSourceInfo = res.data;
                } else {
                  this._startUpdate(res.data, manual);
                }

                return _context2.abrupt("break", 50);

              case 40:
                // 253：暂无更新
                // 发布 onNoUpdate - 暂无更新
                this._emit('onNoUpdate', res);

                return _context2.abrupt("break", 50);

              case 42:
                // 254：请求成功，但返回失败
                // 发布后台失败事件
                this._emit('onUpdateRequestFalse', res);

                return _context2.abrupt("break", 50);

              case 44:
                // 500：请求失败，查看返回对象 message 获取错误详情描述 error：原生错误对象
                // 发布更新请求失败事件
                this._emit('onUpdateRequestFail', res);

                return _context2.abrupt("break", 50);

              case 46:
                this._console({
                  type: 'error',
                  title: this._$t('console_unknown_error'),
                  message: res
                }); // 发布更新请求未知事件


                this._emit('onUpdateRequestFailUnknown', res); // 关闭正在检查更新


                this.state.isGettingUpdate = false;
                return _context2.abrupt("return", Promise.resolve({
                  statusCode: 505,
                  message: this._$t('console_unknown_error')
                }));

              case 50:
                // 关闭正在检查更新
                this.state.isGettingUpdate = false; // 回调结果

                return _context2.abrupt("return", Promise.resolve(res));

              case 52:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUpdate(_x) {
        return _getUpdate.apply(this, arguments);
      }

      return getUpdate;
    }()
    /**
     * 启动更新，支持wgt更新，原生更新，静默更新
     */

  }, {
    key: "_startUpdate",
    value: function () {
      var _startUpdate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(res, manual) {
        var _this3 = this;

        var platform, url, updateType;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                platform = this.systemInfo.platform; // updateType 更新类型（1：用户同意更新，2：强制更新，3：静默更新）

                url = res.url, updateType = res.updateType;

                if (!manual) {
                  _context3.next = 6;
                  break;
                }

                // 用户同意更新
                this._updatePopup(res, function () {
                  if (/\.wgt$/i.test(url) || platform === 'android') {
                    // 打开正在更新
                    _this3.state.isUpdating = true;

                    _this3._startDownloadAndUpdate(res);
                  } else {
                    // 关闭正在更新
                    _this3.state.isUpdating = false;
                    plus.runtime.openURL(url);
                  }
                });

                _context3.next = 17;
                break;

              case 6:
                _context3.t0 = updateType;
                _context3.next = _context3.t0 === 1 ? 9 : _context3.t0 === 2 ? 11 : _context3.t0 === 3 ? 13 : 15;
                break;

              case 9:
                // 用户同意更新
                this._updatePopup(res, function () {
                  if (/\.wgt$/i.test(url) || platform === 'android') {
                    // 打开正在更新
                    _this3.state.isUpdating = true;

                    _this3._startDownloadAndUpdate(res);
                  } else {
                    // 关闭正在更新
                    _this3.state.isUpdating = false;
                    plus.runtime.openURL(url);
                  }
                });

                return _context3.abrupt("break", 17);

              case 11:
                // 强制更新
                if (/\.wgt$/i.test(url) || platform === 'android') {
                  // 打开正在更新
                  this.state.isUpdating = true;

                  this._startDownloadAndUpdate(res);
                } else {
                  // 关闭正在更新
                  this.state.isUpdating = false;
                  plus.runtime.openURL(url);
                }

                return _context3.abrupt("break", 17);

              case 13:
                // 静默更新，只支持 wgt 静默更新
                if (/\.wgt$/i.test(url) || platform === 'android') {
                  // 打开正在更新
                  this.state.isSilentUpdating = true;

                  this._handleUpdateSilent(res);
                }

                return _context3.abrupt("break", 17);

              case 15:
                this._console({
                  type: 'error',
                  title: this._$t('console_update_type_not_support'),
                  message: res
                });

                return _context3.abrupt("break", 17);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _startUpdate(_x2, _x3) {
        return _startUpdate2.apply(this, arguments);
      }

      return _startUpdate;
    }()
    /**
     * @下载文件，并更新
     */

  }, {
    key: "_startDownloadAndUpdate",
    value: function _startDownloadAndUpdate(res) {
      var _this4 = this;

      var forceUpdate = this._config.forceUpdate;
      var url = res.url;
      var popupData = {
        progress: true,
        buttonNum: 2
      };
      var lastProgressValue = 0;

      var popupObj = this._downloadPopup(popupData);

      var downloadTask = plus.downloader.createDownload(url, {
        filename: '_doc/update/',
        // 数值类型，单位为s(秒)，默认值为120s。 超时时间为服务器响应请求的时间（不是下载任务完成的总时间），如果设置为0则表示永远不超时。
        timeout: 60,
        // 数值类型，默认为重试3次。
        retry: 3,
        // 下载任务重试间隔时间 数值类型，单位为s(秒)，默认值为30s。
        retryInterval: 5
      }, function (download, status) {
        if (status === 200) {
          _this4._closeableConsole({
            type: 'log',
            title: _this4._$t('console_is_install')
          });

          popupObj.change({
            progressValue: 100,
            progressTip: _this4._$t('console_is_install'),
            progress: true,
            buttonNum: 0
          });
          plus.runtime.install(download.filename, {
            // 是否强制安装
            force: forceUpdate
          }, function () {
            // 关闭正在更新
            _this4.state.isUpdating = false;
            _this4.state.isSilentUpdated = true;

            _this4._closeableConsole({
              type: 'log',
              title: _this4._$t('console_install_success')
            });

            popupObj.change({
              contentText: _this4._$t('console_install_success'),
              buttonNum: 1,
              progress: false
            });
            popupObj.show();
          }, function (e) {
            // 关闭正在更新
            _this4.state.isUpdating = false;
            popupObj.cancel(); // plus.nativeUI.alert('安装文件失败[' + e.code + ']：' + e.message)

            plus.nativeUI.alert("".concat(_this4._$t('notice_install_fail'), "[").concat(e.code, "]\uFF1A").concat(e.message));
          });
        } else {
          popupObj.change({
            contentText: _this4._$t('console_download_fail'),
            buttonNum: 1,
            progress: false
          });

          _this4._closeableConsole({
            type: 'warn',
            title: _this4._$t('console_download_fail')
          }); // 关闭正在更新


          _this4.state.isUpdating = false;
        }
      });
      downloadTask.start();
      downloadTask.addEventListener('statechanged', function (task, status) {
        switch (task.state) {
          case 1:
            // 开始
            _this4._closeableConsole({
              type: 'log',
              title: _this4._$t('console_prepare_download')
            });

            popupObj.change({
              progressValue: 0,
              progressTip: _this4._$t('console_prepare_download'),
              progress: true
            });
            break;

          case 2:
            // 已连接到服务器
            _this4._closeableConsole({
              type: 'log',
              title: _this4._$t('console_downloading')
            });

            popupObj.change({
              progressValue: 0,
              progressTip: _this4._$t('console_downloading'),
              progress: true
            });
            break;

          case 3:
            // eslint-disable-next-line no-case-declarations
            var progress = parseInt(task.downloadedSize / task.totalSize * 100);

            if (progress - lastProgressValue >= 2) {
              lastProgressValue = progress;

              _this4._closeableConsole({
                type: 'log',
                title: "".concat(_this4._$t('console_has_downloaded')).concat(progress, "%")
              });

              popupObj.change({
                progressValue: progress,
                progressTip: "".concat(_this4._$t('console_has_downloaded')).concat(progress, "%"),
                progress: true
              });
            }

            break;
        }
      }); // 取消下载

      popupObj.cancelDownload = function () {
        // 关闭正在更新
        _this4.state.isUpdating = false;
        downloadTask && downloadTask.abort();

        _this4._closeableConsole({
          type: 'log',
          title: _this4._$t('console_download_cancel')
        });
      };
    }
    /**
     * 请求服务器版本号，只做网络请求，返回数据，不做任何逻辑处理,已经封装 Promise 不会触发 reject
     *
     * statusCode：
     * 251：需要更新原生版本
     *    message：string 详情描述
     *    response 原生响应对象
     *    data native包
     * 252：需要更新wgt版本
     *    message：string 详情描述
     *    response 原生响应对象
     *    data wgt包
     * 253：暂无更新
     *    message：string 详情描述
     *    response 原生响应对象
     * 254：请求成功，但返回失败
     *    message：string 详情描述
     *    response 原生响应对象
     * 500：请求失败
     *    message：string 详情描述
     *    error：原生错误对象
     * @return { Promise<object> } 包装的响应对象
     */

  }, {
    key: "_onRequestUpdate",
    value: function () {
      var _onRequestUpdate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this5 = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve) {
                  var platform = _this5.systemInfo.platform;
                  var _this5$_config = _this5._config,
                      updateUrl = _this5$_config.updateUrl,
                      projectId = _this5$_config.projectId;
                  var wgtVersion = _this5.wgtVersion,
                      wgtVersionCode = _this5.wgtVersionCode,
                      nativeVersion = _this5.nativeVersion,
                      nativeVersionCode = _this5.nativeVersionCode,
                      systemInfo = _this5.systemInfo;

                  _this5._closeableConsole({
                    type: 'log',
                    title: _this5._$t('console_start_request_update')
                  });

                  uni.request({
                    url: "".concat(updateUrl, "/api/update"),
                    method: 'POST',
                    data: {
                      projectId: projectId,
                      wgtVersion: wgtVersion,
                      wgtVersionCode: wgtVersionCode,
                      nativeVersion: nativeVersion,
                      nativeVersionCode: nativeVersionCode,
                      platform: platform,
                      systemInfo: systemInfo
                    },
                    success: function success(res) {
                      var data = res.data;

                      if (data.success) {
                        var _data$data = data.data,
                            wgt = _data$data.wgt,
                            _native = _data$data.native;

                        if (_native && _native.versionCode > nativeVersionCode) {
                          resolve({
                            statusCode: 251,
                            data: _native,
                            // 需要更新原生版本
                            message: _this5._$t('notice_native_update_required'),
                            response: data
                          });
                        } else if (wgt && wgt.nativeVersionCode === nativeVersionCode && wgt.versionCode > wgtVersionCode) {
                          resolve({
                            statusCode: 252,
                            data: wgt,
                            // 需要更新wgt版本
                            message: _this5._$t('notice_wgt_update_required'),
                            response: data
                          });
                        } else {
                          resolve({
                            statusCode: 253,
                            // 暂无更新
                            message: _this5._$t('notice_no_update'),
                            response: data
                          });
                        }
                      } else {
                        resolve({
                          statusCode: 254,
                          // message: data.message,
                          // Api 请求失败
                          message: _this5._$t('notice_api_fail'),
                          response: data
                        });
                      }
                    },
                    fail: function fail(e) {
                      resolve({
                        statusCode: 500,
                        // Api 请求错误
                        message: _this5._$t('notice_api_error'),
                        error: e
                      });
                    }
                  });
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function _onRequestUpdate() {
        return _onRequestUpdate2.apply(this, arguments);
      }

      return _onRequestUpdate;
    }()
    /**
     * @name 静默更新
     */

  }, {
    key: "_handleUpdateSilent",
    value: function () {
      var _handleUpdateSilent2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(res) {
        var _this6 = this;

        var url, forceUpdate, downloadTask;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = res.url;
                forceUpdate = this._config.forceUpdate; // 创建下载对象

                downloadTask = plus.downloader.createDownload(url, {
                  // 保存文件路径仅支持以"_downloads/"、"_doc/"、"_documents/"开头的字符串。 文件路径以文件后缀名结尾（如"_doc/download/a.doc"）表明指定保存文件目录及名称，以“/”结尾则认为指定保存文件的目录（此时程序自动生成文件名）。 如果指定的文件已经存在，则自动在文件名后面加"(i)"，其中i为数字，如果文件名称后面已经是此格式，则数字i递增，如"download(1).doc"。 默认保存目录为（"_downloads"），并自动生成文件名称。
                  filename: '_doc/update/',
                  // 数值类型，单位为s(秒)，默认值为120s。 超时时间为服务器响应请求的时间（不是下载任务完成的总时间），如果设置为0则表示永远不超时。
                  timeout: 60,
                  // 数值类型，默认为重试3次。
                  retry: 3,
                  // 下载任务重试间隔时间 数值类型，单位为s(秒)，默认值为30s。
                  retryInterval: 5
                }, // 当下载任务下载完成时触发，成功或失败都会触发。
                function (download, status) {
                  if (status === 200) {
                    plus.runtime.install(download.filename, {
                      // 是否强制安装
                      force: forceUpdate
                    }, function () {
                      _this6.state.isSilentUpdating = false;
                      _this6.state.isSilentUpdated = true; // 静默更新完成

                      _this6._closeableConsole({
                        type: 'log',
                        title: _this6._$t('console_silent_update_success')
                      });
                    }, function (e) {
                      _this6.state.isSilentUpdating = false; // 安装文件失败

                      _this6._closeableConsole({
                        type: 'log',
                        title: "".concat(_this6._$t('console_silent_update_success'), "[").concat(e.code, "]\uFF1A").concat(e.message)
                      });
                    });
                  } else {
                    _this6.state.isSilentUpdating = false;
                  }
                }); // 启动下载对象

                downloadTask.start(); // 添加下载监听

                downloadTask.addEventListener('statechanged', function (download, status) {
                  // eslint-disable-next-line no-case-declarations
                  var progress = parseInt(download.downloadedSize / download.totalSize * 100);

                  switch (download.state) {
                    case 1:
                      // 开始
                      // 下载任务开始请求
                      _this6._closeableConsole({
                        type: 'log',
                        title: _this6._$t('console_download_task_request')
                      });

                      break;

                    case 2:
                      // 已连接到服务器
                      // 下载任务网络连接已建立，服务器返回响应，准备传输数据内容
                      _this6._closeableConsole({
                        type: 'log',
                        title: _this6._$t('console_download_task_connected')
                      });

                      break;

                    case 3:
                      // 下载中...
                      // 已下载
                      _this6._closeableConsole({
                        type: 'log',
                        title: "".concat(_this6._$t('console_has_downloaded')).concat(progress, "%")
                      });

                      break;

                    case 4:
                      // 下载任务已完成
                      _this6._closeableConsole({
                        type: 'log',
                        title: _this6._$t('console_download_task_success')
                      });

                      break;
                  }
                });

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _handleUpdateSilent(_x4) {
        return _handleUpdateSilent2.apply(this, arguments);
      }

      return _handleUpdateSilent;
    }() // 关闭正在更新
    // _onCloseIsUpdating() {
    //   // 关闭正在更新
    //   this.state.isUpdating = false
    // }
    // 文字换行

  }, {
    key: "_drawText",
    value: function _drawText(text, maxWidth) {
      var textArr = text.split('');
      var len = textArr.length; // 上个节点

      var previousNode = 0; // 记录节点宽度

      var nodeWidth = 0; // 文本换行数组

      var rowText = []; // 如果是字母，侧保存长度

      var letterWidth = 0; // 汉字宽度

      var chineseWidth = 14; // otherFont宽度

      var otherWidth = 7;

      for (var i = 0; i < len; i++) {
        if (/[\u4e00-\u9fa5]|[\uFE30-\uFFA0]/g.test(textArr[i])) {
          if (letterWidth > 0) {
            if (nodeWidth + chineseWidth + letterWidth * otherWidth > maxWidth) {
              rowText.push({
                type: 'text',
                content: text.substring(previousNode, i)
              });
              previousNode = i;
              nodeWidth = chineseWidth;
              letterWidth = 0;
            } else {
              nodeWidth += chineseWidth + letterWidth * otherWidth;
              letterWidth = 0;
            }
          } else {
            if (nodeWidth + chineseWidth > maxWidth) {
              rowText.push({
                type: 'text',
                content: text.substring(previousNode, i)
              });
              previousNode = i;
              nodeWidth = chineseWidth;
            } else {
              nodeWidth += chineseWidth;
            }
          }
        } else {
          if (/\n/g.test(textArr[i])) {
            rowText.push({
              type: 'break',
              content: text.substring(previousNode, i)
            });
            previousNode = i + 1;
            nodeWidth = 0;
            letterWidth = 0;
          } else if (textArr[i] === '\\' && textArr[i + 1] === 'n') {
            rowText.push({
              type: 'break',
              content: text.substring(previousNode, i)
            });
            previousNode = i + 2;
            nodeWidth = 0;
            letterWidth = 0;
          } else if (/[a-zA-Z0-9]/g.test(textArr[i])) {
            letterWidth += 1;

            if (nodeWidth + letterWidth * otherWidth > maxWidth) {
              rowText.push({
                type: 'text',
                content: text.substring(previousNode, i + 1 - letterWidth)
              });
              previousNode = i + 1 - letterWidth;
              nodeWidth = letterWidth * otherWidth;
              letterWidth = 0;
            }
          } else {
            if (nodeWidth + otherWidth > maxWidth) {
              rowText.push({
                type: 'text',
                content: text.substring(previousNode, i)
              });
              previousNode = i;
              nodeWidth = otherWidth;
            } else {
              nodeWidth += otherWidth;
            }
          }
        }
      }

      if (previousNode < len) {
        rowText.push({
          type: 'text',
          content: text.substring(previousNode, len)
        });
      }

      return rowText;
    } // 是否更新弹窗

  }, {
    key: "_updatePopup",
    value: function _updatePopup(res, callback) {
      var _this7 = this;

      // 先处理上一次的弹框
      this.closePopup('update');
      var _this$_config2 = this._config,
          logo = _this$_config2.logo,
          mainColor = _this$_config2.mainColor;
      var version = res.version,
          changelog = res.changelog; // 弹窗遮罩层
      // const maskLayer = new plus.nativeObj.View('maskLayer', {
      //   //先创建遮罩层
      //   top: '0px',
      //   left: '0px',
      //   height: '100%',
      //   width: '100%',
      //   backgroundColor: 'rgba(0,0,0,0.5)',
      // })

      this.updateMaskLayer = new plus.nativeObj.View('maskLayer', {
        //先创建遮罩层
        top: '0px',
        left: '0px',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }); // 以下为计算菜单的 native view 绘制布局，为固定算法，使用者无关关心

      var screenWidth = plus.screen.resolutionWidth;
      var screenHeight = plus.screen.resolutionHeight; // 弹窗容器宽度百分比

      var popupViewWidthPercent = 0.8; //弹窗容器宽度

      var popupViewWidth = screenWidth * popupViewWidthPercent; // 弹窗容器的Padding

      var viewContentPadding = 20; // 弹窗容器的宽度

      var viewContentWidth = parseInt(popupViewWidth - viewContentPadding * 2); // 描述的列表

      var descriptionList = this._drawText(changelog || '', viewContentWidth);

      var imgHeight = logo ? 20 : 0; // 弹窗容器高度

      var popupViewHeight = 80 + 20 + 90 + 10 + imgHeight; // let popupViewHeight = 80 + 20 + 20 + 90 + 10

      var popupViewContentList = [{
        src: logo,
        id: 'logo',
        tag: 'img',
        position: {
          top: '0px',
          left: (popupViewWidth - 124) / 2 + 'px',
          width: '124px',
          height: '80px'
        }
      }, {
        tag: 'font',
        id: 'title',
        text: "".concat(this._$t('notice_on_new_version')).concat(version),
        textStyles: {
          size: '18px',
          color: '#333',
          weight: 'bold',
          whiteSpace: 'normal'
        },
        position: {
          top: "".concat(70 + imgHeight, "px"),
          left: viewContentPadding + 'px',
          width: viewContentWidth + 'px',
          height: '30px'
        }
      }];
      var textHeight = 18;
      var contentTop = 110 + imgHeight;
      descriptionList.forEach(function (item, index) {
        if (index > 0) {
          popupViewHeight += textHeight;
          contentTop += textHeight;
        }

        popupViewContentList.push({
          tag: 'font',
          id: 'content' + index + 1,
          text: item.content,
          textStyles: {
            size: '14px',
            color: '#666',
            lineSpacing: '50%',
            align: 'left'
          },
          position: {
            top: contentTop + 'px',
            left: viewContentPadding + 'px',
            width: viewContentWidth + 'px',
            height: textHeight + 'px'
          }
        });

        if (item.type === 'break') {
          contentTop += 10;
          popupViewHeight += 10;
        }
      }); // 弹窗内容
      // const popupView = new plus.nativeObj.View('popupView', {
      //   //创建底部图标菜单
      //   tag: 'rect',
      //   top: (screenHeight - popupViewHeight) / 2 + 'px',
      //   left: `${((1 - popupViewWidthPercent) / 2) * 100}%`,
      //   height: popupViewHeight + 'px',
      //   width: `${popupViewWidthPercent * 100}%`,
      // })

      this.updatePopupView = new plus.nativeObj.View('popupView', {
        //创建底部图标菜单
        tag: 'rect',
        top: (screenHeight - popupViewHeight) / 2 + 'px',
        left: "".concat((1 - popupViewWidthPercent) / 2 * 100, "%"),
        height: popupViewHeight + 'px',
        width: "".concat(popupViewWidthPercent * 100, "%")
      }); // 绘制白色背景

      this.updatePopupView.drawRect({
        color: '#FFFFFF',
        radius: '8px'
      }, {
        top: '40px',
        height: popupViewHeight - 40 + 'px'
      }); // 绘制底边按钮

      this.updatePopupView.drawRect({
        radius: '3px',
        borderColor: '#f1f1f1',
        borderWidth: '1px'
      }, {
        bottom: viewContentPadding + 'px',
        left: viewContentPadding + 'px',
        width: (viewContentWidth - viewContentPadding) / 2 + 'px',
        height: '30px'
      }); // 绘制底边按钮

      this.updatePopupView.drawRect({
        radius: '3px',
        color: mainColor
      }, {
        bottom: viewContentPadding + 'px',
        left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + 'px',
        width: (viewContentWidth - viewContentPadding) / 2 + 'px',
        height: '30px'
      });
      popupViewContentList.push({
        tag: 'font',
        id: 'cancelText',
        text: this._$t('notice_no_update_now'),
        textStyles: {
          size: '14px',
          color: '#666',
          lineSpacing: '0%',
          whiteSpace: 'normal'
        },
        position: {
          bottom: viewContentPadding + 'px',
          left: viewContentPadding + 'px',
          width: (viewContentWidth - viewContentPadding) / 2 + 'px',
          height: '30px'
        }
      });
      popupViewContentList.push({
        tag: 'font',
        id: 'confirmText',
        text: this._$t('notice_update_now'),
        textStyles: {
          size: '14px',
          color: '#FFF',
          lineSpacing: '0%',
          whiteSpace: 'normal'
        },
        position: {
          bottom: viewContentPadding + 'px',
          left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + 'px',
          width: (viewContentWidth - viewContentPadding) / 2 + 'px',
          height: '30px'
        }
      });
      this.updatePopupView.draw(popupViewContentList);
      this.updatePopupView.addEventListener('click', function (e) {
        var maxTop = popupViewHeight - viewContentPadding;
        var maxLeft = popupViewWidth - viewContentPadding;
        var buttonWidth = (viewContentWidth - viewContentPadding) / 2;

        if (e.clientY > maxTop - 30 && e.clientY < maxTop) {
          // 暂不升级
          if (e.clientX > viewContentPadding && e.clientX < maxLeft - buttonWidth - viewContentPadding) {
            // maskLayer.hide()
            // popupView.hide()
            _this7.updateMaskLayer.close();

            _this7.updatePopupView.close();
          } else if (e.clientX > maxLeft - buttonWidth && e.clientX < maxLeft) {
            // 立即升级
            _this7.updateMaskLayer.close();

            _this7.updatePopupView.close();

            callback && callback();
          }
        }
      }); // 点击遮罩层
      // maskLayer.addEventListener('click', function() {
      //   //处理遮罩层点击
      //   maskLayer.hide()
      //   popupView.hide()
      // })
      // 显示弹窗

      this.updateMaskLayer.show();
      this.updatePopupView.show();
    }
    /**
     * 弹框是否显示
     * @param { String } type - 弹框类型 [update, download]
     * @returns boolean
     */

  }, {
    key: "isPopupShow",
    value: function isPopupShow(type) {
      if (type === 'update') {
        // 更新弹框
        var updateMaskLayer = this.updateMaskLayer,
            updatePopupView = this.updatePopupView;

        if (updateMaskLayer || updatePopupView) {
          if (updateMaskLayer.isVisible() || updatePopupView.isVisible()) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else if (type === 'download') {
        // 下载弹框
        var downloadMaskLayer = this.downloadMaskLayer,
            downloadPopupView = this.downloadPopupView;

        if (downloadMaskLayer || downloadPopupView) {
          if (downloadMaskLayer.isVisible() || downloadPopupView.isVisible()) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        throw new Error('type 弹框类型未传入!');
      }
    }
    /**
     * 关闭弹框
     * @param { String } type - 弹框类型 [update, download]
     * @returns null
     */

  }, {
    key: "closePopup",
    value: function closePopup(type) {
      if (type === 'update') {
        // 更新弹框
        var updateMaskLayer = this.updateMaskLayer,
            updatePopupView = this.updatePopupView;

        if (updateMaskLayer && updateMaskLayer.isVisible()) {
          updateMaskLayer.close();
        }

        if (updatePopupView && updatePopupView.isVisible()) {
          updatePopupView.close();
        }
      } else if (type === 'download') {
        // 下载弹框
        var downloadMaskLayer = this.downloadMaskLayer,
            downloadPopupView = this.downloadPopupView;

        if (downloadMaskLayer && downloadMaskLayer.isVisible()) {
          downloadMaskLayer.close();
        }

        if (downloadPopupView && downloadPopupView.isVisible()) {
          downloadPopupView.close();
        }
      } else {
        throw new Error('type 弹框类型未传入!');
      }
    } // 文件下载的弹窗绘图

  }, {
    key: "_downloadPopupDrawing",
    value: function _downloadPopupDrawing(data) {
      var mainColor = this._config.mainColor; // 以下为计算菜单的 native view 绘制布局，为固定算法，使用者无关关心

      var screenWidth = plus.screen.resolutionWidth;
      var screenHeight = plus.screen.resolutionHeight; //弹窗容器宽度

      var popupViewWidth = screenWidth * 0.7; // 弹窗容器的Padding

      var viewContentPadding = 20; // 弹窗容器的宽度

      var viewContentWidth = popupViewWidth - viewContentPadding * 2; // 弹窗容器高度

      var popupViewHeight = viewContentPadding * 3 + 60; // 准备下载...

      this._closeableConsole({
        type: 'log',
        title: this._$t('console_prepare_download')
      });

      var progressTip = data.progressTip || this._$t('console_prepare_download'); // 正在为您更新，请耐心等待


      var contentText = data.contentText || this._$t('notice_updating');

      var elementList = [{
        tag: 'rect',
        //背景色
        color: '#FFFFFF',
        rectStyles: {
          radius: '8px'
        }
      }, {
        tag: 'font',
        id: 'title',
        text: this._$t('notice_update_app'),
        textStyles: {
          size: '16px',
          color: '#333',
          weight: 'bold',
          verticalAlign: 'middle',
          whiteSpace: 'normal'
        },
        position: {
          top: viewContentPadding + 'px',
          height: '30px'
        }
      }, {
        tag: 'font',
        id: 'content',
        text: contentText,
        textStyles: {
          size: '14px',
          color: '#333',
          verticalAlign: 'middle',
          whiteSpace: 'normal'
        },
        position: {
          top: viewContentPadding * 2 + 30 + 'px',
          height: '20px'
        }
      }]; // 是否有进度条

      if (data.progress) {
        popupViewHeight += viewContentPadding + 40;
        elementList = elementList.concat([{
          tag: 'font',
          id: 'progressValue',
          text: progressTip,
          textStyles: {
            size: '14px',
            color: mainColor,
            whiteSpace: 'normal'
          },
          position: {
            top: viewContentPadding * 4 + 20 + 'px',
            height: '30px'
          }
        }, {
          tag: 'rect',
          //绘制进度条背景
          id: 'progressBg',
          rectStyles: {
            radius: '4px',
            borderColor: '#f1f1f1',
            borderWidth: '1px'
          },
          position: {
            top: viewContentPadding * 4 + 60 + 'px',
            left: viewContentPadding + 'px',
            width: viewContentWidth + 'px',
            height: '8px'
          }
        }]);
      }

      if (data.buttonNum === 2) {
        popupViewHeight += viewContentPadding + 30;
        elementList = elementList.concat([{
          tag: 'rect',
          //绘制底边按钮
          rectStyles: {
            radius: '3px',
            borderColor: '#f1f1f1',
            borderWidth: '1px'
          },
          position: {
            bottom: viewContentPadding + 'px',
            left: viewContentPadding + 'px',
            width: (viewContentWidth - viewContentPadding) / 2 + 'px',
            height: '30px'
          }
        }, {
          tag: 'rect',
          //绘制底边按钮
          rectStyles: {
            radius: '3px',
            color: mainColor
          },
          position: {
            bottom: viewContentPadding + 'px',
            left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + 'px',
            width: (viewContentWidth - viewContentPadding) / 2 + 'px',
            height: '30px'
          }
        }, {
          tag: 'font',
          id: 'cancelText',
          // 取消下载
          text: this._$t('notice_update_cancel'),
          textStyles: {
            size: '14px',
            color: '#666',
            lineSpacing: '0%',
            whiteSpace: 'normal'
          },
          position: {
            bottom: viewContentPadding + 'px',
            left: viewContentPadding + 'px',
            width: (viewContentWidth - viewContentPadding) / 2 + 'px',
            height: '30px'
          }
        }, // 后台下载
        {
          tag: 'font',
          id: 'confirmText',
          text: this._$t('notice_update_background'),
          textStyles: {
            size: '14px',
            color: '#FFF',
            lineSpacing: '0%',
            whiteSpace: 'normal'
          },
          position: {
            bottom: viewContentPadding + 'px',
            left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + 'px',
            width: (viewContentWidth - viewContentPadding) / 2 + 'px',
            height: '30px'
          }
        }]);
      }

      if (data.buttonNum === 1) {
        popupViewHeight += viewContentPadding + 40;
        elementList = elementList.concat([{
          tag: 'rect',
          //绘制底边按钮
          rectStyles: {
            radius: '6px',
            color: mainColor
          },
          position: {
            bottom: viewContentPadding + 'px',
            left: viewContentPadding + 'px',
            width: viewContentWidth + 'px',
            height: '40px'
          }
        }, {
          tag: 'font',
          id: 'confirmText',
          text: this._$t('notice_update_close'),
          textStyles: {
            size: '14px',
            color: '#FFF',
            lineSpacing: '0%'
          },
          position: {
            bottom: viewContentPadding + 'px',
            left: viewContentPadding + 'px',
            width: viewContentWidth + 'px',
            height: '40px'
          }
        }]);
      }

      return {
        popupViewHeight: popupViewHeight,
        popupViewWidth: popupViewWidth,
        screenHeight: screenHeight,
        viewContentWidth: viewContentWidth,
        viewContentPadding: viewContentPadding,
        elementList: elementList
      };
    } // 文件下载的弹窗

  }, {
    key: "_downloadPopup",
    value: function _downloadPopup(data) {
      var _this8 = this;

      // 先处理上一次的弹框
      this.closePopup('download');
      var mainColor = this._config.mainColor; // 弹窗遮罩层
      // const maskLayer = new plus.nativeObj.View('maskLayer', {
      //   //先创建遮罩层
      //   top: '0px',
      //   left: '0px',
      //   height: '100%',
      //   width: '100%',
      //   backgroundColor: 'rgba(0,0,0,0.5)',
      // })

      this.downloadMaskLayer = new plus.nativeObj.View('maskLayer', {
        //先创建遮罩层
        top: '0px',
        left: '0px',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      });

      var popupViewData = this._downloadPopupDrawing(data); // 弹窗内容
      // const popupView = new plus.nativeObj.View('popupView', {
      //   //创建底部图标菜单
      //   tag: 'rect',
      //   top: (popupViewData.screenHeight - popupViewData.popupViewHeight) / 2 + 'px',
      //   left: '15%',
      //   height: popupViewData.popupViewHeight + 'px',
      //   width: '70%',
      // })


      this.downloadPopupView = new plus.nativeObj.View('popupView', {
        //创建底部图标菜单
        tag: 'rect',
        top: (popupViewData.screenHeight - popupViewData.popupViewHeight) / 2 + 'px',
        left: '15%',
        height: popupViewData.popupViewHeight + 'px',
        width: '70%'
      });
      var progressValue = 0;
      var progressTip = 0;
      var contentText = 0;
      var buttonNum = 2;

      if (data.buttonNum >= 0) {
        buttonNum = data.buttonNum;
      }

      this.downloadPopupView.draw(popupViewData.elementList);
      var callbackData = {
        change: function change(res) {
          var progressElement = [];

          if (res.progressValue) {
            progressValue = res.progressValue; // 绘制进度条

            progressElement.push({
              tag: 'rect',
              //绘制进度条背景
              id: 'progressValueBg',
              rectStyles: {
                radius: '4px',
                color: mainColor
              },
              position: {
                top: popupViewData.viewContentPadding * 4 + 60 + 'px',
                left: popupViewData.viewContentPadding + 'px',
                width: popupViewData.viewContentWidth * (res.progressValue / 100) + 'px',
                height: '8px'
              }
            });
          }

          if (res.progressTip) {
            progressTip = res.progressTip;
            progressElement.push({
              tag: 'font',
              id: 'progressValue',
              text: res.progressTip,
              textStyles: {
                size: '14px',
                color: mainColor,
                whiteSpace: 'normal'
              },
              position: {
                top: popupViewData.viewContentPadding * 4 + 20 + 'px',
                height: '30px'
              }
            });
          }

          if (res.contentText) {
            contentText = res.contentText;
            progressElement.push({
              tag: 'font',
              id: 'content',
              text: res.contentText,
              textStyles: {
                size: '16px',
                color: '#333',
                whiteSpace: 'normal'
              },
              position: {
                top: popupViewData.viewContentPadding * 2 + 30 + 'px',
                height: '30px'
              }
            });
          }

          if (res.buttonNum >= 0 && buttonNum !== res.buttonNum) {
            buttonNum = res.buttonNum;

            _this8.downloadPopupView.reset();

            popupViewData = _this8._downloadPopupDrawing(Object.assign({
              progressValue: progressValue,
              progressTip: progressTip,
              contentText: contentText
            }, res));
            var newElement = [];
            popupViewData.elementList.map(function (item, index) {
              var have = false;
              progressElement.forEach(function (childItem, childIndex) {
                if (item.id === childItem.id) {
                  have = true;
                }
              });

              if (!have) {
                newElement.push(item);
              }
            });
            progressElement = newElement.concat(progressElement);

            _this8.downloadPopupView.setStyle({
              tag: 'rect',
              top: (popupViewData.screenHeight - popupViewData.popupViewHeight) / 2 + 'px',
              left: '15%',
              height: popupViewData.popupViewHeight + 'px',
              width: '70%'
            });

            _this8.downloadPopupView.draw(progressElement);
          } else {
            _this8.downloadPopupView.draw(progressElement);
          }
        },
        cancel: function cancel() {
          _this8.downloadMaskLayer.close();

          _this8.downloadPopupView.close();
        },
        show: function show() {
          if (!_this8.downloadMaskLayer.isVisible()) {
            _this8.downloadMaskLayer.show();

            _this8.downloadPopupView.show();
          }
        }
      };
      this.downloadPopupView.addEventListener('click', function (e) {
        var maxTop = popupViewData.popupViewHeight - popupViewData.viewContentPadding;
        var maxLeft = popupViewData.popupViewWidth - popupViewData.viewContentPadding;

        if (e.clientY > maxTop - 40 && e.clientY < maxTop) {
          if (buttonNum === 1) {
            // 单按钮
            if (e.clientX > popupViewData.viewContentPadding && e.clientX < maxLeft) {
              // 重启
              _this8.downloadMaskLayer.close();

              _this8.downloadPopupView.close();

              plus.runtime.restart(); // callbackData.reboot()
            }
          } else if (buttonNum === 2) {
            // 双按钮
            var buttonWidth = (popupViewData.viewContentWidth - popupViewData.viewContentPadding) / 2;

            if (e.clientX > popupViewData.viewContentPadding && e.clientX < maxLeft - buttonWidth - popupViewData.viewContentPadding) {
              // 取消下载
              _this8.downloadMaskLayer.close();

              _this8.downloadPopupView.close();

              callbackData.cancelDownload();
            } else if (e.clientX > maxLeft - buttonWidth && e.clientX < maxLeft) {
              // 后台下载
              _this8.downloadMaskLayer.hide();

              _this8.downloadPopupView.hide();
            }
          }
        }
      }); // 显示弹窗

      this.downloadMaskLayer.show();
      this.downloadPopupView.show(); // 改变进度条

      return callbackData;
    } // 控制台提示

  }, {
    key: "_console",
    value: function _console(_ref) {
      var type = _ref.type,
          title = _ref.title,
          _ref$message = _ref.message,
          message = _ref$message === void 0 ? '' : _ref$message;
      var logString = this._config.logString;
      var label = "+++ Uni-pushy (".concat(title, ")").concat(message !== null && message !== void 0 ? message : ': ');
      var msg = logString ? JSON.stringify(message) : message;

      switch (type) {
        case 'log':
          // eslint-disable-next-line no-console
          console.log(label, msg);
          break;

        case 'warn':
          console.warn(label, msg);
          break;

        case 'error':
          console.error(label, msg);
          break;

        default:
          console.error(label, this._$t('console_invalid_console_type'));
          break;
      }
    }
    /**
     * 可关闭的控制台提示
     */

  }, {
    key: "_closeableConsole",
    value: function _closeableConsole(_ref2) {
      var type = _ref2.type,
          title = _ref2.title,
          message = _ref2.message;
      var isDebug = this._config.isDebug;
      isDebug && this._console({
        type: type,
        title: title,
        message: message
      });
    }
    /**
     * 国际化
     * @returns
     */

  }, {
    key: "_$t",
    value: function _$t(key) {
      var locale = this._config.locale;
      return $t(locale, key);
    }
    /**
     * @name 开始下载资源，只会 resolve， 不会 reject
     * `statusCode` <Number> 状态码，执行该方法之后的结果主要根据状态码进行判断
     * 491 无下载地址
     * 492 文件下载失败
     * `message` 	<String> 信息描述
     * `data` 		<Object> native 或者 wgt 包信息
     * `response` <Object> 原生响应对象
     * `error` 		<Error> 原生错误对象
     * @desc 49x
     * @return { Promise<object> } 包装的响应对象
     */

  }, {
    key: "startDownload",
    value: function () {
      var _startDownload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this9 = this;

        var platform, forceUpdate, url, lastProgressValue;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                platform = this.systemInfo.platform;
                forceUpdate = this._config.forceUpdate;
                url = this._cSourceInfo.url;

                if (!url) {
                  _context6.next = 7;
                  break;
                }

                if (/\.wgt$/i.test(url) || platform === 'android') {
                  // 打开正在更新
                  this.state.isUpdating = true;
                  this._cDownLoadTask = plus.downloader.createDownload(url, {
                    filename: '_doc/update/',
                    // 数值类型，单位为s(秒)，默认值为120s。 超时时间为服务器响应请求的时间（不是下载任务完成的总时间），如果设置为0则表示永远不超时。
                    timeout: 60,
                    // 数值类型，默认为重试3次。
                    retry: 3,
                    // 下载任务重试间隔时间 数值类型，单位为s(秒)，默认值为30s。
                    retryInterval: 5
                  }, function (download, status) {
                    if (status === 200) {
                      // 正在安装文件...
                      _this9._closeableConsole({
                        type: 'log',
                        title: _this9._$t('console_is_install')
                      }); // 发布开始安装资源事件


                      _this9._emit('onStartInstall');

                      plus.runtime.install(download.filename, {
                        // 是否强制安装
                        force: forceUpdate
                      }, function () {
                        // 关闭正在更新
                        _this9.state.isUpdating = false;
                        _this9.state.isSilentUpdated = true; // 应用资源更新完成!

                        _this9._closeableConsole({
                          type: 'log',
                          title: _this9._$t('console_install_success')
                        }); // 发布应用资源更新完成事件


                        _this9._emit('onUpdateSuccess');

                        _this9.state.isSilentUpdated = true;
                        return Promise.resolve({
                          statusCode: 200,
                          message: ''
                        });
                      }, function (e) {
                        // 关闭正在更新
                        _this9.state.isUpdating = false; // 安装文件失败

                        plus.nativeUI.alert("".concat(_this9._$t('notice_install_fail'), "[").concat(e.code, "]\uFF1A").concat(e.message));
                        return Promise.resolve({
                          statusCode: 493,
                          message: "".concat(_this9._$t('notice_install_fail'), "[").concat(e.code, "]\uFF1A").concat(e.message)
                        });
                      });
                    } else {
                      // 文件下载失败!
                      _this9._closeableConsole({
                        type: 'warn',
                        title: _this9._$t('console_download_fail')
                      }); // 关闭正在更新


                      _this9.state.isUpdating = false;
                      return Promise.resolve({
                        statusCode: 492,
                        message: _this9._$t('console_download_fail')
                      });
                    }
                  });
                  lastProgressValue = 0;

                  this._cDownLoadTask.start();

                  this._cDownLoadTask.addEventListener('statechanged', function (task) {
                    switch (task.state) {
                      case 1:
                        // 开始
                        // 准备下载...
                        _this9._closeableConsole({
                          type: 'log',
                          title: _this9._$t('console_prepare_download')
                        });

                        break;

                      case 2:
                        // 已连接到服务器
                        // 开始下载...
                        _this9._closeableConsole({
                          type: 'log',
                          title: _this9._$t('console_downloading')
                        }); // 发布开始下载事件


                        _this9._emit('onStartDownload');

                        break;

                      case 3:
                        // eslint-disable-next-line no-case-declarations
                        var progress = parseInt(task.downloadedSize / task.totalSize * 100);

                        if (progress - lastProgressValue >= 2) {
                          lastProgressValue = progress; // 已下载

                          _this9._closeableConsole({
                            type: 'log',
                            title: "".concat(_this9._$t('console_has_downloaded')).concat(progress, "%")
                          }); // 发布下载进度事件


                          _this9._emit('onDownloadProgress', {
                            progress: progress,
                            downloadedSize: task.downloadedSize,
                            totalSize: task.totalSize
                          });
                        }

                        break;
                    }
                  });
                } else {
                  // 关闭正在更新
                  this.state.isUpdating = false;
                  plus.runtime.openURL(url);
                }

                _context6.next = 8;
                break;

              case 7:
                return _context6.abrupt("return", Promise.resolve({
                  statusCode: 491,
                  message: this._$t('notice_no_download_url')
                }));

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function startDownload() {
        return _startDownload.apply(this, arguments);
      }

      return startDownload;
    }()
    /**
     * @name 重启APP
     */

  }, {
    key: "restart",
    value: function restart() {
      plus.runtime.restart();
    }
  }]);

  return Pushy;
}();

export { Pushy as default };
