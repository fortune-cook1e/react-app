import localforage from 'localforage'

const globalConfig = {
	salt: 'react-app',
	indexedDbBaseName: 'my-react-app-database',
	indexedDbStoreName: 'reactApp',
	indexedDbVersion: 1,
	isDev: import?.meta?.env?.VITE_APP_ENV === 'development' || process.env.NODE_ENV === 'development',
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
