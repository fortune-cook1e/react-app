import { ReactNode } from 'react'

export interface CarouselSetting {
  speed?: number
  autoplay?: boolean
  loop?: boolean
  children: ReactNode
}
