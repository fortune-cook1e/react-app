import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

const DEV_SOCKET_DOMAIN = 'http://localhost:3001/message'

const WebSocketPage = (): JSX.Element => {
  const [socket, setSocket] = useState<Socket>(io(DEV_SOCKET_DOMAIN))

  useEffect(() => {}, [])

  const sendMessage = () => {
    socket.emit('save', 'gaga')
  }

  return (
    <div>
      <h1>this is web socket page</h1>

      <div>
        <Button onClick={sendMessage}>click me</Button>
      </div>
    </div>
  )
}

export default WebSocketPage
