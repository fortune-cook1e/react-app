import { Button } from 'antd'
import { useEffect, useState } from 'react'

const Dashboard = (): JSX.Element => {
  const [text, setText] = useState<string>('text')

  const changeState = () => {
    setText('text222')
  }

  return (
    <div>
      <Button onClick={changeState}>click m</Button>
      <h1>this is dashboard page</h1>
      <h2>{text}</h2>
    </div>
  )
}

export default Dashboard
