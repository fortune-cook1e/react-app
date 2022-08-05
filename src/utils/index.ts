import { AnyOptions, MockDataType } from '@/types'

/**
 * 获取 storage 缓存数据
 * @param {*} type 类型   local：localStorage   session：sessionStorage
 * @param {*} name 缓存数据name名
 * @returns
 */
export const getStorage = (type: 'session' | 'local', name: string): string | null => {
	const storageType: string = type || 'local'
	let result = null
	if (storageType === 'local') {
		result = localStorage.getItem(name) ? localStorage.getItem(name) : ''
	} else if (storageType === 'session') {
		result = sessionStorage.getItem(name) ? sessionStorage.getItem(name) : ''
	}
	return result
}

/**
 * 设置 storage 缓存数据
 * @param {*} type 类型   local：localStorage   session：sessionStorage
 * @param {*} name 缓存数据name名
 * @param {*} content 缓存的数据内容
 */
export const setStorage = (type: 'local' | 'session', name: string, content: string): void => {
	const storageType: string = type || 'local'
	let data: string = content
	if (typeof data === 'object') {
		data = JSON.stringify(content)
	}
	if (storageType === 'local') {
		localStorage.setItem(name, data)
	} else if (storageType === 'session') {
		sessionStorage.setItem(name, data)
	}
}

/**
 * @description 在树结构中找到符合条件的节点链
 * @date 2022-06-16 23:27:24
 * @return {T[]}
 */
export const getItemInChildrenMap = <T extends { children?: T[] }>(
	list: T[],
	comparor: (item: T) => boolean
): T[] => {
	const arr: T[] = []
	function dfs(node: T): T | null {
		if (comparor(node)) return node
		if (!node.children || !node.children.length) return null
		for (let i = 0; i < node.children.length; i += 1) {
			const item = node.children[i]
			const itemFather = dfs(item)
			if (itemFather) {
				arr.push(item)
				return itemFather
			}
		}
		return null
	}
	dfs({ children: [...list] } as T)
	return arr
}

// 生成范围内随机数
export const randomNum = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1)) + min

/**
 * 生成随机字符串
 * @param {number} len
 * @returns
 */
export const randomString = (len?: number): string => {
	const length: number = len || 32
	const $chars =
		'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	const maxPos = $chars.length
	let pwd = ''
	for (let i = 0; i < length; i++) {
		pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
	}
	return pwd
}

// 生成随机数据
export const mockData = (
	dataType: Record<string, MockDataType>,
	limit = 10
): AnyOptions[] | null => {
	if (!dataType) return null
	const keys = Object.keys(dataType)
	const list: AnyOptions[] = []
	for (let i = 0; i < limit; i++) {
		const data: AnyOptions = {
			id: i
		}
		for (let j = 0; j < keys.length; j++) {
			switch (dataType[keys[j]]) {
				case MockDataType.Number:
					data[keys[j]] = randomNum(0, 100)
					break
				case MockDataType.String:
					data[keys[j]] = randomString()
					break
				case MockDataType.Boolean:
					data[keys[j]] = randomNum(0, 1) === 1
					break
				default:
					data[keys[j]] = randomString()
			}
		}
		list.push(data)
	}
	return list
}
