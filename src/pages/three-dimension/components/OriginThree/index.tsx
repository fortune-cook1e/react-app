import { Row, Col, Select } from 'antd'
import { FC, lazy, useMemo, useState, Suspense } from 'react'

const CmpList = ['CubeDemo', 'LightCubeDemo', 'LineDemo', 'ModelDemo', 'RotateDemo']

const { Option } = Select

const OriginThree: FC = () => {
  const [currentCmp, setCurrentCmp] = useState<string>(CmpList[4])

  const DemoComponent: any = useMemo(() => {
    if (!currentCmp) return null
    const Component = lazy(() => import(`./components/${currentCmp}/index.tsx`))
    return Component
  }, [currentCmp])

  return (
    <div style={{ background: 'lightpink' }}>
      <h2>this origin three</h2>

      <Select style={{ width: '200px' }} value={currentCmp} onChange={c => setCurrentCmp(c)}>
        {CmpList.map(c => (
          <Option key={c}>{c}</Option>
        ))}
      </Select>

      <Row>
        <Col span={24}>
          <Suspense fallback='loading..'>
            <DemoComponent />
          </Suspense>
        </Col>
      </Row>
    </div>
  )
}

export default OriginThree
