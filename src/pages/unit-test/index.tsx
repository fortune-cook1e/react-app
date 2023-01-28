import { useRequest } from 'ahooks'
import { Select, Divider } from 'antd'
import { useState } from 'react'

import AxiosTest from './components/AxiosTest'
import ButtonTest from './components/ButtonTest'
import FormTest from './components/FormTest'
import NestedCmp from './components/NestedCmp'
import UserTestForm from './components/UserTestForm'

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

      <ButtonTest />
      <Divider />
      <FormTest />
      <Divider />
      <NestedCmp title='user' />
      <Divider />
      <UserTestForm onSubmitSuccess={() => console.log('ok')} />
      <Divider />
      <AxiosTest />
    </div>
  )
}

export default UnitTest
