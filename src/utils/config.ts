import localforage from 'localforage'

import { Env } from '@/types'

const getEnv = (): Env => {
  if (process.env.NODE_ENV === 'development') return Env.Dev
  if (location.host.includes('localhost')) {
    return Env.Dev
  }
  return Env.Prod
}

const globalConfig = {
  salt: 'react-app',
  indexedDbBaseName: 'my-react-app-database',
  indexedDbStoreName: 'reactApp',
  indexedDbVersion: 1,
  // ISDEV 变量在vite文件中定义
  isDev: getEnv() === Env.Dev,
  requestUrl: getEnv() === Env.Dev ? '/api' : 'https://koa-app-seven.vercel.app/api'
}

// 初始化indexedDb数据库
export const initIndexedDb = (): void => {
  localforage.config({
    name: globalConfig.indexedDbBaseName,
    storeName: globalConfig.indexedDbStoreName,
    version: globalConfig.indexedDbVersion
  })
}

export const clearIndexedDb = (): void => {
  localforage.clear()
}

export default globalConfig
