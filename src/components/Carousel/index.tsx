import { FC, Children, cloneElement } from 'react'

import { defaultProps } from './default'
import Inner from './Inner'
import InnerCarousel from './InnerCarousel'
import { CarouselProps } from './types'

const Carousel: FC<Partial<CarouselProps>> = props => {
  // makes sure that children is an array, even when there is only 1 child
  let children = Children.toArray(props.children)

  // Children may contain false or null, so we should filter them
  // children may also contain string filled with spaces (in certain cases where we use jsx strings)
  children = children.filter(child => {
    if (typeof child === 'string') {
      return !!child.trim()
    }
    return !!child
  })

  const settings = { ...defaultProps, ...props } as CarouselProps

  const newChildren = []
  for (let i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
    const newSlide = []
    for (let j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
      const row = []
      for (let k = j; k < j + settings.slidesPerRow; k += 1) {
        if (k >= children.length) break
        row.push(
          cloneElement(children[k] as any, {
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

  return <Inner {...settings}>{newChildren}</Inner>
}

export default Carousel
