// / <reference types="vite/client" />

/*eslint-disable */

// vite 启动时全局变量
declare const IS_DEV: boolean

declare module 'postcss-import'
declare module 'postcss-preset-env'
declare module '*.less'
declare module '*.jpg'
declare module '*.svg'

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  PROD: boolean
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
