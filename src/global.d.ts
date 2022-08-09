/*eslint-disable */
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_ENV: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare module 'postcss-import'
declare module 'postcss-preset-env'
declare module '*.less'
