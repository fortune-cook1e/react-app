import React, { useMemo } from 'react'
import { Chart, Interval, Tooltip } from 'bizcharts'
import { Spin } from 'antd'
import Layout from '../Layout'
import { useQuery } from 'react-query'
import { QUERY_KEYS } from '@/constants'
import { fetchStaffList } from '@/apis/staff'
import { IStaff } from '@/types'

interface ChartStaffData {
	resignationTime: string
	count: number
	_tm: number
}

const scale = {
	count: {
		alias: '离职人数'
	}
}

const Resignation = (): JSX.Element => {
	const { isFetching, data: staffData = [] } = useQuery([QUERY_KEYS.staff.list], async () => {
		const { list = [] } = await fetchStaffList({
			page: 1,
			page_size: 999
		})
		return list
	})

	const staffChartData: ChartStaffData[] = useMemo(() => {
		if (!staffData.length) return []
		return staffData.reduce((acc: ChartStaffData[], cur: IStaff) => {
			// 根据日期排序并将数据分组
			const { resignationTime } = cur
			const hasExistedItem = acc.find(
				(item: ChartStaffData) => item.resignationTime === resignationTime
			)
			if (hasExistedItem) {
				hasExistedItem.count++
			} else {
				const newItem = {
					resignationTime,
					count: 1,
					_tm: Number(resignationTime.replace(/-/g, ''))
				}
				acc.push(newItem)
			}
			return acc.sort((a, b) => a._tm - b._tm)
		}, [])
	}, [staffData])

	return (
		<Layout title='离职员工'>
			<Spin spinning={isFetching}>
				<Chart height={300} autoFit data={staffChartData} scale={scale}>
					<Interval position='resignationTime*count' />
					<Tooltip shared />
				</Chart>
			</Spin>
		</Layout>
	)
}

export default Resignation
