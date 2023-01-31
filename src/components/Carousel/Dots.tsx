import classnames from 'classnames'
import React, { FC } from 'react'

import { DotsProps } from './types'
import { clamp } from './utils'

const getDotCount = (spec: any) => {
  let dots

  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll)
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1
  }

  return dots
}

const Dots: FC<DotsProps> = props => {
  const {
    onMouseEnter,
    onMouseOver,
    onMouseLeave,
    infinite,
    slidesToScroll,
    slidesToShow,
    slideCount,
    currentSlide
  } = props
  const dotCount = getDotCount({
    slideCount,
    slidesToScroll,
    slidesToShow,
    infinite
  })

  const clickHandler = (options: any, e: any) => {
    // In Autoplay the focus stays on clicked button even after transition
    // to next slide. That only goes away by click somewhere outside
    e.preventDefault()
    props.clickHandler(options)
  }

  const mouseEvents = { onMouseEnter, onMouseOver, onMouseLeave }
  let dots: any[] = []
  for (let i = 0; i < dotCount; i++) {
    const _rightBound = (i + 1) * slidesToScroll - 1
    const rightBound = infinite ? _rightBound : clamp(_rightBound, 0, slideCount - 1)
    const _leftBound = rightBound - (slidesToScroll - 1)
    const leftBound = infinite ? _leftBound : clamp(_leftBound, 0, slideCount - 1)

    const className = classnames({
      'slick-active': infinite
        ? currentSlide >= leftBound && currentSlide <= rightBound
        : currentSlide === leftBound
    })

    const dotOptions = {
      message: 'dots',
      index: i,
      slidesToScroll,
      currentSlide
    }

    const onClick = clickHandler.bind(this, dotOptions)
    dots = dots.concat(
      <li key={i} className={className}>
        {React.cloneElement(props.customPaging(i), { onClick })}
      </li>
    )
  }

  return React.cloneElement(props.appendDots(dots), {
    className: props.dotsClass,
    ...mouseEvents
  })
}

export default Dots
