import { Select } from 'antd'
import React, { useEffect } from 'react'
import useMockData from './useMockData'
import localforage from 'localforage'
import AnimationPage from '@/components/AnimationPage'

const IndexDbPage = (): JSX.Element => {
	const { data } = useMockData()

	useEffect(() => {
		return () => {
			console.log('index db page unmount')
			localforage.clear()
		}
	}, [])

	return (
		<AnimationPage>
			<div>
				this is page
				<Select style={{ width: '200px' }}>
					{data.map(d => {
						return <Select.Option key={d.name}>{d.name}</Select.Option>
					})}
				</Select>
			</div>
		</AnimationPage>
	)
}

export default IndexDbPage
