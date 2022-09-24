import { IUser } from '@/types/user'
import { LoginRequest, PromiseHttpRes } from './../types'
import request from '@/utils/request'

export const login = (data: LoginRequest): PromiseHttpRes<IUser> => {
	return request({
		url: '/user/login',
		method: 'post',
		data
	})
}

export const logout = (): PromiseHttpRes<void> => {
	return request({
		url: '/user/logout',
		method: 'post'
	})
}

export const register = (data: LoginRequest): PromiseHttpRes<IUser> => {
	return request({
		url: '/user/register',
		method: 'post',
		data
	})
}

export const getUsers = (): PromiseHttpRes<IUser[]> =>
	request({
		url: '/user/list',
		method: 'get'
	})
