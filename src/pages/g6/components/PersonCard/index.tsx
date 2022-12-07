import G6, { GraphOptions } from '@antv/g6'
import { Group, Rect, Text, Circle, Image, createNodeFromReact } from '@antv/g6-react-node'
import { FC } from 'react'

import { DataNode } from '../../data'

const AVATAR_IMG =
  'https://2g-filebox-daemon-test.oss-cn-shenzhen.aliyuncs.com/14%2FAICARD_PUBLIC%2Ffangzhiadmin_test%2Fgfqjd%2FuserAvatar%2F88e155de5b9adf1db0c6d353be2fe825.jpg'

interface Props {
  cfg: DataNode
}

const PersonCard: FC<Props> = ({ cfg }) => {
  const { meta } = cfg
  const { name = '', avatar = '', channel } = meta
  console.log({ name })
  return (
    <Group draggable>
      <Rect
        zIndex={5}
        style={{
          position: 'absolute',
          x: 10,
          y: 10,
          fill: 'rgba(255, 190, 24, 1)',
          // padding: [20]
          // radius: [4]
          width: 100,
          height: 30
          // next: 'inline',
          // justifyContent: 'center'
          // margin: [0, 0, -10, 0]
        }}
      >
        <Text zIndex={5} style={{ fill: '#fff', margin: [0, 'auto'] }}>
          {channel}
        </Text>
      </Rect>
      <Rect
        style={{
          position: 'absolute',
          x: 0,
          y: 0,
          width: 88,
          height: 88,
          radius: [44],
          fill: '#fff',
          stroke: 'rgba(255, 190, 24, 1)',
          cursor: 'pointer',
          lineWidth: '3'
          // justifyContent: 'center',
        }}
        zIndex={4}
        draggable
      >
        {/* <Image
          draggable
          style={{
            img: AVATAR_IMG,
            width: 88,
            height: 88
          }}
        /> */}
      </Rect>

      <Rect
        style={{
          radius: [13],
          fill: '#fff',
          padding: [2, 12],
          shadowColor: '#FFF1DA',
          next: 'inline',
          shadowBlur: 8,
          justifyContent: 'center',
          margin: [3, 'auto'],
          marginTop: 30,
          marginLeft: 30
        }}
      >
        <Text style={{ fill: 'rgba(255, 190, 24, 1)', marginTop: 30, marginLeft: 30 }}>{name}</Text>
      </Rect>
    </Group>
  )
}

export default PersonCard
