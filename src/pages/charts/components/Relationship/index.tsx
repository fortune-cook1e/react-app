import { useRequest } from 'ahooks'
import { Button, Spin } from 'antd'
import randomWords from 'random-words'
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { GraphV2 } from 'react-d3-force-graph'

import PersonNode from './components/PersonNode'
import baseGraphConfig from './graphConfig'
import { RelationshipNodeData, RelationLinkData, GraphData, RelationEnum } from './types'
import { mockResponseDataFunc } from './utils'

const GRAPH_ID = 'graph-id'

// react-d3-graph 需要d3 版本 ^5.5
const Relationship: FC = () => {
  const [updateKey, setUpdateKey] = useState(0)
  const [graphData, setGraphData] = useState<GraphData>({
    nodes: [],
    links: [],
    focusedNodeId: ''
  })

  const [graphConfig, setGraphConfig] = useState<any>()

  const containerRef = useRef<HTMLDivElement>(null)

  const { loading } = useRequest(() => mockResponseDataFunc(), {
    onSuccess(result) {
      if (!result || !containerRef.current) return
      const { width, height } = containerRef.current.getBoundingClientRect()

      setGraphConfig({
        id: GRAPH_ID,
        config: {
          ...baseGraphConfig,
          width,
          height
        },
        data: {
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
          }))
          // focusedNodeId: result.nodes[0].id
        }
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
      <div style={{ width: '100%', height: '100%' }} ref={containerRef}>
        <Spin spinning={loading}>{graphConfig && <GraphV2 {...graphConfig} />}</Spin>
      </div>
    </div>
  )
}

export default Relationship
