import React from 'react'
import { Row, Col, Spin } from 'antd'
import Resignation from './modules/Resignation'
import OccupationDistribution from './modules/OccupationDistribution'
import Department from './modules/DepartmentDistribution'
import styles from './index.module.less'
import { useQuery } from 'react-query'
import { QUERY_KEYS } from '@/constants'
import { fetchStaffList } from '@/apis/staff'

const Dashboard = (): JSX.Element => {
	const {
		isFetching,
		data: staffData = [],
		isError
	} = useQuery([QUERY_KEYS.staff.list], async () => {
		const { list = [] } = await fetchStaffList({
			page: 1,
			page_size: 999
		})
		return list
	})

	if (isError) {
		return <span>error..</span>
	}

	return (
		<div className={styles.dashboard}>
			<Row gutter={[8, 8]}>
				<Col span={12}>
					<Spin spinning={isFetching}>
						<Resignation staffData={staffData} />
					</Spin>
				</Col>
				<Col span={12}>
					<Spin spinning={isFetching}>
						<OccupationDistribution staffData={staffData} />
					</Spin>
				</Col>
				<Col span={12}>
					<Department staffData={staffData} />
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard
