import { BaseResult } from '@/src/interface'

// 生物认证方式
interface SoterAuthenticationType {
  id: String // id
  available: Boolean // 是否可以进行生物认证
}

/**
 * 获取本机支持的生物认证方式
 */
// export async function onGetSupportSoterAuthentication(): Promise<BaseResult<Array<SoterAuthenticationType>>> {
//   return new Promise(async (resolve) => {
//     const FingerPrint = 'fingerPrint'
//     const Facial = 'facial'
//     const soterAuthList: Array<SoterAuthenticationType> = []

//     uni.checkIsSupportSoterAuthentication({
//       success: async (res) => {
//         const { supportMode } = res
//         for (const item of supportMode) {
//           uni.checkIsSoterEnrolledInDevice({
//             checkAuthMode: item,
//             success: (res) => {
//               // 添加生物认证方式
//               soterAuthList.push({
//                 id: FingerPrint,
//                 available: res.isEnrolled,
//               })
//             },
//             fail: (err) => {
//               resolve({
//                 success: false,
//                 code: 500,
//                 msg: err,
//               })
//               break
//             },
//           })
//         }
//         resolve({
//           success: true,
//           code: 200,
//           msg: 'Success',
//           data: soterAuthList,
//         })

//         if (Array.isArray(supportMode) && supportMode.includes(FingerPrint)) {
//           // 支持指纹，检查是否录入了指纹
//           uni.checkIsSoterEnrolledInDevice({
//             checkAuthMode: FingerPrint,
//             success: (res) => {
//               // 添加生物认证方式
//               soterAuthList.push({
//                 id: FingerPrint,
//                 name: '指纹',
//                 available: res.isEnrolled,
//               })
//             },
//             fail: (err) => {
//               resolve({
//                 success: false,
//                 code: 500,
//                 msg: err,
//               })
//             },
//           })
//         } else if (Array.isArray(supportMode) && supportMode.includes(Facial)) {
//           // 支持 faceid，检查是否录入了人脸数据
//           uni.checkIsSoterEnrolledInDevice({
//             checkAuthMode: Facial,
//             success: (res) => {
//               // 添加生物认证方式
//               soterAuthList.push({
//                 id: Facial,
//                 name: '人脸',
//                 available: res.isEnrolled,
//               })
//             },
//             fail: (err) => {
//               resolve({
//                 success: false,
//                 code: 500,
//                 msg: err,
//               })
//             },
//           })
//         } else {
//           resolve({
//             success: true,
//             code: 200,
//             msg: '该设备不支持生物认证方式或 uni-app 未适配！',
//             data: [],
//           })
//         }
//       },
//       fail: (err) => {
//         resolve({
//           success: false,
//           code: 500,
//           msg: err,
//         })
//       },
//     })
//   })
// }
