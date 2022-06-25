import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { ColumnsType } from 'antd/es/table'
import { Table } from 'antd'
import { Gender, IUser } from '@/types'
import { getUsers } from '@/apis'

const UserManagement = (): JSX.Element => {
	const { isFetching, data } = useQuery('users', getUsers)

	const columns: ColumnsType<IUser> = [
		{
			key: 'id',
			title: 'Id',
			dataIndex: 'id'
		},
		{
			key: 'username',
			title: '用户名',
			dataIndex: 'username'
		},
		{
			key: 'age',
			title: '年龄',
			dataIndex: 'age'
		},
		{
			key: 'gender',
			title: '性别',
			dataIndex: 'gender',
			render: (val: Gender) => (val ? (val === Gender.Male ? '男' : '女') : '-')
		}
	]

	return <Table<IUser> rowKey='id' loading={isFetching} columns={columns} dataSource={data} />
}

export default UserManagement
