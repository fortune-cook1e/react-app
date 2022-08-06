import { MockDataType } from '@/types'
import { IMockData } from '@/types/mock'
import { mockData } from '@/utils'

export const fetchMockData = (): Promise<IMockData[]> => {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log('fetch data...')
			const data = mockData(
				{
					name: MockDataType.String,
					age: MockDataType.Number,
					isMale: MockDataType.Boolean
				},
				1000
			)
			resolve(data as IMockData[])
		}, 1500)
	})
}
