import { Button } from 'antd'
import { useState } from 'react'
const PlayGround = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter] = useState(0)

  const changeState = () => {
    setCounter1(prev => prev + 2)
    setCounter(prev => prev + 1)
  }

  console.log('render')

  return (
    <section>
      <h1>this is play ground</h1>
      <div>
        <Button onClick={changeState}>click me </Button>
      </div>
    </section>
  )
}

export default PlayGround
