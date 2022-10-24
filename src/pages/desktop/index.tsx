import { Row, Col } from 'antd'
import React from 'react'

import DesktopNotification from './components/DesktopNotification'

const Page = (): JSX.Element => {
  return (
    <section>
      <h1>this is desktop page</h1>
      <Row>
        <Col span={24}>
          <DesktopNotification />
        </Col>
      </Row>
    </section>
  )
}

export default Page
