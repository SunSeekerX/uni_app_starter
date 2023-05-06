/**
 * https://github.com/zhetengbiji/image-tools
 */

import { BaseResult, ResCode } from '@/interface'

function getLocalFilePath(path: string) {
  if (
    path.indexOf('_www') === 0 ||
    path.indexOf('_doc') === 0 ||
    path.indexOf('_documents') === 0 ||
    path.indexOf('_downloads') === 0
  ) {
    return path
  }
  if (path.indexOf('file://') === 0) {
    return path
  }
  if (path.indexOf('/storage/emulated/0/') === 0) {
    return path
  }
  if (path.indexOf('/') === 0) {
    const localFilePath = plus.io.convertAbsoluteFileSystem(path)
    if (localFilePath !== path) {
      return localFilePath
    } else {
      path = path.substr(1)
    }
  }
  return '_www/' + path
}

function dataUrlToBase64(str: string) {
  const array = str.split(',')
  return array[array.length - 1]
}

let index = 0
function getNewFileId() {
  return Date.now() + String(index++)
}

function biggerThan(v1: string, v2: string) {
  const v1Array = v1.split('.')
  const v2Array = v2.split('.')
  let update = false
  for (let index = 0; index < v2Array.length; index++) {
    const diff: number = Number(v1Array[index]) - Number(v2Array[index])
    if (diff !== 0) {
      update = diff > 0
      break
    }
  }
  return update
}

/**
 * 将图片临时路径转换为 base64
 * @param path 路径
 * @returns
 */
export const path2Base64 = (path: string): Promise<BaseResult<string>> => {
  return new Promise(function (resolve) {
    // 返回结果
    const mResult: BaseResult<string> = {
      success: true,
      code: ResCode.Success,
      msg: 'Success',
    }
    const onResolveError = (err: any, msg?: string) => {
      mResult.code = ResCode.SystemErr
      mResult.success = false
      if (msg) {
        mResult.msg = msg
      }

      if (err) {
        mResult.error = err
      }
      resolve(mResult)
    }
    // 浏览器环境
    if (typeof window === 'object' && 'document' in window) {
      if (typeof FileReader === 'function') {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', path, true)
        xhr.responseType = 'blob'
        xhr.onload = function () {
          if (this.status === 200) {
            let fileReader = new FileReader()
            fileReader.onload = function (e) {
              if (typeof e?.target?.result === 'string') {
                mResult.data = e.target.result
                resolve(mResult)
              } else {
                onResolveError(null, '结果非 string')
              }
            }
            fileReader.onerror = (e) => {
              onResolveError(e, 'fileReader error')
            }
            fileReader.readAsDataURL(this.response)
          }
        }
        xhr.onerror = (e) => {
          onResolveError(e, 'fileReader error')
        }
        xhr.send()
        return
      }
      const canvas = document.createElement('canvas')
      const c2x = canvas.getContext('2d')
      const img = new Image()
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        c2x?.drawImage(img, 0, 0)
        mResult.data = canvas.toDataURL()
        resolve(mResult)
        // resolve(canvas.toDataURL())
        canvas.height = canvas.width = 0
      }
      img.onerror = (e) => {
        onResolveError(e, 'fileReader error')
      }
      img.src = path
      return
    }
    // App 环境
    if (typeof plus === 'object') {
      plus.io.resolveLocalFileSystemURL(
        getLocalFilePath(path),
        (entry: any) => {
          entry.file(
            (file: PlusIoFile) => {
              const fileReader = new plus.io.FileReader!()
              fileReader.onload = (data: any) => {
                // resolve(data.target.result)
                if (typeof data?.target?.result === 'string') {
                  mResult.data = data?.target?.result
                  resolve(mResult)
                } else {
                  mResult.code = ResCode.SystemErr
                  mResult.success = false
                  mResult.msg = '结果非 string'
                }
              }
              fileReader.onerror = (error) => {
                onResolveError(error, 'plus.io.FileReader error')
              }
              fileReader.readAsDataURL(file)
            },
            (error: any) => {
              onResolveError(error, 'getLocalFilePath error')
            }
          )
        },
        (error) => {
          onResolveError(error, 'resolveLocalFileSystemURL error')
        }
      )
      return
    }
    // 小程序环境
    if (typeof uni === 'object' && uni.canIUse('getFileSystemManager')) {
      uni.getFileSystemManager().readFile({
        filePath: path,
        encoding: 'base64',
        success: (res) => {
          const result = `data:image/png;base64,${res.data}`
          mResult.data = result as string
          resolve(mResult)
        },
        fail: (error) => {
          onResolveError(error, error.errMsg)
        },
      })
      return
    }
    onResolveError(null, 'not support')
  })
}

