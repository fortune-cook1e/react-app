import { Button } from 'antd'
import React, { useEffect, useState } from 'react'

const Dashboard = (): JSX.Element => {
  const [state1, setState1] = useState<number>(0)
  const [state2, setState2] = useState<number>(0)

  useEffect(() => {
    console.log('changed..')
  }, [state1, state2])

  const changeState = () => {
    setState1(2)
    setState2(2)
  }

  return (
    <div>
      <Button onClick={changeState}>click m</Button>
      <h1>this is dashboard page</h1>
    </div>
  )
}

export default Dashboard
