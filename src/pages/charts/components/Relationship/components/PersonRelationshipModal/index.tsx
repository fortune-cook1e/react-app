import { useRequest } from 'ahooks'
import { Modal, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { FC, useEffect, useState } from 'react'

import { randomString } from '@/utils'

interface Props {
  cstId: string
  visible: boolean
  onCancel: () => void
}

type RelationData = {
  name: string
  role: string
  relationship: string
}

type PagerRes = {
  page: number
  page_size: number
  total_rows: number
}

const generateData = ({
  page,
  pageSize,
  total
}: {
  page: number
  pageSize: number
  total: number
}): Promise<{ list: RelationData[]; pager: PagerRes }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = new Array(total).fill(0).map(i => ({
        id: randomString(),
        name: randomString(6),
        role: randomString(9),
        relationship: randomString(20)
      }))
      resolve({
        list: result,
        pager: {
          page,
          page_size: pageSize,
          total_rows: total
        }
      })
    }, 1000)
  })
}

const PersonRelationshipModal: FC<Props> = ({ cstId, visible, onCancel }) => {
  const [pager, setPager] = useState({
    page: 1,
    page_size: 10
  })
  const [total, setTotal] = useState<number>(0)

  const {
    loading,
    data,
    run: getMoreRelationships
  } = useRequest(() => generateData({ page: pager.page, pageSize: pager.page_size, total: 20 }), {
    manual: true,
    onSuccess(result) {
      if (!result) return
      setTotal(+result.pager.total_rows)
    },
    refreshDeps: [pager, cstId]
  })

  useEffect(() => {
    if (visible) {
      getMoreRelationships()
    }
  }, [visible])

  const columns: ColumnsType<RelationData> = [
    {
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '角色',
      dataIndex: 'role'
    },
    {
      title: '关系',
      dataIndex: 'relationship'
    }
  ]

  return (
    <Modal open={visible} onCancel={onCancel} footer={null} mask={false} closable={false}>
      <section>
        <h3>
          更多关系<span>(128)</span>
        </h3>

        <Table
          columns={columns}
          loading={loading}
          dataSource={data?.list}
          rowKey='id'
          size='small'
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
      </section>
    </Modal>
  )
}

export default PersonRelationshipModal
