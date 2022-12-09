import * as d3 from 'd3'
import { forceSimulation } from 'd3-force'
import { useRef } from 'react'

import { MOCK_DATA } from './data'

const D3ForceGraph = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)

  const createChart = () => {}

  return (
    <div>
      <h3> this is d3 force graph</h3>
      <div ref={containerRef} />
    </div>
  )
}

export default D3ForceGraph
