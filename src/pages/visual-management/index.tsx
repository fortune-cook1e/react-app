import React from 'react'
import { fetchVisualList } from '@/apis/v2/visual'
import { useRequest } from 'ahooks'
import { VisualItem } from '@/types/visual'
import { ColumnsType } from 'antd/es/table'
import { Space, Button, Table } from 'antd'
import { useNavigate } from 'react-router-dom'

const VisualManagement = (): JSX.Element => {
	const navigate = useNavigate()

	const { loading, data } = useRequest(
		async () => {
			const data = await fetchVisualList()
			return data.data.list || []
		},
		{
			debounceWait: 300
		}
	)

	const viewDetail = (id: string) => {
		navigate(`/visual?id=${id}`)
	}

	const columns: ColumnsType<VisualItem> = [
		{
			title: 'id',
			key: 'id',
			dataIndex: 'id'
		},
		{
			title: '操作',
			key: 'id',
			dataIndex: 'id',
			render(val: string): JSX.Element {
				return (
					<Space>
						<Button onClick={() => viewDetail(val)}>查看详情</Button>
					</Space>
				)
			}
		}
	]

	return (
		<Table rowKey='id' dataSource={data} loading={loading} columns={columns} pagination={false} />
	)
}

export default VisualManagement
