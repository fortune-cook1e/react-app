import { Method } from 'axios'

export interface HttpResponse<T> {
	status: number
	statusText: string
	data: {
		code: number
		msg: string
		data: T
	}
}

export interface RequestOptions<T> {
	url: string
	method?: Method
	data?: T
	params?: T
	options?: {
		globalLoading?: boolean // 是否开启全局loading
	}
}
