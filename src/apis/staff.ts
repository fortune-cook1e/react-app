import { PromiseHttpRes } from './../types/request'
import { IStaffListRequest, IStaff, IStaffListResponse } from './../types/staff'

import request from '@/utils/request'

export const fetchStaffList = (params: IStaffListRequest): PromiseHttpRes<IStaffListResponse> => {
  return request({
    url: '/staff/list',
    method: 'get',
    params
  })
}

export const createStaff = (data: Omit<IStaff, 'id'>): PromiseHttpRes<void> => {
  return request({
    url: '/staff/add',
    method: 'post',
    data
  })
}

export const updateStaff = (data: IStaff): PromiseHttpRes<void> => {
  return request({
    url: '/staff/update',
    method: 'post',
    data
  })
}

export const deleteStaff = (data: { id: string }): PromiseHttpRes<void> => {
  return request({
    url: '/staff/delete',
    method: 'post',
    data
  })
}

export const fetchStaffInfo = (id: string): PromiseHttpRes<IStaff> => {
  return request({
    url: '/staff/info',
    method: 'get',
    params: { id }
  })
}
