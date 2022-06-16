import React, { useState } from 'react'
import { Form, Input, Button, Space, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useAuth } from '@/hooks/useAuth'
import { LoginRequest } from '@/types'
import { useNavigate } from 'react-router-dom'

const { Item } = Form
const { Password } = Input

const Login = (): JSX.Element => {
	const navigate = useNavigate()
	const { login: doLogin, register: doRegister } = useAuth()
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
			await submitFunc(values)
			message.success(`${type === 'login' ? '登录' : '注册'}成功`)
			navigate('/')
		} finally {
			setLoadings({
				login: false,
				register: false
			})
		}
	}

	return (
		<section className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
			<div className='relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
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
							<Button type='primary' onClick={() => submit('login')} loading={loadings.login}>
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
