import randomWords from 'random-words'

export interface Personality {
  name?: string
  avatar?: string
  channel?: string
}

export interface DataNode {
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

export const MOCK_DATA: any = {
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
      source: '0',
      target: '15'
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

const personality: Personality = {
  name: randomWords(5)[0],
  avatar: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/yued/ai-mp/assets/default_head.png',
  channel: '邀请注册'
}

MOCK_DATA.nodes = new Array(15).fill(0).map((item, index) => ({
  id: index.toString(),
  name: randomWords(5)[0],
  meta: personality,
  x: index === 0 ? 0 : Math.random() * 500,
  y: index === 0 ? 0 : Math.random() * 500
}))
