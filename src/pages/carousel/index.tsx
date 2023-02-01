import { Divider } from 'antd'
import { CSSProperties } from 'react'

import DiyCarousel from '@/components/Carousel'
const Carousel = (): JSX.Element => {
  const divStyle: CSSProperties = {
    height: '400px',
    background: '#364d79'
  }

  const imgStyle: CSSProperties = {
    width: '100%',
    height: '100%'
  }

  const imgs = [
    'https://images.unsplash.com/photo-1562886877-aaaa5c0b3225?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk5Mjc0fQ',
    'https://images.unsplash.com/photo-1572652963245-bd7fda887078?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk5Mjc0fQ',
    'https://images.unsplash.com/photo-1572656934803-d2162b2e98bf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk5Mjc0fQ'
  ]

  return (
    <div>
      this is carousel
      <Divider />
      <DiyCarousel autoplay={false}>
        <div style={divStyle}>
          <img src={imgs[0]} alt='' style={imgStyle} />
        </div>
        <div style={divStyle}>
          <img src={imgs[1]} alt='' style={imgStyle} />
        </div>
        <div style={divStyle}>
          <img src={imgs[2]} alt='' style={imgStyle} />
        </div>
      </DiyCarousel>
      <Divider />
    </div>
  )
}

export default Carousel
