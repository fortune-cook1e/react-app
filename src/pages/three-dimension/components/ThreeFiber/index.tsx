import { Select } from 'antd'
import { lazy, useMemo, useState, Suspense } from 'react'

const { Option } = Select
const LIST = ['BasicDemo', 'PerfectDemo']

const ThreeFiber = (): JSX.Element => {
  const [cmp, setCmp] = useState<string>(LIST[1])

  const CurrentCmp: any = useMemo(() => {
    return lazy(() => import(`./components/${cmp}/index.tsx`))
  }, [cmp])

  const renderCmp = () => {
    if (!cmp) return null
    return (
      <Suspense fallback='loading...'>
        <CurrentCmp />
      </Suspense>
    )
  }

  return (
    <div>
      <h3>this is three fiber</h3>
      <Select style={{ width: '200px' }} value={cmp} onChange={c => setCmp(c)}>
        {LIST.map(c => (
          <Option key={c} value={c}>
            {c}
          </Option>
        ))}
      </Select>
      {renderCmp()}
    </div>
  )
}

export default ThreeFiber
