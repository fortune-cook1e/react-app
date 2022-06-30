import { IStaff, Occupation } from '@/types'
import React, { useMemo } from 'react'
import Layout from '../Layout'
import { Chart, Interval, Tooltip, Axis, Coordinate } from 'bizcharts'
import { OCCUPATION_OPTIONS } from '@/constants/staff'

interface StaffPieChartData {
	count: number
	occupation: string
}

interface Props {
	staffData: IStaff[]
}

const OccupationDistribution = ({ staffData = [] }: Props): JSX.Element => {
	const staffPieChartData = useMemo(() => {
		if (!staffData.length) return []
		return staffData.reduce((acc: StaffPieChartData[], cur: IStaff) => {
			const hasExistedItem = acc.find(item => item.occupation === cur.occupation)
			if (hasExistedItem) {
				hasExistedItem.count++
			} else {
				acc.push({
					count: 1,
					occupation: cur.occupation
				})
			}
			return acc
		}, [])
	}, [staffData])

	const staffPieChartDataTotal = useMemo(() => {
		return staffPieChartData.reduce((acc, cur) => acc + cur.count, 0)
	}, [staffPieChartData])

	const cols = {
		occupation: {
			formatter: (val: Occupation) => {
				return OCCUPATION_OPTIONS.find(o => o.value === val)?.label || ''
			}
		}
	}

	return (
		<Layout title='职位分布'>
			<Chart
				height={300}
				data={staffPieChartData}
				scale={cols}
				interactions={['element-active']}
				autoFit
			>
				<Coordinate type='theta' radius={0.75} />
				<Tooltip showTitle={false} />
				<Axis visible={false} />
				<Interval
					position='count'
					adjust='stack'
					color='occupation'
					style={{
						lineWidth: 1,
						stroke: '#fff'
					}}
					label={[
						'occupation',
						{
							content: (data: any) => {
								const occupationLabel =
									OCCUPATION_OPTIONS.find(o => o.value === data.occupation)?.label || ''
								const percent = ((data.count / staffPieChartDataTotal) * 100).toFixed(2)
								return `${occupationLabel}: ${percent}%`
							}
						}
					]}
				/>
			</Chart>
		</Layout>
	)
}

export default OccupationDistribution
