import randomWords from 'random-words'
import { NodeLevelNodeConfiguration } from 'react-d3-graph'

import CustomNode from './CustomNode'
import SimpleNode from './SimpleNode'

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
  links: [],
  focusedNodeId: 'nodeIdToTriggerZoomAnimation'
}

PERSON_DATA.nodes = new Array(3).fill(0).map((item, index) => ({
  id: index.toString(),
  name: randomWords(5)[0],
  channel: randomWords(5)[0],
  meta: {
    name: randomWords(5)[0],
    avatar: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/yued/ai-mp/assets/default_head.png',
    channel: '邀请注册',
    isRoot: index === 0
  },

  viewGenerator: () => <SimpleNode />

  // size: {
  //   width: 1560,
  //   height: 1220
  // }
  // viewGenerator: index !== 0 ? (node: DataNode) => <CustomNode node={node} /> : null
  // x: index === 0 ? 0 : Math.random() * 500,
  // y: index === 0 ? 0 : Math.random() * 500
}))

const firstNode = PERSON_DATA.nodes[0]

// PERSON_DATA.focusedNodeId = firstNode.id

PERSON_DATA.links = PERSON_DATA.nodes.slice(1).map((n: DataNode, index: number) => {
  return {
    source: firstNode.id,
    target: n.id,
    type: 'STRAIGHT'
    // strokeDasharray: 4 // 连接线条的dash(虚线)
  }
})

export const GRAPH_CONFIG = {
  automaticRearrangeAfterDropNode: false,
  collapsible: true,
  directed: true,
  focusAnimationDuration: 0.75,
  focusZoom: 0.75,
  highlightDegree: 5,
  highlightOpacity: 0.2,
  linkHighlightBehavior: true,
  maxZoom: 12,
  minZoom: 0.05,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: false,
  staticGraphWithDragAndDrop: false,
  width: 1400,
  height: 800,
  d3: {
    alphaTarget: 0.5,
    gravity: -2000
  },
  link: {
    renderLabel: true,
    labelProperty(node) {
      return '渠道注册'
    },
    color: '#5C8EFA',
    fontColor: 'black',
    fontSize: 8,
    fontWeight: 'normal',
    highlightColor: 'rgba(92, 142, 250, 1)',
    highlightFontSize: 8,
    highlightFontWeight: 'normal',
    mouseCursor: 'pointer',
    opacity: 1,
    semanticStrokeWidth: true,
    strokeWidth: 1,
    markerHeight: 6,
    markerWidth: 6,
    type: 'CURVE_SMOOTH'
  }
}
