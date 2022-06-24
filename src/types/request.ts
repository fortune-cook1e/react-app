import { Method } from 'axios'

export interface HttpResponse<T = any> {
	code: number
	msg: string
	data: T
}

export interface RequestOptions<T> {
	url: string
	method?: Method
	data?: T
	params?: T
	options?: {
		globalLoading?: boolean // 是否开启全局loading
		customError?: boolean // 是否自定义处理错误
	}
}

export interface PageRequest {
	page: number
	page_size: number
}

export interface PageResponse extends PageRequest {
	total: number
}
