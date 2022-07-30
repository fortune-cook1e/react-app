import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { HttpResponse, RequestOptions } from '@/types'
import { clientCrypto } from '@fe-cookie/client-request-crypto'
import { message } from 'antd'
import store from '@/store'
import { setUser } from '@/store/slices/user'
import globalConfig from './config'

const instance = axios.create({
	baseURL: '/api'
})

const request = <T = any, D = any>(requestionOptions: RequestOptions<T>): Promise<D> => {
	const defaultOptions = {
		globalLoading: false, // 全局loading
		customError: false // 自定义处理报错(不再弹窗报错)
	}

	const { method, url, data, params, options = defaultOptions } = requestionOptions
	const { globalLoading, customError } = options

	const { sign, params: newParams } = clientCrypto({
		params: params || data || {},
		salt: globalConfig.salt
	})

	const _options: AxiosRequestConfig = {
		method,
		url,
		data,
		params,
		headers: {
			'X-AUTHO-TOKEN': sign || ''
		}
	}

	return new Promise((resolve, reject) => {
		instance(_options)
			.then((response: AxiosResponse<HttpResponse<D>>) => {
				const { headers } = response
				const responseAuthroizationToken =
					headers['Set-Authorization'] || headers['set-authorization']
				if (responseAuthroizationToken) {
					const [, token] = responseAuthroizationToken.split(',')
					// TODO: token处理
				}
				const { data, status } = response
				const { code, msg = '服务器异常', data: responseData } = data
				// TODO: 待处理 status非200情况
				if (code !== 0) {
					// TIP: 10000code代表token失效 需要重新登录
					if (code === 10000) {
						message.info('登录失效，请重新登录，1s后进行跳转')
						setTimeout(() => {
							store.dispatch(setUser(null))
							window.location.hash = '#/login'
						}, 1000)

						return
					}
					!customError && message.error(msg)
					reject(data)
				}
				resolve(responseData)
			})
			.catch((error: AxiosError) => {
				const { message: axiosErrorMsg } = error
				!customError && message.error(axiosErrorMsg || '服务器异常')
				reject(error)
			})
	})
}

export default request
