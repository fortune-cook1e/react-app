import { Form, Input, Button } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { Item } = Form

interface IForm {
  username: string
  password: string
}

const UserForm = (): JSX.Element => {
  const navigate = useNavigate()
  const [form] = Form.useForm<IForm>()
  const [count, setCount] = useState<number>(0)

  const onSubmit = async () => {
    const result = await form.validateFields()
    setCount(c => ++c)
  }

  return (
    <div>
      <h1>this is User Form</h1>

      <Form form={form} name='userForm'>
        <Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Username is required!' }]}
        >
          <Input placeholder='Please input username' />
        </Item>
        <Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Password is required!' }]}
        >
          <Input.Password placeholder='Please input password' />
        </Item>
      </Form>

      <div>
        <div>{count}</div>
        <Button onClick={onSubmit}>submit form</Button>
      </div>
    </div>
  )
}

export default UserForm
