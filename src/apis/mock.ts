import { MockDataType } from '@/types'
import { mockData } from '@/utils'

export const fetchMockData = (): Promise<any> => {
	return new Promise(resolve => {
		setTimeout(() => {
			const data = mockData(
				{
					name: MockDataType.String,
					age: MockDataType.Number,
					isMale: MockDataType.Boolean
				},
				1000
			)
			resolve(data)
		}, 1500)
	})
}
