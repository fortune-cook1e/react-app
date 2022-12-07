import React from 'react'

import RelationshipGraph from './components/RelationshipGraph'

const Page = (): JSX.Element => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h1>echarts</h1>
      <RelationshipGraph />
    </div>
  )
}

export default Page
