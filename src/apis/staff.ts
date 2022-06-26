import { IStaffListRequest, IStaff, IStaffListResponse } from './../types/staff'
import request from '@/utils/request'

export const fetchStaffList = (params: IStaffListRequest): Promise<IStaffListResponse> => {
	return request({
		url: '/staff/list',
		method: 'get',
		params
	})
}

export const createStaff = (data: Omit<IStaff, 'id'>): Promise<void> => {
	return request({
		url: '/staff/add',
		method: 'post',
		data
	})
}

export const updateStaff = (data: IStaff): Promise<void> => {
	return request({
		url: '/staff/update',
		method: 'post',
		data
	})
}

export const deleteStaff = (data: { id: string }): Promise<void> => {
	return request({
		url: '/staff/delete',
		method: 'post',
		data
	})
}

export const fetchStaffInfo = (id: string): Promise<IStaff> => {
	return request({
		url: '/staff/info',
		method: 'get',
		params: { id }
	})
}
