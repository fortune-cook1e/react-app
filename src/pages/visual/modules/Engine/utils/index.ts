import { v4 as uuidv4 } from 'uuid'

// 获取随机字符串
export const getUniqueId = (): string => {
	return uuidv4()
}
