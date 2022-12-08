import randomWords from 'random-words'
import { FC } from 'react'
import { Graph, GraphConfiguration } from 'react-d3-graph'

import CustomNode from './CustomNode'
import { PERSON_DATA } from './data'

// the graph configuration, just override the ones you need

const D3Demo: FC = () => {
  const myConfig: Partial<GraphConfiguration<any, any>> | undefined = {
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
    width: 1200,
    height: 800,
    // d3: {
    //   alphaTarget: 0.5,
    //   gravity: -250,
    //   linkLength: 10,
    //   linkStrength: 2,
    //   disableLinkForce: false
    // },
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

  const words = randomWords(100)
  const firstWord = words[0]
  const linkwords = words.slice(1)
  console.log({ words })

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
    <div style={{ width: '100%', height: '100%' }}>
      <h2>this is D3 demo</h2>
      <Graph id='graph-id' data={PERSON_DATA} config={myConfig} />
    </div>
  )
}

export default D3Demo
