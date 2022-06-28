import React from 'react'
import { Row, Col } from 'antd'
import Resignation from './modules/Resignation'
import styles from './index.module.less'

const Dashboard = (): JSX.Element => {
	return (
		<div className={styles.dashboard}>
			<Row gutter={[8, 8]}>
				<Col span={12}>
					<Resignation />
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard
