import React from 'react'
import { Modal, Form, Input, Select, DatePicker, Spin } from 'antd'
import { Gender, IStaff } from '@/types'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { updateStaff, createStaff, fetchStaffInfo } from '@/apis/staff'
import { GENDER_OPTIONS, QUERY_KEYS } from '@/constants'
import moment, { Moment } from 'moment'
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
				const { company, id, entryTime, resignationTime, occupation, gender, name } = data
				form.setFieldsValue({
					id,
					name,
					gender,
					company,
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
			company
		} = values

		const isUpdateMode = !!staffId

		const params = {
			id: staffId,
			name,
			gender,
			company,
			occupation,
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
				<Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
					<Item label='id' name='id' hidden />
					<Item label='名称' name='name' rules={[{ required: true, message: '请输入名称' }]}>
						<Input style={{ width: '400px' }} placeholder='请输入名称' />
					</Item>
					<Item label='性别' name='gender' rules={[{ required: true, message: '请选择性别' }]}>
						<Select style={{ width: '400px' }} options={GENDER_OPTIONS} placeholder='请选择性别' />
					</Item>
					<Item label='职业' name='occupation' rules={[{ required: true, message: '请输入职位' }]}>
						<Input style={{ width: '400px' }} placeholder='请输入职位' />
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
					<Item label='公司' name='company' rules={[{ required: true, message: '请输入公司名称' }]}>
						<Input style={{ width: '400px' }} placeholder='请输入公司名' />
					</Item>
				</Form>
			</Spin>
		</Modal>
	)
}

export default StaffModal
