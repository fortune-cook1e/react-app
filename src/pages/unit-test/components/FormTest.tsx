import { useRequest } from 'ahooks'
import { Form, Input, Button } from 'antd'
import { useState } from 'react'

const { Item } = Form

import { fetchStaffList } from '@/apis/staff'

const FormTest = (): JSX.Element => {
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { data, run, loading } = useRequest(fetchStaffList, {
    manual: true,
    onSuccess() {
      console.log('scuc')
    }
  })

  return (
    <div>
      <Form>
        <Item label='用户名'>
          <Input placeholder='username' value={name} onChange={e => setName(e.target.value)} />
        </Item>
        <Item label='密码'>
          <Input
            type='password'
            placeholder='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Item>

        <Button
          onClick={() =>
            run({
              page: 1,
              page_size: 10
            })
          }
          loading={loading}
        >
          {loading ? 'loading' : 'click'}
        </Button>
      </Form>

      {data?.data.list.map(i => {
        return (
          <div key={i.id} role='list-item'>
            {i.name}
          </div>
        )
      })}
    </div>
  )
}

export default FormTest
