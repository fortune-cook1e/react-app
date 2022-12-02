import { Row, Col } from 'antd'
import { FC } from 'react'

import CubeDemo from './components/CubeDemo'
import LineDemo from './components/LineDemo'
import ModelDemo from './components/ModelDemo'

const OriginThree: FC = () => {
  return (
    <div>
      <h2>this origin three</h2>

      <Row>
        <Col span={24}>
          <CubeDemo />
        </Col>
        <Col span={24}>
          <LineDemo />
        </Col>
        <Col span={24}>
          <ModelDemo />
        </Col>
      </Row>
    </div>
  )
}

export default OriginThree
