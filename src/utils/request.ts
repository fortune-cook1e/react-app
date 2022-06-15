import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { HttpResponse, RequestOptions } from '@/types'
import { message } from 'antd'

const instance = axios.create({
	baseURL: '/api'
})

const request = <T = any, D = any>(
	requestionOptions: RequestOptions<T>
): Promise<HttpResponse<D>> => {
	const defaultOptions = {
		globalLoading: false, // 全局loading
		customError: false // 自定义处理报错(不再弹窗报错)
	}

	const { method, url, data, params, options = defaultOptions } = requestionOptions
	const { globalLoading, customError } = options

	const token = 'adsa'

	const _options: AxiosRequestConfig = {
		method,
		url,
		data,
		params,
		headers: {
			Authorization: `Bearer ${token}`
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
				const { code, msg = '服务器异常' } = data
				// TODO: 待处理 status非200情况
				if (code !== 0) {
					!customError && message.error(msg)
					reject(data)
				}
				resolve(data)
			})
			.catch((error: AxiosError) => {
				const { message: axiosErrorMsg } = error
				!customError && message.error(axiosErrorMsg || '服务器异常')
				reject(error)
			})
	})
}

export default request
