import { Select } from 'antd'
import { FC, useMemo, useState, lazy, Suspense } from 'react'
const { Option } = Select

const LIST = ['Echarts', 'ReactD3Graph', 'D3ForceGraph']

const Charts = (): JSX.Element => {
  const [cmp, setCmp] = useState<string>(LIST[1])

  const CurrentCmp: any = useMemo(() => {
    if (!cmp) return null
    return lazy(() => import(`./components/${cmp}/index.tsx`))
  }, [cmp])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h1>Please select charts</h1>
      <Select value={cmp} onChange={v => setCmp(v)} style={{ width: '200px' }}>
        {LIST.map(l => (
          <Option key={l}>{l}</Option>
        ))}
      </Select>
      <Suspense fallback='loading...'>
        <CurrentCmp />
      </Suspense>
    </div>
  )
}

export default Charts
