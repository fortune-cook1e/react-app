import axios, { AxiosRequestConfig } from 'axios'
import { HttpResponse, RequestOptions } from '@/types'

const instance = axios.create({
	baseURL: '/api'
})

const request = <T>(options: RequestOptions): Promise<HttpResponse<T>> => {}
