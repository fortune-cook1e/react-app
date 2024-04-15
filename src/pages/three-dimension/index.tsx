import { Select } from 'antd'
import { lazy, useMemo, useState, Suspense } from 'react'

const { Option } = Select

const LIST = ['OriginThree', 'ThreeFiber']

const ThreeDimension = (): JSX.Element => {
  const [cmp, setCmp] = useState<string | undefined>(LIST[1])

  const CurrentCmp: any = useMemo(() => {
    if (!cmp) return null
    return lazy(() => import(`./components/${cmp}/index.tsx`))
  }, [cmp])

  return (
    <div>
      <h1>three Dimension</h1>
      <Select style={{ width: '200px' }} value={cmp} onChange={c => setCmp(c)}>
        {LIST.map(c => (
          <Option key={c} value={c}>
            {c}
          </Option>
        ))}
      </Select>
      <Suspense fallback='loading...'>
        <CurrentCmp />
      </Suspense>
    </div>
  )
}

export default ThreeDimension