import { useUpdate } from 'ahooks'
import { Button } from 'antd'
import randomWords from 'random-words'
import { FC, useEffect, useState } from 'react'
import { Graph } from 'react-d3-graph'

import PersonNode from './components/PersonNode'
import personData from './components/PersonNode/person'
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

  const myConfig = {
    width: 1400,
    height: 800,
    automaticRearrangeAfterDropNode: true, // 拖拽节点时 其他节点跟着移动
    staticGraph: false, // 是否为静态节点，如果是静态节点 node中需要有x y坐标
    collapsible: false, // 点击是否可以折叠节点
    directed: true, // 是否为有向图
    // focusZoom: 3,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: false, // 节点hover时的行为是否开启
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    highlightDegree: 5,
    // initialZoom: 0.8,
    d3: {
      alphaTarget: 0.5,
      gravity: -4000
    },
    zoomDisabled: true, // 禁用缩放
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
    // node: {
    //   color: '#d3d3d3',
    //   fontColor: 'black',
    //   fontSize: 12,
    //   fontWeight: 'normal',
    //   highlightColor: 'red',
    //   highlightFontSize: 12,
    //   highlightFontWeight: 'bold',
    //   highlightStrokeColor: 'SAME',
    //   highlightStrokeWidth: 1.5,
    //   labelProperty: 'name',
    //   // labelClass: "person-node-label",
    //   mouseCursor: 'pointer',
    //   opacity: 1,
    //   renderLabel: true,
    //   size: {
    //     width: 700,
    //     height: 900
    //   },
    //   strokeColor: 'none',
    //   strokeWidth: 1.5,
    //   svg: '',
    //   // symbolType: "circle",
    //   viewGenerator: node => <PersonNode person={node} />
    // }
  }

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
