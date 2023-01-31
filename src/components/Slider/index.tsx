'use strict'

import json2mq from 'json2mq'
import React from 'react'

import { defaultProps } from './default'
import { InnerSlider } from './InnerSlider'
import { canUseDOM } from './utils/innerSliderUtils'
import './index.css'

export default class Slider extends React.Component {
  constructor(props) {
    super(props)
  }

  innerSliderRefHandler = ref => (this.innerSlider = ref)

  slickPrev = () => this.innerSlider.slickPrev()

  slickNext = () => this.innerSlider.slickNext()

  slickGoTo = (slide, dontAnimate = false) => this.innerSlider.slickGoTo(slide, dontAnimate)

  slickPause = () => this.innerSlider.pause('paused')

  slickPlay = () => this.innerSlider.autoPlay('play')

  render() {
    const settings = { ...defaultProps, ...this.props }

    // makes sure that children is an array, even when there is only 1 child
    let children = React.Children.toArray(this.props.children)

    // Children may contain false or null, so we should filter them
    // children may also contain string filled with spaces (in certain cases where we use jsx strings)
    children = children.filter(child => {
      if (typeof child === 'string') {
        return !!child.trim()
      }
      return !!child
    })

    const newChildren = []
    let currentWidth = null
    for (let i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
      const newSlide = []
      for (let j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
        const row = []
        for (let k = j; k < j + settings.slidesPerRow; k += 1) {
          if (settings.variableWidth && children[k].props.style) {
            currentWidth = children[k].props.style.width
          }
          if (k >= children.length) break
          row.push(
            React.cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: `${100 / settings.slidesPerRow}%`,
                display: 'inline-block'
              }
            })
          )
        }
        newSlide.push(<div key={10 * i + j}>{row}</div>)
      }
      newChildren.push(<div key={i}>{newSlide}</div>)
    }

    return (
      <InnerSlider style={this.props.style} ref={this.innerSliderRefHandler} {...settings}>
        {newChildren}
      </InnerSlider>
    )
  }
}
