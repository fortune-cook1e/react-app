import React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IStaff } from '@/types/staff'
import { useQuery } from 'react-query'
import { fetchStaffList } from '@/apis/staff'

const Page = (): JSX.Element => {
	const { isLoading, data } = useQuery('staff-list', () =>
		fetchStaffList({ page: 1, page_size: 10 })
	)

	const columns: ColumnsType<IStaff> = [
		{
			key: 'id',
			title: 'Id',
			dataIndex: 'id'
		},
		{
			key: 'name',
			title: '名称',
			dataIndex: 'name'
		},
		{
			key: 'occupation',
			title: '职业',
			dataIndex: 'occupation'
		},
		{
			key: 'gender',
			title: '性别',
			dataIndex: 'gender'
		},
		{
			key: 'entryTime',
			title: '入职时间',
			dataIndex: 'entryTime'
		},
		{
			key: 'resignationTime',
			title: '离职时间',
			dataIndex: 'resignationTime'
		},
		{
			key: 'leave',
			title: '是否在职',
			dataIndex: 'leave'
		}
	]

	return (
		<div>
			<Table columns={columns} loading={isLoading} dataSource={data} rowKey='id' />
		</div>
	)
}

export default Page
