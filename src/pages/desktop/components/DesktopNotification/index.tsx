import { Button } from 'antd'
import React, { FC } from 'react'

const DesktopNotification: FC = () => {
  const showNotification = () => {
    if (Notification.permission == 'granted') {
      const notification = new Notification('Hi，帅哥：', {
        body: '可以加你为好友吗？'
        // icon: 'mm1.jpg'
      })

      notification.onclick = function () {
        // text.innerHTML = '张小姐已于' + new Date().toTimeString().split(' ')[0] + '加你为好友！'
        notification.close()
      }
    }
  }

  return (
    <section>
      <h1>this is notification</h1>
      <Button onClick={showNotification}>Open the notification</Button>
    </section>
  )
}

export default DesktopNotification
