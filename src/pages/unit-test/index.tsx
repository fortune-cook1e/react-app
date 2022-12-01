import { useRequest } from 'ahooks'

// import { fetchStaffList } from '@/apis/staff'

const UnitTest = (): JSX.Element => {
  // const { data } = useRequest(fetchStaffList, {
  //   onSuccess() {
  //     console.log('scuc')
  //   }
  // })

  return (
    <div>
      {/* {data?.data?.list.map(d => {
        return <div key={d.id}>{d.name}</div>
      })} */}
      <p>haha</p>
    </div>
  )
}

export default UnitTest
