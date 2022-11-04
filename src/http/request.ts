import axios from 'axios'

const instance = axios.create({
  baseURL: '/api'
})

instance.interceptors.request.use(
  config => {
    // 设置请求头
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  res => Promise.resolve(res),
  error => Promise.reject(error)
)

export default instance
