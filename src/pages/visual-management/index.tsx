import React, { useState } from 'react'
import styles from './index.module.less'
import { fetchVisualList, deleteVisual } from '@/apis/v2/visual'
import { useRequest } from 'ahooks'
import { VisualItem } from '@/types/visual'
import { ColumnsType } from 'antd/es/table'
import { Space, Button, Table, message } from 'antd'
import { useNavigate } from 'react-router-dom'

const VisualManagement = (): JSX.Element => {
	const navigate = useNavigate()

	const [deletingId, setDeletingId] = useState<string>('')

	const {
		loading,
		data,
		run: listRunner
	} = useRequest(
		async () => {
			const data = await fetchVisualList()
			return data.data.list || []
		},
		{
			debounceWait: 300
		}
	)

	const { loading: delLoading, run: delRunner } = useRequest(deleteVisual, {
		manual: true,
		onSuccess() {
			message.success('删除成功')
			listRunner()
			setDeletingId('')
		}
	})

	const viewDetail = (id: string) => {
		navigate(`/visual?id=${id}`)
	}

	const create = () => {
		navigate('/visual')
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
						<Button onClick={() => delRunner(val)} loading={delLoading && deletingId === val}>
							删除
						</Button>
					</Space>
				)
			}
		}
	]

	return (
		<div className={styles.visual}>
			<div className={styles.header}>
				<Space>
					<Button type='primary' onClick={create}>
						创建
					</Button>
				</Space>
			</div>
			<Table rowKey='id' dataSource={data} loading={loading} columns={columns} pagination={false} />
		</div>
	)
}

export default VisualManagement
