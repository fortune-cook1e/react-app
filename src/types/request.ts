import { Method } from 'axios'

export enum ResponseCode {
  Ok = 0,
  Fail = 2,
  LoginInValid = 10000
}

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

export type PromiseHttpRes<T = any> = Promise<HttpResponse<T>>
