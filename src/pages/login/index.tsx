import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Space, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useAuth } from '@/hooks/useAuth'
import { LoginRequest } from '@/types'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.less'
import { useQueryClient } from 'react-query'

const { Item } = Form
const { Password } = Input

const Login = (): JSX.Element => {
	const navigate = useNavigate()
	const queryClient = useQueryClient()
	const { login: doLogin, register: doRegister } = useAuth()
	const [form] = Form.useForm<LoginRequest>()
	const [loadings, setLoadings] = useState({
		login: false,
		register: false
	})

	useEffect(() => {
		// FIXBUG: 修复每次cookie失效时 跳转到login页 再登录成功后 之前的请求失败依然处于loading状态
		queryClient.invalidateQueries()
	}, [])

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
