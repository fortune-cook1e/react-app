import { useRequest } from 'ahooks'
import { Select, Divider } from 'antd'
import { useState } from 'react'

import EventState from './components/EventState'
import Mock from './components/Mock'
import Visible from './components/Visible'

import { fetchStaffList } from '@/apis/staff'

const COMPONENT_LIST = [
  {
    label: 'FormTest',
    value: 'FormTest'
  }
]

const UnitTest = (): JSX.Element => {
  const [cmp, setCmp] = useState<string>(COMPONENT_LIST[0].value)
  const { data, run, loading } = useRequest(fetchStaffList, {
    manual: true,
    onSuccess() {
      console.log('scuc')
    }
  })

  return (
    <div>
      <Select
        value={cmp}
        onChange={c => setCmp(c)}
        style={{ width: '200px' }}
        options={COMPONENT_LIST}
      />

      <Visible />
      <Divider />
      <EventState />
      <Divider />
      <Mock />
    </div>
  )
}

export default UnitTest
