import { useRequest } from 'ahooks'
import React from 'react'

import { fetchStaffList } from '@/apis/staff'

const UnitTest = (): JSX.Element => {
  const { data } = useRequest(fetchStaffList, {
    onSuccess() {
      console.log('scuc')
    }
  })

  return (
    <div>
      {data?.data?.list.map(d => {
        return <div key={d.id}>{d.name}</div>
      })}
    </div>
  )
}

export default UnitTest