/**
 * Base64 转换为 path 路径
 * @param base64 base64
 * @returns
 */
export const base64ToPath = (base64: string): Promise<BaseResult<string>> => {
  return new Promise(function (resolve) {
    // 结果
    const mResult: BaseResult<string> = {
      success: true,
      code: ResCode.Success,
      msg: 'Success',
    }
    const onResolveError = (err: any, msg?: string) => {
      mResult.code = ResCode.SystemErr
      mResult.success = false
      if (msg) {
        mResult.msg = msg
      }

      if (err) {
        mResult.error = err
      }
      resolve(mResult)
    }
    // 浏览器环境
    if (typeof window === 'object' && 'document' in window) {
      const base64List = base64.split(',')
      const type = base64List[0].match(/:(.*?);/)![1]
      const str = atob(base64[1])
      let n = str.length
      const array = new Uint8Array(n)
      while (n--) {
        array[n] = str.charCodeAt(n)
      }
      mResult.data = (window.URL || window.webkitURL).createObjectURL(new Blob([array], { type: type }))
      resolve(mResult)
      return
    }

    // App 环境
    const extNameList = base64.split(',')[0].match(/data\:\S+\/(\S+);/)
    let extName
    if (extName) {
      extName = extNameList![1]
    } else {
      onResolveError(null, 'base64 error')
    }
    const fileName = getNewFileId() + '.' + extName
    if (typeof plus === 'object') {
      const basePath = '_doc'
      const dirPath = 'uniapp_temp'
      const filePath = basePath + '/' + dirPath + '/' + fileName
      if (!biggerThan(plus.os.name === 'Android' ? '1.9.9.80627' : '1.9.9.80472', plus.runtime.innerVersion!)) {
        plus.io.resolveLocalFileSystemURL(
          basePath,
          (entry) => {
            entry.getDirectory(
              dirPath,
              {
                create: true,
                exclusive: false,
              },
              (entry) => {
                entry.getFile(
                  fileName,
                  {
                    create: true,
                    exclusive: false,
                  },
                  (entry) => {
                    entry.createWriter((writer) => {
                      writer.onwrite = () => {
                        mResult.data = filePath
                        resolve(mResult)
                      }
                      writer.onerror = (e) => {
                        onResolveError(e, 'base64 error')
                      }
                      writer.seek(0)
                      writer.writeAsBinary(dataUrlToBase64(base64))
                    }, onResolveError)
                  },
                  onResolveError
                )
              },
              onResolveError
            )
          },
          onResolveError
        )
        return
      }
      const bitmap = new plus.nativeObj.Bitmap!(fileName)
      bitmap.loadBase64Data(
        base64,
        () => {
          bitmap.save(
            filePath,
            {},
            () => {
              bitmap.clear()
              mResult.data = filePath
              resolve(mResult)
              // resolve(filePath)
            },
            (error) => {
              bitmap.clear()
              onResolveError(error, 'bitmap.save error')
            }
          )
        },
        (error) => {
          bitmap.clear()
          onResolveError(error, 'bitmap.loadBase64Data error')
        }
      )
      return
    }

    // 小程序环境
    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      const filePath = wx.env.USER_DATA_PATH + '/' + fileName
      uni.getFileSystemManager().writeFile({
        filePath: filePath,
        data: dataUrlToBase64(base64),
        encoding: 'base64',
        success: () => {
          mResult.data = filePath
          resolve(mResult)
        },
        fail: (error) => {
          onResolveError(error, 'writeFile error')
        },
      })
      return
    }
    onResolveError(null, 'not support')
  })
}
