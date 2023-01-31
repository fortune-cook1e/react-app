import classnames from 'classnames'
import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { debounce } from 'throttle-debounce'

import { initialState } from './default'
import Dots from './Dots'
import Track from './Track'
import {
  getOnDemandLazySlides,
  extractObject,
  initializedState,
  getHeight,
  canGoNext,
  slideHandler,
  changeSlide,
  keyHandler,
  swipeStart,
  swipeMove,
  swipeEnd,
  getPreClones,
  getPostClones,
  getTrackLeft,
  getTrackCSS
} from './utils'

export class InnerCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.list = null
    this.track = null
    this.state = {
      ...initialState,
      currentSlide: this.props.initialSlide,
      slideCount: React.Children.count(this.props.children)
    }
    this.callbackTimers = []
    this.clickable = true
    this.debouncedResize = null
  }
  listRefHandler = ref => (this.list = ref)
  trackRefHandler = ref => (this.track = ref)
  adaptHeight = () => {
    if (this.props.adaptiveHeight && this.list) {
      const elem = this.list.querySelector(`[data-index="${this.state.currentSlide}"]`)
      this.list.style.height = getHeight(elem) + 'px'
    }
  }
  componentDidMount = () => {
    const spec = { listRef: this.list, trackRef: this.track, ...this.props }
    this.updateState(spec, true, () => {
      this.adaptHeight()
      this.props.autoplay && this.autoPlay('playing')
    })
    if (this.props.lazyLoad === 'progressive') {
      this.lazyLoadTimer = setInterval(this.progressiveLazyLoad, 1000)
    }
  }

  onWindowResized = setTrackStyle => {
    if (this.debouncedResize) this.debouncedResize.cancel()
    this.debouncedResize = debounce(50, () => this.resizeWindow(setTrackStyle))
    this.debouncedResize()
  }
  resizeWindow = (setTrackStyle = true) => {
    const isTrackMounted = Boolean(this.track && this.track.node)
    // prevent warning: setting state on unmounted component (server side rendering)
    if (!isTrackMounted) return
    const spec = {
      listRef: this.list,
      trackRef: this.track,
      ...this.props,
      ...this.state
    }
    this.updateState(spec, setTrackStyle, () => {
      if (this.props.autoplay) this.autoPlay('update')
      else this.pause('paused')
    })
    // animating state should be cleared while resizing, otherwise autoplay stops working
    this.setState({
      animating: false
    })
    clearTimeout(this.animationEndCallback)
    delete this.animationEndCallback
  }
  updateState = (spec, setTrackStyle, callback) => {
    const updatedState = initializedState(spec)
    spec = { ...spec, ...updatedState, slideIndex: updatedState.currentSlide }
    const targetLeft = getTrackLeft(spec)
    spec = { ...spec, left: targetLeft }
    const trackStyle = getTrackCSS(spec)
    if (
      setTrackStyle ||
      React.Children.count(this.props.children) !== React.Children.count(spec.children)
    ) {
      updatedState['trackStyle'] = trackStyle
    }
    this.setState(updatedState, callback)
  }

  checkImagesLoad = () => {
    const images =
      (this.list && this.list.querySelectorAll && this.list.querySelectorAll('.slick-slide img')) ||
      []
    const imagesCount = images.length
    let loadedCount = 0
    Array.prototype.forEach.call(images, image => {
      const handler = () => ++loadedCount && loadedCount >= imagesCount && this.onWindowResized()
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
        if (this.props.lazyLoad) {
          image.onload = () => {
            this.adaptHeight()
            this.callbackTimers.push(setTimeout(this.onWindowResized, this.props.speed))
          }
        } else {
          image.onload = handler
          image.onerror = () => {
            handler()
            this.props.onLazyLoadError && this.props.onLazyLoadError()
          }
        }
      }
    })
  }
  progressiveLazyLoad = () => {
    const slidesToLoad = []
    const spec = { ...this.props, ...this.state }
    for (
      let index = this.state.currentSlide;
      index < this.state.slideCount + getPostClones(spec);
      index++
    ) {
      if (this.state.lazyLoadedList.indexOf(index) < 0) {
        slidesToLoad.push(index)
        break
      }
    }
    for (let index = this.state.currentSlide - 1; index >= -getPreClones(spec); index--) {
      if (this.state.lazyLoadedList.indexOf(index) < 0) {
        slidesToLoad.push(index)
        break
      }
    }
    if (slidesToLoad.length > 0) {
      this.setState(state => ({
        lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
      }))
      if (this.props.onLazyLoad) {
        this.props.onLazyLoad(slidesToLoad)
      }
    } else {
      if (this.lazyLoadTimer) {
        clearInterval(this.lazyLoadTimer)
        delete this.lazyLoadTimer
      }
    }
  }
  slideHandler = (index, dontAnimate = false) => {
    const { asNavFor, beforeChange, onLazyLoad, speed, afterChange } = this.props
    // capture currentslide before state is updated
    const currentSlide = this.state.currentSlide
    const { state, nextState } = slideHandler({
      index,
      ...this.props,
      ...this.state,
      trackRef: this.track,
      useCSS: this.props.useCSS && !dontAnimate
    })
    if (!state) return
    beforeChange && beforeChange(currentSlide, state.currentSlide)
    const slidesToLoad = state.lazyLoadedList.filter(
      value => this.state.lazyLoadedList.indexOf(value) < 0
    )
    onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad)
    if (!this.props.waitForAnimate && this.animationEndCallback) {
      clearTimeout(this.animationEndCallback)
      afterChange && afterChange(currentSlide)
      delete this.animationEndCallback
    }
    this.setState(state, () => {
      // asNavForIndex check is to avoid recursive calls of slideHandler in waitForAnimate=false mode
      if (asNavFor && this.asNavForIndex !== index) {
        this.asNavForIndex = index
        asNavFor.innerSlider.slideHandler(index)
      }
      if (!nextState) return
      this.animationEndCallback = setTimeout(() => {
        const { animating, ...firstBatch } = nextState
        this.setState(firstBatch, () => {
          this.callbackTimers.push(setTimeout(() => this.setState({ animating }), 10))
          afterChange && afterChange(state.currentSlide)
          delete this.animationEndCallback
        })
      }, speed)
    })
  }
  changeSlide = (options, dontAnimate = false) => {
    const spec = { ...this.props, ...this.state }
    const targetSlide = changeSlide(spec, options)
    if (targetSlide !== 0 && !targetSlide) return
    if (dontAnimate === true) {
      this.slideHandler(targetSlide, dontAnimate)
    } else {
      this.slideHandler(targetSlide)
    }
    this.props.autoplay && this.autoPlay('update')
    if (this.props.focusOnSelect) {
      const nodes = this.list.querySelectorAll('.slick-current')
      nodes[0] && nodes[0].focus()
    }
  }
  clickHandler = e => {
    if (this.clickable === false) {
      e.stopPropagation()
      e.preventDefault()
    }
    this.clickable = true
  }
  keyHandler = e => {
    const dir = keyHandler(e, this.props.accessibility, this.props.rtl)
    dir !== '' && this.changeSlide({ message: dir })
  }
  selectHandler = options => {
    this.changeSlide(options)
  }
  disableBodyScroll = () => {
    const preventDefault = e => {
      e = e || window.event
      if (e.preventDefault) e.preventDefault()
      e.returnValue = false
    }
    window.ontouchmove = preventDefault
  }
  enableBodyScroll = () => {
    window.ontouchmove = null
  }
  swipeStart = e => {
    if (this.props.verticalSwiping) {
      this.disableBodyScroll()
    }
    const state = swipeStart(e, this.props.swipe, this.props.draggable)
    state !== '' && this.setState(state)
  }
  swipeMove = e => {
    const state = swipeMove(e, {
      ...this.props,
      ...this.state,
      trackRef: this.track,
      listRef: this.list,
      slideIndex: this.state.currentSlide
    })
    if (!state) return
    if (state['swiping']) {
      this.clickable = false
    }
    this.setState(state)
  }
  swipeEnd = e => {
    const state = swipeEnd(e, {
      ...this.props,
      ...this.state,
      trackRef: this.track,
      listRef: this.list,
      slideIndex: this.state.currentSlide
    })
    if (!state) return
    const triggerSlideHandler = state['triggerSlideHandler']
    delete state['triggerSlideHandler']
    this.setState(state)
    if (triggerSlideHandler === undefined) return
    this.slideHandler(triggerSlideHandler)
    if (this.props.verticalSwiping) {
      this.enableBodyScroll()
    }
  }
  touchEnd = e => {
    this.swipeEnd(e)
    this.clickable = true
  }
  slickPrev = () => {
    // this and fellow methods are wrapped in setTimeout
    // to make sure initialize setState has happened before
    // any of such methods are called
    this.callbackTimers.push(setTimeout(() => this.changeSlide({ message: 'previous' }), 0))
  }
  slickNext = () => {
    this.callbackTimers.push(setTimeout(() => this.changeSlide({ message: 'next' }), 0))
  }
  slickGoTo = (slide, dontAnimate = false) => {
    slide = Number(slide)
    if (isNaN(slide)) return ''
    this.callbackTimers.push(
      setTimeout(
        () =>
          this.changeSlide(
            {
              message: 'index',
              index: slide,
              currentSlide: this.state.currentSlide
            },
            dontAnimate
          ),
        0
      )
    )
  }
  play = () => {
    let nextIndex
    if (this.props.rtl) {
      nextIndex = this.state.currentSlide - this.props.slidesToScroll
    } else {
      if (canGoNext({ ...this.props, ...this.state })) {
        nextIndex = this.state.currentSlide + this.props.slidesToScroll
      } else {
        return false
      }
    }

    this.slideHandler(nextIndex)
  }

  autoPlay = playType => {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer)
    }
    const autoplaying = this.state.autoplaying
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
    this.autoplayTimer = setInterval(this.play, this.props.autoplaySpeed + 50)
    this.setState({ autoplaying: 'playing' })
  }
  pause = pauseType => {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer)
      this.autoplayTimer = null
    }
    const autoplaying = this.state.autoplaying
    if (pauseType === 'paused') {
      this.setState({ autoplaying: 'paused' })
    } else if (pauseType === 'focused') {
      if (autoplaying === 'hovered' || autoplaying === 'playing') {
        this.setState({ autoplaying: 'focused' })
      }
    } else {
      // pauseType  is 'hovered'
      if (autoplaying === 'playing') {
        this.setState({ autoplaying: 'hovered' })
      }
    }
  }
  onDotsOver = () => this.props.autoplay && this.pause('hovered')
  onDotsLeave = () =>
    this.props.autoplay && this.state.autoplaying === 'hovered' && this.autoPlay('leave')
  onTrackOver = () => this.props.autoplay && this.pause('hovered')
  onTrackLeave = () =>
    this.props.autoplay && this.state.autoplaying === 'hovered' && this.autoPlay('leave')
  onSlideFocus = () => this.props.autoplay && this.pause('focused')
  onSlideBlur = () =>
    this.props.autoplay && this.state.autoplaying === 'focused' && this.autoPlay('blur')

  render = () => {
    const className = classnames('slick-slider', this.props.className, {
      'slick-vertical': this.props.vertical,
      'slick-initialized': true
    })
    const spec = { ...this.props, ...this.state }
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
    const { pauseOnHover } = this.props
    trackProps = {
      ...trackProps,
      onMouseEnter: pauseOnHover ? this.onTrackOver : null,
      onMouseLeave: pauseOnHover ? this.onTrackLeave : null,
      onMouseOver: pauseOnHover ? this.onTrackOver : null,
      focusOnSelect: this.props.focusOnSelect && this.clickable ? this.selectHandler : null
    }

    let dots
    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
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
      const { pauseOnDotsHover } = this.props
      dotProps = {
        ...dotProps,
        clickHandler: this.changeSlide,
        onMouseEnter: pauseOnDotsHover ? this.onDotsLeave : null,
        onMouseOver: pauseOnDotsHover ? this.onDotsOver : null,
        onMouseLeave: pauseOnDotsHover ? this.onDotsLeave : null
      }
      dots = <Dots {...dotProps} />
    }

    let prevArrow, nextArrow
    const arrowProps = extractObject(spec, [
      'infinite',
      'centerMode',
      'currentSlide',
      'slideCount',
      'slidesToShow',
      'prevArrow',
      'nextArrow'
    ])
    arrowProps.clickHandler = this.changeSlide

    let verticalHeightStyle = null

    if (this.props.vertical) {
      verticalHeightStyle = {
        height: this.state.listHeight
      }
    }

    let centerPaddingStyle = null

    if (this.props.vertical === false) {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: '0px ' + this.props.centerPadding
        }
      }
    } else {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: this.props.centerPadding + ' 0px'
        }
      }
    }

    const listStyle = { ...verticalHeightStyle, ...centerPaddingStyle }
    const touchMove = this.props.touchMove
    let listProps = {
      className: 'slick-list',
      style: listStyle,
      onClick: this.clickHandler,
      onMouseDown: touchMove ? this.swipeStart : null,
      onMouseMove: this.state.dragging && touchMove ? this.swipeMove : null,
      onMouseUp: touchMove ? this.swipeEnd : null,
      onMouseLeave: this.state.dragging && touchMove ? this.swipeEnd : null,
      onTouchStart: touchMove ? this.swipeStart : null,
      onTouchMove: this.state.dragging && touchMove ? this.swipeMove : null,
      onTouchEnd: touchMove ? this.touchEnd : null,
      onTouchCancel: this.state.dragging && touchMove ? this.swipeEnd : null,
      onKeyDown: this.props.accessibility ? this.keyHandler : null
    }

    let innerSliderProps = {
      className: className,
      dir: 'ltr',
      style: this.props.style
    }

    if (this.props.unslick) {
      listProps = { className: 'slick-list' }
      innerSliderProps = { className }
    }

    return (
      <div {...innerSliderProps}>
        {!this.props.unslick ? prevArrow : ''}
        <div ref={this.listRefHandler} {...listProps}>
          <Track {...trackProps}>{this.props.children}</Track>
        </div>
        {!this.props.unslick ? nextArrow : ''}
        {!this.props.unslick ? dots : ''}
      </div>
    )
  }
}

export default InnerCarousel
