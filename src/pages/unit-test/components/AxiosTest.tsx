import { useRequest } from 'ahooks'
import { useEffect } from 'react'

import { fetchStaffList } from '@/apis/staff'
export const _fetchStaffList = (): Promise<any> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          list: [
            {
              id: '123',
              name: '123'
            }
          ]
        }
      })
    }, 1000)
  })

const AxiosTest = (): JSX.Element => {
  const { data, loading } = useRequest(_fetchStaffList, {
    onSuccess(data) {
      console.log({ data })
    }
  })

  return (
    <div>
      <h1>this is axios test</h1>

      {loading && <span>loading</span>}

      {data?.data.list.map((d: any) => {
        return <div key={d.id}>{d.name}</div>
      })}
    </div>
  )
}

export default AxiosTest
