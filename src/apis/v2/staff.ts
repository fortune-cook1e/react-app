import { HttpResponse } from './../../types/request'
import { IStaffListRequest, IStaff, IStaffListResponse } from '@/types/staff'
import request from '@/utils/requestV2'

export const fetchStaffList = (
	params: IStaffListRequest
): Promise<HttpResponse<IStaffListResponse>> => {
	return request({
		url: '/staff/list',
		method: 'get',
		params
	})
}
