import { GraphConfiguration, Graph, NodeWithExtraParameters } from '@yunke/react-d3-graph'
import { useRequest } from 'ahooks'
import { Button, Spin } from 'antd'
import randomWords from 'random-words'
import { FC, useEffect, useMemo, useRef, useState } from 'react'

import PersonNode from './components/PersonNode'
import baseGraphConfig from './graphConfig'
import { RelationshipNodeData, RelationLinkData, GraphData, RelationEnum } from './types'
import { mockResponseDataFunc } from './utils'

// react-d3-graph 需要d3 版本 ^5.5
const Relationship: FC = () => {
  const [updateKey, setUpdateKey] = useState(0)
  const [graphData, setGraphData] = useState<GraphData>({
    nodes: [],
    links: [],
    focusedNodeId: ''
  })

  const containerRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setUpdateKey(k => ++k)
  //   }, 40)
  // }, [])

  const config = useMemo(() => {
    if (!containerRef.current) return
    const { width, height } = containerRef.current.getBoundingClientRect()
    return {
      ...baseGraphConfig,
      width,
      height
    }
  }, [graphData])

  const { loading } = useRequest(() => mockResponseDataFunc(), {
    onSuccess(result) {
      if (!result) return
      setGraphData({
        nodes: result.nodes.map((n, index) => ({
          viewGenerator: (node: any) => (
            <PersonNode node={node as RelationshipNodeData} isRoot={index === 0} />
          ),
          ...n
        })),
        links: result.relationships.map(r => ({
          ...r,
          source: r.startNode,
          target: r.endNode,
          strokeDasharray: r.type === RelationEnum.Role ? 8 : 0
        })),
        focusedNodeId: result.nodes[0].id
      })

      // Todo: 这一句很重要，需要让配置重新生效
      setTimeout(() => {
        setUpdateKey(k => ++k)
        setGraphData(g => ({
          ...g,
          focusedNodeId: g.focusedNodeId
        }))
      }, 400)
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
      <div style={{ width: '100%', height: '100%' }} ref={containerRef}>
        <Spin spinning={loading}>
          <Graph id='graph-id' data={graphData} config={config} />
        </Spin>
      </div>
    </div>
  )
}

export default Relationship
