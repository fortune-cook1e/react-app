import { useRequest, useDebounce } from 'ahooks'
import { Table, Input, Space, Button, Popconfirm } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'

import styles from './index.module.less'
import StaffModal from './modules/StaffModal'

import { fetchStaffList, deleteStaff } from '@/apis/staff'
import LayoutContainer from '@/components/common/LayoutContainer'
import { GENDER_OPTIONS } from '@/constants'
import { OCCUPATION_OPTIONS, DEPARTMENT_OPTIONS } from '@/constants/staff'
import { Department, Gender, IStaff, Occupation, PageRequest } from '@/types'

const Page = (): JSX.Element => {
  const [pager, setPager] = useState<PageRequest>({
    page: 1,
    page_size: 10
  })
  const [total, setTotal] = useState<number>(0)
  const [keyword, setKeyword] = useState<string | undefined>(undefined)
  const debouncedKeyword = useDebounce(keyword, { wait: 500 })

  const [visible, setVisible] = useState<boolean>(false)
  const [updatingStaffId, setUpdatingStaffId] = useState<string | undefined>(undefined)
  const [deletingStaffId, setDeletingStaffId] = useState<string | undefined>(undefined)

  const {
    loading,
    data,
    run: getStaffList
  } = useRequest(() => fetchStaffList({ ...pager, keyword: debouncedKeyword }), {
    refreshDeps: [pager, debouncedKeyword]
  })

  const { run: delStaff } = useRequest((id: string) => deleteStaff({ id }), {
    manual: true,
    onSuccess() {
      setDeletingStaffId(undefined)
    }
  })

  const onSearch = () => {
    getStaffList()
  }

  const onUpdate = (id: string) => {
    setUpdatingStaffId(id)
    setVisible(true)
  }

  const onClose = () => {
    setUpdatingStaffId(undefined)
    setVisible(false)
    getStaffList()
  }

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
    // {
    // 	key: 'entryTime',
    // 	title: '入职时间',
    // 	dataIndex: 'entryTime',
    // 	ellipsis: true
    // },
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
          <Space>
            <Button size='small' onClick={() => onUpdate(id)}>
              更新
            </Button>
            <Popconfirm title='确定删除？' onConfirm={() => delStaff(id)}>
              <Button size='small' loading={deletingStaffId === id}>
                删除
              </Button>
            </Popconfirm>
          </Space>
        )
      }
    }
  ]

  return (
    <LayoutContainer className={styles.staff}>
      <StaffModal staffId={updatingStaffId} visible={visible} onClose={onClose} />
      <LayoutContainer.Header>
        <div className={styles.tools}>
          <Input
            style={{ width: 200 }}
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder='请输入关键词'
            onPressEnter={onSearch}
            allowClear
          />
          <Space>
            <Button type='primary' onClick={onSearch}>
              搜索
            </Button>
            <Button type='primary' onClick={() => setVisible(true)}>
              新增
            </Button>
          </Space>
        </div>
      </LayoutContainer.Header>
      <LayoutContainer.Content>
        <Table
          columns={columns}
          loading={loading}
          dataSource={data?.data.list}
          rowKey='id'
          pagination={{
            current: pager.page,
            pageSize: pager.page_size,
            total: total,
            onChange: (page: number, pageSize: number) => {
              setPager({
                page,
                page_size: pageSize
              })
            }
          }}
        />
      </LayoutContainer.Content>
    </LayoutContainer>
  )
}

export default Page
