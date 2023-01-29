import { useState } from 'react'

const EventState = (): JSX.Element => {
  const [text, setText] = useState<string>('event')

  const changeText = (s: string) => {
    setText(s)
  }

  return (
    <div>
      <h1>This is Event State</h1>
      <button onClick={() => changeText('state')}>event state button</button>
      <span>{text}</span>
    </div>
  )
}

export default EventState
