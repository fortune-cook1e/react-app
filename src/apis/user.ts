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

export const logout = (): Promise<HttpResponse> => {
	return request({
		url: '/users/logout',
		method: 'post'
	})
}

export const register = (data: LoginRequest): Promise<HttpResponse> => {
	return request({
		url: '/users/register',
		method: 'post',
		data
	})
}

export const getUsers = (): Promise<HttpResponse> =>
	request({
		url: '/users',
		method: 'get'
	})
