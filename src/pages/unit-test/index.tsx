import { Select, Divider } from 'antd'
import { useState } from 'react'

import EventState from './components/EventState'
import Mock from './components/Mock'
import UserForm from './components/UserForm'
import Visible from './components/Visible'

const COMPONENT_LIST = [
  {
    label: 'FormTest',
    value: 'FormTest'
  }
]

const UnitTest = (): JSX.Element => {
  const [cmp, setCmp] = useState<string>(COMPONENT_LIST[0].value)

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
      <Divider />
      <UserForm />
    </div>
  )
}

export default UnitTest
