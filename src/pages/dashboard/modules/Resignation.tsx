import React, { useMemo } from 'react'
import { Chart, Interval, Tooltip } from 'bizcharts'
import Layout from '../Layout'
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

interface Props {
	staffData?: IStaff[]
}

const Resignation = ({ staffData = [] }: Props): JSX.Element => {
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
			<Chart height={300} autoFit data={staffChartData} scale={scale}>
				<Interval
					position='resignationTime*count'
					label={[
						'count',
						val => {
							return {
								content: val
							}
						}
					]}
				/>
				<Tooltip shared />
			</Chart>
		</Layout>
	)
}

export default Resignation
