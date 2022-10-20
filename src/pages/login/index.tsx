import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Form, Input, Button, Space, message } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.less'

import { doRegister, doLogin } from '@/store/slices/user'
import { LoginRequest } from '@/types'

const { Item } = Form
const { Password } = Input

const Login = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form] = Form.useForm<LoginRequest>()
  const [loadings, setLoadings] = useState({
    login: false,
    register: false
  })

  const submit = async (type: 'login' | 'register') => {
    try {
      setLoadings({
        ...loadings,
        [type]: true
      })
      const values = await form.validateFields()
      const submitFunc = type === 'login' ? doLogin : doRegister
      await dispatch(submitFunc(values))
      message.success(`${type === 'login' ? '登录' : '注册'}成功`)
      navigate('/dashboard')
    } catch {
      setLoadings({
        login: false,
        register: false
      })
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Form form={form} labelCol={{ span: 5 }}>
          <Item
            label='账号'
            name='username'
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input placeholder='请输入账号' prefix={<UserOutlined />} />
          </Item>
          <Item
            label='密码'
            name='password'
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Password placeholder='请输入密码' prefix={<LockOutlined />} />
          </Item>
          <Item wrapperCol={{ offset: 5 }}>
            <Space>
              <Button
                htmlType='submit'
                type='primary'
                onClick={() => submit('login')}
                loading={loadings.login}
              >
                登录
              </Button>
              <Button type='primary' onClick={() => submit('register')} loading={loadings.register}>
                注册
              </Button>
            </Space>
          </Item>
        </Form>
      </div>
    </section>
  )
}

export default Login
