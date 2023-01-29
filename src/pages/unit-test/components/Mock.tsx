import { useRequest } from 'ahooks'

import { fetchStaffList } from '@/apis/staff'

const Mock = (): JSX.Element => {
  const { data, loading, run: fetchStaffListRunner } = useRequest(fetchStaffList, { manual: true })

  return (
    <div>
      <h1>this is Mock Test</h1>
      <button onClick={() => fetchStaffListRunner({ page: 1, page_size: 10 })}>fetch</button>
      {loading && <span>loading</span>}
      <div>
        <h3>async list</h3>
        {data?.data.list.map((l: any) => (
          <div key={l.id}>{l.name}</div>
        ))}
      </div>
    </div>
  )
}

export default Mock
