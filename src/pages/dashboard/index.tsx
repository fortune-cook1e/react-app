import { useRequest } from 'ahooks'
import { Row, Col, Spin } from 'antd'
import React from 'react'

import styles from './index.module.less'
import Department from './modules/DepartmentDistribution'
import OccupationDistribution from './modules/OccupationDistribution'
import Resignation from './modules/Resignation'

import { fetchStaffList } from '@/apis/staff'

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
