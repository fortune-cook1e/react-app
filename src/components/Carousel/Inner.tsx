import classnames from 'classnames'
import React, { FC, useState, Children, useRef, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { debounce } from 'throttle-debounce'

import { initialState } from './default'
import Dots from './Dots'
import Track from './Track'
import { CarouselProps, InnerCarouselState } from './types'
import {
  getOnDemandLazySlides as utilGetOnDemandLazySlides,
  extractObject,
  initializedState,
  getHeight,
  canGoNext,
  slideHandler as utilSlideHandler,
  changeSlide as utilChangeSlide,
  keyHandler as utilKeyHandler,
  swipeStart as utilSwiperStart,
  swipeMove as utilSwiperMove,
  swipeEnd as utilSwiperEnd,
  getPreClones,
  getPostClones,
  getTrackLeft,
  getTrackCSS
} from './utils'

const callbackTimers: any = []
let debouncedResize: any = null
let animationEndCallback: any = null
let autoplayTimer: any = null
let asNavForIndex: number | null = null

const Inner: FC<CarouselProps> = props => {
  const [state, setState] = useState<InnerCarouselState>({
    ...initialState,
    currentSlide: props.initialSlide,
    slideCount: Children.count(props.children)
  })

  const [clickable, setClickable] = useState<boolean>(false)

  const listRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLElement>(null)

  const adaptHeight = () => {
    if (props.adaptiveHeight && listRef.current) {
      const elem = listRef.current.querySelector(`[data-index="${state.currentSlide}"]`)
      listRef.current.style.height = getHeight(elem) + 'px'
    }
  }

  const updateState = (spec: any, setTrackStyle: boolean, callback: () => void) => {
    const updatedState: any = initializedState(spec)
    spec = { ...spec, ...updatedState, slideIndex: updatedState.currentSlide }
    const targetLeft = getTrackLeft(spec)
    spec = { ...spec, left: targetLeft }
    const trackStyle = getTrackCSS(spec)
    if (
      setTrackStyle ||
      React.Children.count(props.children) !== React.Children.count(spec.children)
    ) {
      updatedState['trackStyle'] = trackStyle
    }

    setState(s => ({
      ...s,
      ...updatedState
    }))
    callback()
  }

  useEffect(() => {
    const spec = { listRef: listRef.current, trackRef: trackRef.current, ...props }
    updateState(spec, true, () => {
      adaptHeight()
      props.autoplay && autoPlay('playing')
    })
  }, [])

  // 监听window变化
  const onWindowResized = (setTrackStyle: boolean) => {
    if (debouncedResize) debouncedResize.cancel()
    debouncedResize = debounce(50, () => resizeWindow(setTrackStyle))
    debouncedResize()
  }

  const resizeWindow = (setTrackStyle = true) => {
    const isTrackMounted = trackRef.current
    // prevent warning: setting state on unmounted component (server side rendering)
    if (!isTrackMounted) return
    const spec = {
      listRef,
      trackRef,
      ...props,
      ...state
    }
    updateState(spec, setTrackStyle, () => {
      if (props.autoplay) autoPlay('update')
      else pause('paused')
    })
    // animating state should be cleared while resizing, otherwise autoplay stops working
    setState(s => ({
      ...s,
      animating: false
    }))
    clearTimeout(animationEndCallback)
    // delete animationEndCallback
    animationEndCallback = null
  }

  const checkImagesLoad = () => {
    const images =
      (listRef.current &&
        listRef.current.querySelectorAll &&
        listRef.current.querySelectorAll('.slick-slide img')) ||
      []
    const imagesCount = images.length
    let loadedCount = 0
    Array.prototype.forEach.call(images, image => {
      const handler = () => ++loadedCount && loadedCount >= imagesCount && onWindowResized(true)
      if (!image.onclick) {
        image.onclick = () => image.parentNode.focus()
      } else {
        const prevClickHandler = image.onclick
        image.onclick = e => {
          prevClickHandler(e)
          image.parentNode.focus()
        }
      }
      if (!image.onload) {
        if (props.lazyLoad) {
          image.onload = () => {
            adaptHeight()
            callbackTimers.push(setTimeout(onWindowResized, props.speed))
          }
        } else {
          image.onload = handler
          image.onerror = () => {
            handler()
          }
        }
      }
    })
  }

  const slideHandler = (index: number, dontAnimate = false): any => {
    const { asNavFor, beforeChange, onLazyLoad, speed, afterChange } = props
    // capture currentslide before state is updated
    const currentSlide = state.currentSlide
    const { state: slideHandlerState, nextState } = utilSlideHandler({
      index,
      ...props,
      ...state,
      trackRef,
      useCSS: props.useCSS && !dontAnimate
    })
    if (!state) return
    const slidesToLoad = state.lazyLoadedList.filter(
      (value: string) => state.lazyLoadedList.indexOf(value) < 0
    )
    onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad)
    if (!props.waitForAnimate && animationEndCallback) {
      clearTimeout(animationEndCallback)
      animationEndCallback = null
    }
    setState(state)
    if (asNavFor && asNavForIndex !== index) {
      asNavForIndex = index
      ;(asNavFor as any).innerSlider.slideHandler(index)
    }
    if (!nextState) return
    animationEndCallback = setTimeout(() => {
      const { animating, ...firstBatch } = nextState
      setState(firstBatch)
      callbackTimers.push(setTimeout(() => setState(s => ({ ...s, animating })), 10))
      animationEndCallback = null
    }, speed)
  }

  const changeSlide = (options, dontAnimate = false) => {
    const spec = { ...props, ...state }
    const targetSlide = utilChangeSlide(spec, options)
    if (targetSlide !== 0 && !targetSlide) return
    if (dontAnimate === true) {
      slideHandler(targetSlide, dontAnimate)
    } else {
      slideHandler(targetSlide)
    }
    props.autoplay && autoPlay('update')
    if (props.focusOnSelect && listRef.current) {
      const nodes = listRef.current.querySelectorAll('.slick-current')
      nodes[0] && nodes[0].focus()
    }
  }

  const className = classnames('slick-slider', props.className, {
    'slick-vertical': props.vertical,
    'slick-initialized': true
  })

  const clickHandler = (e: MouseEvent) => {
    if (clickable === false) {
      e.stopPropagation()
      e.preventDefault()
    }
    setClickable(true)
  }

  const keyHandler = e => {
    const dir = utilKeyHandler(e, props.accessibility, props.rtl)
    dir !== '' && changeSlide({ message: dir })
  }
  const selectHandler = options => {
    changeSlide(options)
  }

  const disableBodyScroll = () => {
    const preventDefault = e => {
      e = e || window.event
      if (e.preventDefault) e.preventDefault()
      e.returnValue = false
    }
    window.ontouchmove = preventDefault
  }
  const enableBodyScroll = () => {
    window.ontouchmove = null
  }
  const swipeStart = e => {
    if (props.verticalSwiping) {
      disableBodyScroll()
    }
    const state = utilSwiperStart(e, props.swipe, props.draggable)
    state !== '' && setState(state)
  }
  const swipeMove = e => {
    const newState = utilSwiperMove(e, {
      ...props,
      ...state,
      trackRef,
      listRef,
      slideIndex: state.currentSlide
    })
    if (!newState) return
    if (newState['swiping']) {
      setClickable(false)
    }
    setState(s => ({
      ...s,
      ...newState
    }))
  }
  const swipeEnd = e => {
    const newState = utilSwiperEnd(e, {
      ...props,
      ...state,
      trackRef,
      listRef,
      slideIndex: state.currentSlide
    })
    if (!newState) return
    const triggerSlideHandler = newState['triggerSlideHandler']
    delete newState['triggerSlideHandler']
    setState(newState)
    if (triggerSlideHandler === undefined) return
    slideHandler(triggerSlideHandler)
    if (props.verticalSwiping) {
      enableBodyScroll()
    }
  }

  const touchEnd = e => {
    swipeEnd(e)
    setClickable(true)
  }
  const slickPrev = () => {
    callbackTimers.push(setTimeout(() => changeSlide({ message: 'previous' }), 0))
  }
  const clickNext = () => {
    callbackTimers.push(setTimeout(() => changeSlide({ message: 'next' }), 0))
  }
  const slickGoTo = (slide, dontAnimate = false) => {
    slide = Number(slide)
    if (isNaN(slide)) return ''
    callbackTimers.push(
      setTimeout(
        () =>
          changeSlide(
            {
              message: 'index',
              index: slide,
              currentSlide: state.currentSlide
            },
            dontAnimate
          ),
        0
      )
    )
  }

  const play = () => {
    let nextIndex
    if (props.rtl) {
      nextIndex = state.currentSlide - props.slidesToScroll
    } else {
      if (canGoNext({ ...props, ...state })) {
        nextIndex = state.currentSlide + props.slidesToScroll
      } else {
        return false
      }
    }

    slideHandler(nextIndex)
  }

  const autoPlay = (playType: string) => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer)
    }
    const autoplaying = state.autoplaying
    if (playType === 'update') {
      if (autoplaying === 'hovered' || autoplaying === 'focused' || autoplaying === 'paused') {
        return
      }
    } else if (playType === 'leave') {
      if (autoplaying === 'paused' || autoplaying === 'focused') {
        return
      }
    } else if (playType === 'blur') {
      if (autoplaying === 'paused' || autoplaying === 'hovered') {
        return
      }
    }
    autoplayTimer = setInterval(play, props.autoplaySpeed + 50)
    setState(s => ({
      ...s,
      autoplaying: 'playing'
    }))
  }

  const pause = pauseType => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer)
      autoplayTimer = null
    }
    const autoplaying = state.autoplaying
    if (pauseType === 'paused') {
      setState(s => ({
        ...s,
        autoplaying: 'paused'
      }))
    } else if (pauseType === 'focused') {
      if (autoplaying === 'hovered' || autoplaying === 'playing') {
        setState(s => ({
          ...s,
          autoplaying: 'focused'
        }))
      }
    } else {
      // pauseType  is 'hovered'
      if (autoplaying === 'playing') {
        setState(s => ({
          ...s,
          autoplaying: 'hovered'
        }))
      }
    }
  }

  const onTrackOver = () => props.autoplay && pause('hovered')
  const onTrackLeave = () => props.autoplay && state.autoplaying === 'hovered' && autoPlay('leave')

  const onDotsOver = () => props.autoplay && pause('hovered')
  const onDotsLeave = () => props.autoplay && state.autoplaying === 'hovered' && autoPlay('leave')

  const innerSliderProps = {
    className: className,
    dir: 'ltr',
    style: props.style
  }

  const spec = { ...props, ...state }
  let trackProps = extractObject(spec, [
    'fade',
    'cssEase',
    'speed',
    'infinite',
    'centerMode',
    'focusOnSelect',
    'currentSlide',
    'lazyLoad',
    'lazyLoadedList',
    'rtl',
    'slideWidth',
    'slideHeight',
    'listHeight',
    'vertical',
    'slidesToShow',
    'slidesToScroll',
    'slideCount',
    'trackStyle',
    'variableWidth',
    'unslick',
    'centerPadding',
    'targetSlide',
    'useCSS'
  ])
  const { pauseOnHover } = props
  trackProps = {
    ...trackProps,
    onMouseEnter: pauseOnHover ? onTrackOver : null,
    onMouseLeave: pauseOnHover ? onTrackLeave : null,
    onMouseOver: pauseOnHover ? onTrackOver : null
  }

  let centerPaddingStyle = null

  if (props.vertical === false) {
    if (props.centerMode === true) {
      centerPaddingStyle = {
        padding: '0px ' + props.centerPadding
      }
    }
  } else {
    if (props.centerMode === true) {
      centerPaddingStyle = {
        padding: props.centerPadding + ' 0px'
      }
    }
  }
  const listStyle = { ...centerPaddingStyle }

  const touchMove = props.touchMove

  const listProps = {
    className: 'slick-list',
    style: listStyle,
    onClick: clickHandler,
    onMouseDown: touchMove ? swipeStart : null,
    onMouseMove: state.dragging && touchMove ? swipeMove : null,
    onMouseUp: touchMove ? swipeEnd : null,
    onMouseLeave: state.dragging && touchMove ? swipeEnd : null,
    onTouchStart: touchMove ? swipeStart : null,
    onTouchMove: state.dragging && touchMove ? swipeMove : null,
    onTouchEnd: touchMove ? touchEnd : null,
    onTouchCancel: state.dragging && touchMove ? swipeEnd : null,
    onKeyDown: props.accessibility ? keyHandler : null
  }

  let dots
  if (props.dots === true && (state?.slideCount as any) >= props.slidesToShow) {
    let dotProps = extractObject(spec, [
      'dotsClass',
      'slideCount',
      'slidesToShow',
      'currentSlide',
      'slidesToScroll',
      'clickHandler',
      'children',
      'customPaging',
      'infinite',
      'appendDots'
    ])
    const { pauseOnDotsHover } = props
    dotProps = {
      ...dotProps,
      clickHandler: changeSlide,
      onMouseEnter: pauseOnDotsHover ? onDotsLeave : null,
      onMouseOver: pauseOnDotsHover ? onDotsOver : null,
      onMouseLeave: pauseOnDotsHover ? onDotsLeave : null
    }
    dots = <Dots {...dotProps} />
  }

  return (
    <div {...innerSliderProps}>
      <div ref={listRef} {...listProps}>
        <Track ref={trackRef} {...trackProps}>
          {props.children}
        </Track>
      </div>
      {dots}
    </div>
  )
}

export default Inner
