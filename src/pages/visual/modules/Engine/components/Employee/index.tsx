import { useRequest } from 'ahooks'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useEffect, useState } from 'react'

import { fetchStaffList } from '@/apis/staff'
import { GENDER_OPTIONS } from '@/constants'
import { OCCUPATION_OPTIONS, DEPARTMENT_OPTIONS } from '@/constants/staff'
import { EngineCmpProps } from '@/pages/visual/types'
import { EngineEmployeeProps } from '@/pages/visual/types/attr'
import { Department, Gender, IStaff, Occupation } from '@/types'

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
    refreshDeps: [params],
    debounceWait: 300
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
    }
  ]

  return (
    <Table
      columns={columns}
      loading={loading}
      dataSource={data?.list || []}
      rowKey='id'
      pagination={false}
    />
  )
}

export default Employee
