import { useRequest } from 'ahooks'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React from 'react'

import { getUsers } from '@/apis'
import { Gender, IUser } from '@/types'

const UserManagement = (): JSX.Element => {
  const { data, loading } = useRequest(getUsers)

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

  return <Table<IUser> rowKey='id' loading={loading} columns={columns} dataSource={data?.data} />
}

export default UserManagement
