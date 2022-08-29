import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useRequest } from 'ahooks'
import { Department, Gender, IStaff, Occupation } from '@/types'
import { GENDER_OPTIONS } from '@/constants'
import { OCCUPATION_OPTIONS, DEPARTMENT_OPTIONS } from '@/constants/staff'
import { EngineCmpProps } from '@/pages/visual/types'
import { EngineEmployeeProps } from '@/pages/visual/types/attr'
import { fetchStaffList } from '@/apis/v2/staff'

const Employee = (props: EngineCmpProps): JSX.Element => {
	const { values } = props
	const { page, pageSize, keyword } = values as EngineEmployeeProps

	const [params, setParams] = useState({
		page,
		page_size: pageSize,
		keyword
	})

	useEffect(() => {
		setParams({
			page,
			page_size: pageSize,
			keyword
		})
	}, [page, pageSize, keyword])

	const { data, loading } = useRequest(() => fetchStaffList(params), {
		refreshDeps: [params]
	})

	const columns: ColumnsType<IStaff> = [
		{
			key: 'name',
			title: '名称',
			dataIndex: 'name'
		},
		{
			key: 'occupation',
			title: '职业',
			dataIndex: 'occupation',
			ellipsis: true,
			render: (val: Occupation) => {
				const occupationLabel = OCCUPATION_OPTIONS.find(o => o.value == val)?.label || ''
				return occupationLabel
			}
		},
		{
			key: 'department',
			title: '部门',
			dataIndex: 'department',
			ellipsis: true,
			render: (val: Department) => {
				const departmentLabel = DEPARTMENT_OPTIONS.find(o => o.value == val)?.label || ''
				return departmentLabel
			}
		},
		{
			key: 'gender',
			title: '性别',
			dataIndex: 'gender',
			render: (val: Gender) => {
				const genderLabel = GENDER_OPTIONS.find(g => g.value === val)?.label || ''
				return genderLabel
			}
		},

		{
			key: 'resignationTime',
			title: '离职时间',
			dataIndex: 'resignationTime',
			ellipsis: true
		},
		// {
		// 	key: 'leave',
		// 	title: '状态',
		// 	dataIndex: 'leave'
		// },
		{
			key: 'id',
			title: '操作',
			dataIndex: 'id',
			render: (id: string) => {
				return (
					<span>gaga</span>
					// <Space>
					// 	<Button size='small' onClick={() => onUpdate(id)}>
					// 		更新
					// 	</Button>
					// 	<Popconfirm title='确定删除？' onConfirm={() => delStaff(id)}>
					// 		<Button size='small' loading={deletingStaffId === id}>
					// 			删除
					// 		</Button>
					// 	</Popconfirm>
					// </Space>
				)
			}
		}
	]

	return (
		<Table
			columns={columns}
			loading={loading}
			dataSource={data?.data?.list || []}
			rowKey='id'
			pagination={false}
		/>
	)
}

export default Employee
