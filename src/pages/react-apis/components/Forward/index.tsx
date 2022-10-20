import React, { useRef } from 'react'

import Child from './Child'

type ChildRefHandle = React.ElementRef<typeof Child>

const Forward = (): JSX.Element => {
  const childRef = useRef<ChildRefHandle>(null)

  const click = () => {
    childRef.current?.say()
  }

  return (
    <div>
      this is Forward test
      <button onClick={click}>click me</button>
      <Child ref={childRef} name='child' />
    </div>
  )
}

export default Forward
