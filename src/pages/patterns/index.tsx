import { Select } from 'antd'
import { FC, lazy, useMemo, useState, Suspense } from 'react'

import { PATTERN_LIST } from './config'

const Patterns: FC = () => {
  const [pattern, SetPattern] = useState<string>(PATTERN_LIST[0].value)

  const CurrentRenderPatternCmp: any = useMemo(() => {
    if (!pattern) return null
    return lazy(() => import(`./components/${pattern}/index.tsx`))
  }, [pattern])

  return (
    <section>
      <h1> this is patters</h1>
      <div>
        Select Patterns：
        <Select value={pattern} style={{ width: '200px' }} onChange={p => SetPattern(p)}>
          {PATTERN_LIST.map(p => {
            return (
              <Select.Option key={p.value} value={p.value}>
                {p.label}
              </Select.Option>
            )
          })}
        </Select>
      </div>
      <Suspense fallback='loading'>
        <CurrentRenderPatternCmp />
      </Suspense>
    </section>
  )
}

export default Patterns
