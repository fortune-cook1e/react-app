import { useRequest, useUpdate } from 'ahooks'
import { Button, Spin } from 'antd'
import randomWords from 'random-words'
import { FC, useEffect, useState } from 'react'
import { GraphConfiguration, Graph, NodeWithExtraParameters } from 'react-d3-graph'

import PersonNode from './components/PersonNode'
import { NodeData, RelationLinkData, GraphData } from './types'
import { mockResponseDataFunc } from './utils'

const Relationship: FC = () => {
  const update = useUpdate()
  const [updateKey, setUpdateKey] = useState(0)
  const [graphData, setGraphData] = useState<GraphData>({
    nodes: [],
    links: []
  })

  const config: Partial<GraphConfiguration<NodeData, RelationLinkData>> | undefined = {
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
    node: {
      renderLabel: false,
      size: 1900
      // viewGenerator: node => <PersonNode person={node} />
    },
    link: {
      renderLabel: false,
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
      type: 'CURVE_SMOOTH'
    }
  }

  const { loading } = useRequest(() => mockResponseDataFunc(), {
    onSuccess(result) {
      if (!result) return
      setGraphData({
        nodes: result.nodes.map((n, index) => ({
          viewGenerator: (node: any) => <PersonNode node={node as NodeData} isRoot={index === 0} />,
          ...n
        })),
        links: result.relationships.map(r => ({
          ...r,
          source: r.startNode,
          target: r.endNode
        }))
      })
    }
  })

  return (
    <div style={{ width: '100%', height: '100%' }} key={updateKey}>
      <h2>this is Relationship demo</h2>
      <div>
        <Button type='primary' onClick={() => setUpdateKey(k => ++k)}>
          refresh
        </Button>
      </div>
      <Spin spinning={loading}>
        <Graph id='graph-id' data={graphData} config={config} />
      </Spin>
    </div>
  )
}

export default Relationship
