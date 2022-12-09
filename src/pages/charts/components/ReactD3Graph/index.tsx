import { useUpdate } from 'ahooks'
import { Button } from 'antd'
import randomWords from 'random-words'
import { FC, useEffect, useState } from 'react'
import { Graph, GraphConfiguration } from 'react-d3-graph'

import CustomNode from './CustomNode'
import { PERSON_DATA, GRAPH_CONFIG } from './data'

// the graph configuration, just override the ones you need

// TIP: react-d3-graph 必须要用 d3@^5.5.0版本
const ReactD3Graph: FC = () => {
  const update = useUpdate()
  const [updateKey, setUpdateKey] = useState(0)

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      update()
    }, 4)
  }, [])

  console.log('redner..')

  const myConfig: Partial<GraphConfiguration<any, any>> | undefined = {
    width: 1400,
    height: 800,
    automaticRearrangeAfterDropNode: false, // 拖拽节点时 其他节点跟着移动
    staticGraph: false, // 是否为静态节点，如果是静态节点 node中需要有x y坐标
    collapsible: false, // 点击是否可以折叠节点
    directed: true, // 是否为有向图
    focusZoom: 3,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: false, // 节点hover时的行为是否开启
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    highlightDegree: 5,
    d3: {
      alphaTarget: 0.5,
      gravity: -4000
    },
    node: {
      renderLabel: false
    },
    link: {
      renderLabel: false,
      // labelProperty(node) {},
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
      strokeWidth: 2,
      // markerHeight: 6,
      // markerWidth: 6,
      type: 'CURVE_SMOOTH'
    }
  }

  const words = randomWords(5)
  const firstWord = words[0]
  const linkwords = words.slice(1)

  const data: any = {}

  data.nodes = words.map(w => {
    return {
      id: w
    }
  })

  data.links = linkwords.map(w => {
    return {
      source: firstWord,
      target: w
    }
  })

  return (
    <div style={{ width: '100%', height: '100%' }} key={updateKey}>
      <h2>this is D3 demo</h2>
      <div>
        <Button onClick={() => setUpdateKey(k => ++k)}>refresh</Button>
      </div>
      <Graph id='graph-id' data={PERSON_DATA} config={myConfig} />
    </div>
  )
}

export default ReactD3Graph
