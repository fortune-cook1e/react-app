import randomWords from 'random-words'
import { NodeLevelNodeConfiguration } from 'react-d3-graph'

import CustomNode from './CustomNode'

export interface Personality {
  name?: string
  avatar?: string
  channel?: string
  isRoot: boolean
}

export interface DataNode extends NodeLevelNodeConfiguration {
  id: string
  label: string
  meta: Personality
}

export interface Data {
  nodes: DataNode[]
  edges: {
    target: string
    source: string
  }[]
}

export const PERSON_DATA: any = {
  nodes: [],
  links: [
    {
      source: '0',
      target: '1'
    },
    {
      source: '0',
      target: '2'
    },
    {
      source: '0',
      target: '3'
    },
    {
      source: '0',
      target: '4'
    },
    {
      source: '0',
      target: '5'
    },
    {
      source: '0',
      target: '7'
    },
    {
      source: '0',
      target: '8'
    },
    {
      source: '0',
      target: '9'
    },
    {
      source: '0',
      target: '10'
    },
    {
      source: '0',
      target: '11'
    },
    {
      source: '0',
      target: '13'
    },
    {
      source: '0',
      target: '14'
    },

    {
      source: '2',
      target: '3'
    },
    {
      source: '4',
      target: '5'
    },
    {
      source: '4',
      target: '6'
    },
    {
      source: '5',
      target: '6'
    },
    {
      source: '7',
      target: '13'
    },
    {
      source: '8',
      target: '14'
    },
    {
      source: '9',
      target: '10'
    },
    {
      source: '10',
      target: '14'
    },
    {
      source: '10',
      target: '12'
    },
    {
      source: '11',
      target: '14'
    },
    {
      source: '12',
      target: '13'
    }
  ]
}

PERSON_DATA.nodes = new Array(150).fill(0).map((item, index) => ({
  id: index.toString(),
  name: randomWords(5)[0],
  channel: randomWords(5)[0],
  meta: {
    name: randomWords(5)[0],
    avatar: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/yued/ai-mp/assets/default_head.png',
    channel: '邀请注册',
    isRoot: index === 0
  },
  size: 1900,
  viewGenerator: (node: DataNode) => <CustomNode node={node} />
  // x: index === 0 ? 0 : Math.random() * 500,
  // y: index === 0 ? 0 : Math.random() * 500
}))
