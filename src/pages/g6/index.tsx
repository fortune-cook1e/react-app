import G6, { Graph } from '@antv/g6'
import { FC, useEffect, useRef, useState } from 'react'

import { data } from './data'

const G6Demo = (): JSX.Element => {
  const g6Ref = useRef<HTMLDivElement>(null)
  const [graph, setGraph] = useState<Graph | null>(null)

  useEffect(() => {
    if (!graph && g6Ref.current) {
      const _graph = new G6.Graph({
        container: g6Ref.current as HTMLDivElement,
        width: 1200,
        height: 800,
        fitView: true,
        modes: {
          default: ['drag-canvas', 'drag-node', 'zoom-canvas']
        },
        layout: {
          type: 'dagre',
          rankdir: 'LR',
          align: 'DL',
          nodesepFunc: () => 1,
          ranksepFunc: () => 1
        },
        defaultNode: {
          size: [30, 20],
          type: 'rect',
          style: {
            lineWidth: 2,
            stroke: '#5B8FF9',
            fill: '#C6E5FF'
          }
        },
        defaultEdge: {
          size: 1,
          color: '#e2e2e2',
          style: {
            endArrow: {
              path: 'M 0,0 L 8,4 L 8,-4 Z',
              fill: '#e2e2e2'
            }
          }
        }
      })
      setGraph(_graph)
      _graph && _graph.data(data)
      _graph && _graph.render()
    }
  }, [])

  return <div ref={g6Ref} />
}

export default G6Demo
