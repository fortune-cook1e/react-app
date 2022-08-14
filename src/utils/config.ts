import localforage from 'localforage'

const globalConfig = {
	salt: 'react-app',
	indexedDbBaseName: 'my-react-app-database',
	indexedDbStoreName: 'reactApp',
	indexedDbVersion: 1,
	// ISDEV 变量在vite文件中定义
	isDev: IS_DEV && process.env.NODE_ENV === 'development'
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
