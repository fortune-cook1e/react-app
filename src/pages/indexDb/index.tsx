import { fetchMockData } from '@/apis/mock'
import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { db } from './db'

const IndexDbPage = (): JSX.Element => {
	const [data, setData] = useState<any[]>([])
	const getMockData = async (): Promise<any> => {
		const data = await fetchMockData()
		setData(data)
		await db.people.bulkAdd(data)
	}

	useEffect(() => {
		getMockData()
	}, [])

	return (
		<div>
			this is page{' '}
			<Select style={{ width: '200px' }}>
				{data.map(d => {
					return <Select.Option key={d.name}>{d.name}</Select.Option>
				})}
			</Select>
		</div>
	)
}

export default IndexDbPage
