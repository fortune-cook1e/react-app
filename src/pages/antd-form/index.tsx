import React, { useEffect, useState } from 'react'

import { Form, Input, Select, Switch, Button } from 'antd'

const { Item, useForm } = Form
const { Option } = Select

const AntdForm: React.FC = () => {
	const [form] = useForm()
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		height: '',
		isFemale: false
	})

	const handleFinish = (values: any) => {
		console.log({ values })
	}

	const handleReset = () => {
		form.resetFields()
	}

	const onFill = () => {
		form.setFieldsValue({
			username: '',
			password: '',
			height: '',
			isFemale: false
		})
	}

	useEffect(() => {
		form.setFieldsValue({
			username: 'gagaga',
			password: 'hahaha',
			height: 180,
			isFemale: false,
			hobbies: 'haha'
		})
	}, [])

	useEffect(() => {
		const result = form.getFieldsValue()

		console.log({ result })
	}, [form.getFieldsValue()])

	return (
		<div>
			<h1>this is antd form,</h1>
			<Form name='demo' form={form} onFinish={handleFinish}>
				<Item label='username' name='username' rules={[{ required: true }]}>
					<Input placeholder='input your name' />
				</Item>

				<Item label='password' name='password'>
					<Input placeholder='input your passwird' />
				</Item>

				<Item label='height' name='height'>
					<Select placeholder='select yout'>
						<Option value={170}>170</Option>
						<Option value={180}>180</Option>
						<Option value={190}>190</Option>
					</Select>
				</Item>

				<Item label='Sex' name='isFemale' valuePropName='checked'>
					<Switch />
				</Item>

				{form.getFieldValue('isFemale') && (
					<Item label='hobbies' name='hobbies'>
						<Input placeholder='input your hobbies' />
					</Item>
				)}

				<Item
					noStyle
					shouldUpdate={(prevValues, currentValues) => {
						return prevValues.isFemale !== currentValues.isFemale
					}}
				>
					{({ getFieldValue }) =>
						getFieldValue('isFemale') === true ? (
							<Item label='hobbies' name='hobbies'>
								<Input placeholder='input your hobbies' />
							</Item>
						) : null
					}
				</Item>

				<Item>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
					<Button htmlType='button' onClick={handleReset}>
						Reset
					</Button>
					<Button type='link' htmlType='button' onClick={onFill}>
						Fill form
					</Button>
				</Item>
			</Form>
		</div>
	)
}

export default AntdForm
