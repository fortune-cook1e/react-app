import { CSSProperties, ReactNode, MouseEventHandler, Component } from 'react'
export interface CustomArrowProps {
  className?: string
  style?: CSSProperties
  onClick?: MouseEventHandler<any>
  currentSlide?: number
  slideCount?: number
}

export interface ResponsiveObject {
  breakpoint: number
  settings: 'unslick' | CarouselProps
}

export type SwipeDirection = 'left' | 'down' | 'right' | 'up' | string

export type LazyLoadTypes = 'ondemand' | 'progressive'

declare class Slider extends Component<CarouselProps, never> {
  slickNext(): void
  slickPause(): void
  slickPlay(): void
  slickPrev(): void
  slickGoTo(slideNumber: number, dontAnimate?: boolean): void
}

export interface CarouselProps {
  accessibility: boolean
  adaptiveHeight: boolean
  afterChange(currentSlide: number): void
  appendDots(dots: ReactNode): JSX.Element
  arrows: boolean
  asNavFor: Slider
  autoplaySpeed: number
  autoplay: boolean
  beforeChange(currentSlide: number, nextSlide: number): void
  centerMode: boolean
  centerPadding: string
  className: string
  cssEase: string
  customPaging(index: number): JSX.Element
  dotsClass: string
  dots: boolean
  draggable: boolean
  easing: string
  edgeFriction: number
  fade: boolean
  focusOnSelect: boolean
  infinite: boolean
  initialSlide: number
  lazyLoad: LazyLoadTypes
  nextArrow: JSX.Element
  onEdge(swipeDirection: SwipeDirection): void
  onInit(): void
  onLazyLoad(slidesToLoad: number[]): void
  onReInit(): void
  onSwipe(swipeDirection: SwipeDirection): void
  pauseOnDotsHover: boolean
  pauseOnFocus: boolean
  pauseOnHover: boolean
  prevArrow: JSX.Element
  responsive: ResponsiveObject[]
  rows: number
  rtl: boolean
  slide: string
  slidesPerRow: number
  slidesToScroll: number
  slidesToShow: number
  speed: number
  swipeToSlide: boolean
  swipe: boolean
  style?: CSSProperties
  swipeEvent(swipeDirection: SwipeDirection): void
  touchMove: boolean
  touchThreshold: number
  useCSS: boolean
  useTransform: boolean
  variableWidth: boolean
  vertical: boolean
  verticalSwiping: boolean
  waitForAnimate: boolean
  unslick?: boolean
  children: ReactNode
}

export interface CommonProps {
  onMouseEnter?: () => void
  onMouseOver?: () => void
  onMouseLeave?: () => void
}

export interface TrackProps extends CommonProps {
  trackStyle?: CSSProperties
}

export interface DotsProps extends CommonProps {
  clickHandler: (options: any) => void
  infinite: boolean
  slidesToScroll: number
  slidesToShow: number
  slideCount: number
  currentSlide: number
  customPaging: (index: number) => any
  dotsClass: string
  appendDots: (dots: any) => any
}

export interface InnerCarouselState {
  animating: boolean
  autoplaying?: string | null
  currentDirection: number
  currentLeft?: number | null
  currentSlide?: number | null
  direction: number
  dragging: boolean
  edgeDragged: boolean
  initialized: boolean
  lazyLoadedList: any
  listHeight?: number | null
  listWidth?: number | null
  scrolling: boolean
  slideCount?: number | null
  slideHeight?: number | null
  slideWidth?: number | null
  swipeLeft?: number | null
  swiped: boolean // used by swipeEvent. differentites between touch and swipe.
  swiping: boolean
  touchObject: { startX: number; startY: number; curX: number; curY: number }
  trackStyle: CSSProperties
  trackWidth: number
  targetSlide: number
}
