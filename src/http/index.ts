import { AxiosRequestConfig } from 'axios'

import instance from './request'
import { RequestError } from './util'

class Request {
  static POST = 'post'
  static GET = 'get'
  static SUCCESS_CODE = 0
  static ERROR_CODE = 2

  instance

  constructor() {
    this.instance = instance
  }

  addHeaders(headers: { [key: string]: string }) {
    Object.keys(headers).forEach(k => {
      this.instance.defaults.headers.common[k] = headers[k]
    })
  }

  /**
   * 获取二级制文件
   * @param url
   * @param params
   * @returns {*}
   */
  getFromStream(url: string, params: any): Promise<ArrayBuffer> {
    return this.instance.get(url, { params, responseType: 'arraybuffer' })
  }

  /**
   * request method serving the post and get
   * @param method
   * @param url
   * @param data
   * @param headers
   */
  request({
    method,
    url,
    data,
    headers
  }: {
    method: string
    url: string
    data: any
    headers: { [key: string]: string }
  }) {
    this.addHeaders(headers)
    const req = method === Request.GET ? { params: data } : { data: data }

    const config = {
      url,
      method,
      ...req
    }

    return new Promise((resolve, reject) => {
      this.instance
        .request(config as AxiosRequestConfig)
        .then(res => {
          const body = res.data
          if (body.code !== Request.SUCCESS_CODE) {
            const err = new RequestError(body.code, body.msg)
            reject(err)
          } else {
            resolve(body.data)
          }
        })
        .catch(err => {
          const error = new RequestError(Request.ERROR_CODE, err.message)
          reject(error)
        })
    })
  }

  get({
    url,
    params = {},
    headers = {}
  }: {
    url: string
    params?: any
    headers?: { [key: string]: any }
  }): Promise<any> {
    return this.request({
      url,
      data: params,
      headers,
      method: Request.GET
    })
  }

  post({
    url,
    data = {},
    headers = {}
  }: {
    url: string
    data?: any
    headers?: { [key: string]: any }
  }): Promise<any> {
    return this.request({
      url,
      data,
      headers,
      method: Request.POST
    })
  }
}

export default new Request()
