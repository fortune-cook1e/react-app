import React, { useEffect, useState } from 'react'
import { Table, Input, Space, Button } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IStaff, PageRequest } from '@/types'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchStaffList, deleteStaff } from '@/apis/staff'
import LayoutContainer from '@/components/common/LayoutContainer'
import styles from './index.module.less'
import StaffModal from './modules/StaffModal'
import { QUERY_KEYS } from '@/constants'

type SearchQuerykey = [string, { pager: PageRequest }]

const Page = (): JSX.Element => {
	const queryClient = useQueryClient()
	const [pager, setPager] = useState<PageRequest>({
		page: 1,
		page_size: 10
	})
	const [total, setTotal] = useState<number>(0)
	const [keyword, setKeyword] = useState<string | undefined>(undefined)
	const [visible, setVisible] = useState<boolean>(false)
	const [updatingStaffId, setUpdatingStaffId] = useState<string | undefined>(undefined)
	const [deletingStaffId, setDeletingStaffId] = useState<string | undefined>(undefined)

	const { isFetching, data, refetch } = useQuery<IStaff[], Error, IStaff[], SearchQuerykey>(
		[QUERY_KEYS.staff.list, { pager }],
		async params => {
			const { queryKey } = params
			const {
				pager: { page, page_size }
			} = queryKey[1]
			const { list = [], pager } = await fetchStaffList({ page, page_size, keyword })
			setTotal(pager.total)
			return list
		}
	)

	const { mutate: delStaff } = useMutation((id: string) => deleteStaff({ id }), {
		onMutate(id: string) {
			setDeletingStaffId(id)
		},
		onSuccess() {
			queryClient.invalidateQueries(QUERY_KEYS.staff.list)
			setDeletingStaffId(undefined)
		}
	})

	const onSearch = () => {
		refetch()
	}

	const onUpdate = (id: string) => {
		setUpdatingStaffId(id)
		setVisible(true)
	}

	const onClose = () => {
		setUpdatingStaffId(undefined)
		setVisible(false)
	}

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
			dataIndex: 'occupation',
			ellipsis: true
		},
		{
			key: 'gender',
			title: '性别',
			dataIndex: 'gender'
		},
		{
			key: 'entryTime',
			title: '入职时间',
			dataIndex: 'entryTime',
			ellipsis: true
		},
		{
			key: 'resignationTime',
			title: '离职时间',
			dataIndex: 'resignationTime',
			ellipsis: true
		},
		{
			key: 'leave',
			title: '状态',
			dataIndex: 'leave'
		},
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
						<Button size='small' loading={deletingStaffId === id} onClick={() => delStaff(id)}>
							删除
						</Button>
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
					loading={isFetching}
					dataSource={data}
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
