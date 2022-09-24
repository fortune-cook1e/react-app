import React from 'react'
import { Row, Col, Spin } from 'antd'
import Resignation from './modules/Resignation'
import OccupationDistribution from './modules/OccupationDistribution'
import Department from './modules/DepartmentDistribution'
import styles from './index.module.less'
import { fetchStaffList } from '@/apis/staff'
import { useRequest } from 'ahooks'

const Dashboard = (): JSX.Element => {
	const { loading, data } = useRequest(() => fetchStaffList({ page: 1, page_size: 999 }))

	return (
		<div className={styles.dashboard}>
			<Row gutter={[8, 8]}>
				<Col span={12}>
					<Spin spinning={loading}>
						<Resignation staffData={data?.data.list} />
					</Spin>
				</Col>
				<Col span={12}>
					<Spin spinning={loading}>
						<OccupationDistribution staffData={data?.data.list} />
					</Spin>
				</Col>
				<Col span={12}>
					<Department staffData={data?.data.list} />
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard
