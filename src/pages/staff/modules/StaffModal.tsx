import React from 'react'
import { Modal, Form, Input, Select, DatePicker, Spin } from 'antd'
import { Department, Gender, IStaff, Occupation } from '@/types'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { updateStaff, createStaff, fetchStaffInfo } from '@/apis/staff'
import { GENDER_OPTIONS, QUERY_KEYS } from '@/constants'
import moment, { Moment } from 'moment'
import { DEPARTMENT_OPTIONS, OCCUPATION_OPTIONS } from '@/constants/staff'
const { RangePicker } = DatePicker

const { Item } = Form

interface Props {
	staffId?: string
	visible: boolean
	onClose: () => void
	onSuccess?: () => void
}

interface StaffForm {
	id: string
	name: string
	gender: Gender
	occupation: string
	department: string
	time: Moment[]
	company: string
}

const DATE_FORMAT = 'YYYY-MM-DD'

const StaffModal = ({ staffId = '', visible = false, onClose, onSuccess }: Props): JSX.Element => {
	const queryClient = useQueryClient()
	const [form] = Form.useForm<StaffForm>()

	const { isFetching: staffInfoLoading } = useQuery<IStaff>(
		['staff', staffId],
		() => fetchStaffInfo(staffId),
		{
			enabled: !!staffId,
			onSuccess: data => {
				const { company, id, entryTime, resignationTime, occupation, gender, name, department } =
					data
				form.setFieldsValue({
					id,
					name,
					gender,
					company,
					department,
					time: [moment(entryTime), moment(resignationTime)],
					occupation
				})
			}
		}
	)

	const onResetAll = () => {
		queryClient.invalidateQueries(QUERY_KEYS.staff.list)
		onClose()
		onSuccess?.()
		form.resetFields()
	}

	const { isLoading: addLoading, mutate: addStaff } = useMutation(
		(newStaff: Omit<IStaff, 'id'>) => createStaff(newStaff),
		{
			onSuccess: () => onResetAll()
		}
	)

	const { isLoading: updateLoading, mutate: update } = useMutation(
		(staff: IStaff) => updateStaff(staff),
		{
			onSuccess: () => onResetAll()
		}
	)

	const onOk = async () => {
		const values = await form.validateFields()
		const {
			name,
			gender,
			occupation,
			time: [entryTime, resignationTime],
			company,
			department
		} = values

		const isUpdateMode = !!staffId

		const params = {
			id: staffId,
			name,
			gender,
			company,
			occupation,
			department,
			entryTime: entryTime.format(DATE_FORMAT),
			resignationTime: resignationTime.format(DATE_FORMAT)
		}
		if (isUpdateMode) {
			update(params)
		} else {
			const { id, ...rest } = params
			addStaff(rest)
		}
	}

	const onCancel = () => {
		onClose()
		form.resetFields()
	}

	return (
		<Modal
			width={600}
			title={staffId ? '编辑信息' : '新增员工'}
			visible={visible}
			onCancel={onCancel}
			onOk={onOk}
			confirmLoading={addLoading || updateLoading}
		>
			<Spin spinning={staffInfoLoading}>
				<Form
					form={form}
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 20 }}
					initialValues={{
						gender: Gender.Male,
						occupation: Occupation.FrontEnd,
						department: Department.CDP
					}}
				>
					<Item label='id' name='id' hidden />
					<Item label='名称' name='name' rules={[{ required: true, message: '请输入名称' }]}>
						<Input style={{ width: '400px' }} placeholder='请输入名称' />
					</Item>
					<Item label='性别' name='gender' rules={[{ required: true, message: '请选择性别' }]}>
						<Select style={{ width: '400px' }} options={GENDER_OPTIONS} placeholder='请选择性别' />
					</Item>
					<Item label='职业' name='occupation' rules={[{ required: true, message: '请输入职位' }]}>
						<Select
							style={{ width: '400px' }}
							placeholder='请输入职位'
							options={OCCUPATION_OPTIONS}
						/>
					</Item>
					<Item
						label='时间'
						name='time'
						rules={[{ required: true, message: '请输入入职离职时间' }]}
					>
						<RangePicker
							style={{ width: '400px' }}
							placeholder={['入职时间', '离职时间']}
							format={DATE_FORMAT}
						/>
					</Item>
					<Item
						label='部门'
						name='department'
						rules={[{ required: true, message: '请输入公司名称' }]}
					>
						<Select style={{ width: 400 }} placeholder='请选择部门' options={DEPARTMENT_OPTIONS} />
					</Item>
					<Item label='公司' name='company' rules={[{ required: true, message: '请输入公司名称' }]}>
						<Input style={{ width: '400px' }} placeholder='请输入公司名' />
					</Item>
				</Form>
			</Spin>
		</Modal>
	)
}

export default StaffModal
