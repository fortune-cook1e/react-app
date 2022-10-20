import { HttpResponse } from '../types/request'
import { AddVisualRequest, FetchVisualListResponse, UpdateVisualRequest } from '../types/visual'

import { VisualItem } from '@/types/visual'
import request from '@/utils/request'

const nameSpace = '/visual'

export const addVisual = (data: AddVisualRequest): Promise<HttpResponse> =>
  request({
    url: `${nameSpace}/add`,
    data,
    method: 'post'
  })

export const fetchVisualList = (): Promise<HttpResponse<FetchVisualListResponse>> =>
  request({
    url: `${nameSpace}/list`,
    method: 'get'
  })

export const fetchVisualInfo = (id: string): Promise<HttpResponse<VisualItem>> =>
  request({
    url: `${nameSpace}/info`,
    method: 'get',
    params: {
      id
    }
  })

export const updateVisual = (data: UpdateVisualRequest): Promise<HttpResponse<VisualItem>> =>
  request({
    url: `${nameSpace}/update`,
    method: 'post',
    data
  })

export const deleteVisual = (id: string): Promise<HttpResponse> =>
  request({
    url: `${nameSpace}/delete`,
    method: 'post',
    data: {
      id
    }
  })
