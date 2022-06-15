import { IUser } from '@/types/user'
import { LoginRequest, HttpResponse } from './../types'
import request from '@/utils/request'

export const login = (data: LoginRequest): Promise<HttpResponse<IUser>> => {
	return request({
		url: '/users/login',
		method: 'post',
		data
	})
}
