<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-07-01 23:39:11
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-06 17:43:10
-->

<template>
	<view class="page">
		<AppOutput :output="consoleText" />

		<AppOperationContent name="md5 加密">
			<!-- encryptMD5 -->
			<AppOperation
				operation-name="请输入需要 md5 加密的内容"
				v-model="md5EncryptionText"
				button-text="md5 加密: encryptMD5(val: string): string"
				@onTap="onMd5Encrypt"
			/>
		</AppOperationContent>

		<AppOperationContent name="SHA 加密">
			<!-- encryptSHA1ToString -->
			<AppOperation
				operation-name="请输入需要 SHA1 加密的内容"
				v-model="sha1EncryptionText"
				button-text="SHA1 加密: encryptSHA1ToString(val: string): string"
				@onTap="onEncryptSHA1"
			/>
			<!-- encryptSHA256ToString -->
			<AppOperation
				operation-name="请输入需要 SHA256 加密的内容"
				v-model="sha256EncryptionText"
				button-text="SHA256 加密: encryptSHA256ToString(val: string): string"
				@onTap="onEncryptSHA256"
			/>
			<!-- encryptSHA51ToString -->
			<AppOperation
				operation-name="请输入需要 SHA512 加密的内容"
				v-model="sha512EncryptionText"
				button-text="SHA512 加密: encryptSHA512ToString(val: string): string"
				@onTap="onEncryptSHA512"
			/>
		</AppOperationContent>

		<AppOperationContent name="RSA 加密">
			<!-- encryptRSA2Base64Plain -->
			<AppOperation
				operation-name="请输入需要 RSA 加密的内容"
				v-model="rsaEncryptionText"
				button-text="RSA 加密: encryptRSA2Base64(data: string, publicKey: string): string | boolean"
				@onTap="onEncryptRSA2Base64"
			>
				<label>
					<text class="label">{{ operationName }}</text>
					<textarea
						@input="$emit('change', $event.target.value)"
						:value="value"
						:placeholder="placeholder"
						class="content-input"
						maxlength="-1"
						type="text"
					/>
				</label>
				<div slot="content">{{ rsaEncryptionPublicKey }}</div>
			</AppOperation>
			<!-- encryptSHA256ToString -->
			<!-- <AppOperation
		    operation-name="请输入需要 SHA256 加密的内容"
		    v-model="sha256EncryptionText"
		    button-text="SHA256 加密: encryptSHA256ToString(val: string): string"
		    @onTap="onEncryptSHA256"
		  /> -->
		</AppOperationContent>
	</view>
</template>

<script>
import AppOutput from '../../components/app-output/app-output'
import AppOperationContent from '../../components/app-operation-content/app-operation-content'
import AppOperation from '../../components/app-operation/app-operation'

export default {
	name: 'UtoolsEncryptUtil',

	components: { AppOutput, AppOperationContent, AppOperation },

	data() {
		return {
			consoleText: '输出区(可点击复制)',
			md5EncryptionText: 'https://doc.yoouu.cn/basic/resource/#📌-开源软件',
			sha1EncryptionText: 'sha1EncryptionText',
			sha256EncryptionText: 'sha256EncryptionText',
			sha512EncryptionText: 'sha512EncryptionText',
			rsaEncryptionText: 'rsaEncryptionText',
			rsaEncryptionPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCyH9AnCQL3Gy9Ed3PDGV7xPnpt
0+65mlzzKNxIg3+sG8ndPvke1gTpcCAOA/nz2dHyEnJqsQGEfETXqjxb1ayvitX2
TW48tNEbos/nYyDqjV1cXibcMSqxFTJbyRpwH9r4kkAHImmAJ+8ggnzmulogvlmP
FueS0S+KwrM7uoi23QIDAQAB
-----END PUBLIC KEY-----
`,
			rsaEncryptionPrivateKey: `-----BEGIN PRIVATE KEY-----
MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBALIf0CcJAvcbL0R3
c8MZXvE+em3T7rmaXPMo3EiDf6wbyd0++R7WBOlwIA4D+fPZ0fIScmqxAYR8RNeq
PFvVrK+K1fZNbjy00Ruiz+djIOqNXVxeJtwxKrEVMlvJGnAf2viSQAciaYAn7yCC
fOa6WiC+WY8W55LRL4rCszu6iLbdAgMBAAECgYAld22YGFwoT+6ETz/pRLfktIiZ
+18WaTKt7uVO12IOeJXgVLOf2dKUq4ICkLGNqj5v1ZN9f5fbHyx31JX3lx1IQVRu
zJP1hMWaAvNLJ23nySRf1YRa8uDFSuHhss1u7gkTEUVog2BL7IPv2e97wCHyXzEB
Ldba6FI14hpZEJrAQQJBAN+3HQCxjYjDeFJCdcLJtXOKicue4RM5P5VxrOOhkRO0
tFqqM8MVfMUkozF3mn68y1CsJPqtk7fbdfnawr7Lxe0CQQDL1GVJfdtpuZvNQCGX
QiTed8nT12/sdPWZsWg4qtm+/L1xDaryj9fXMi7Dj1KXXEn8dk7G2v4OQguHyZNa
3JaxAkBmUKP2Dj4x31wnGvgqtv/CsQimVKqRlSwsWAn/LYRhY9LcaF02Cpy+uSvd
0tqYvhWqdqCO+VXGz5scQ12vzxhdAkEAxKBm+SdNI0dnEe/8t4KaOHXMH+yizrLh
PdtTE99U4JXFVir+LrIuYCzLyeEXpmXkBYRHaDNXg3+Yyevdl3hWcQJAZ/m7aUKq
4n9hLxJj85EOJBNscMxxzaVplPqmJvwO2rr7HDxl3bB31flvWIUik/CfrsYdWy5Q
fhe0p/VKfqSYgA==
-----END PRIVATE KEY-----
`,
		}
	},

	methods: {
		onMd5Encrypt() {
			const { md5EncryptionText, $utools } = this
			if (md5EncryptionText) {
				this.consoleText = $utools.EncryptUtil.encryptMD5(md5EncryptionText)
				$utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
			} else {
				$utools.toast('请输入内容！')
			}
		},

		onEncryptSHA1() {
			const { sha1EncryptionText, $utools } = this
			if (sha1EncryptionText) {
				this.consoleText = $utools.EncryptUtil.encryptSHA1ToString(sha1EncryptionText)
				$utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
			} else {
				$utools.toast('请输入内容！')
			}
		},

		onEncryptSHA256() {
			const { sha256EncryptionText, $utools } = this
			if (sha256EncryptionText) {
				this.consoleText = $utools.EncryptUtil.encryptSHA256ToString(sha256EncryptionText)
				$utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
			} else {
				$utools.toast('请输入内容！')
			}
		},

		onEncryptSHA512() {
			const { sha512EncryptionText, $utools } = this
			if (sha512EncryptionText) {
				this.consoleText = $utools.EncryptUtil.encryptSHA512ToString(sha512EncryptionText)
				$utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
			} else {
				$utools.toast('请输入内容！')
			}
		},

		onEncryptRSA2Base64() {
			const { rsaEncryptionText, rsaEncryptionPublicKey, $utools } = this
			if (!rsaEncryptionText) {
				return $utools.toast('请输入内容！')
			} else if (!rsaEncryptionPublicKey) {
				return $utools.toast('请输入RSA加密公钥！')
			}
			this.consoleText = $utools.EncryptUtil.encryptRSA2Base64(rsaEncryptionText, rsaEncryptionPublicKey)
			$utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index.scss';
</style>
