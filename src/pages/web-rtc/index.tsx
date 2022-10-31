import { Button, message, Space } from 'antd'
import * as faceApi from 'face-api.js'
import React, { useEffect, useRef, useState } from 'react'

import WebRtcHooks from './hooks'
import styles from './index.module.less'

import canvasBgImg from '@/assets/images/canvas.jpg'
import { getUniqueId } from '@/utils'

const VIDEO_ELEMENT = 'localVideo'
const REPLAY_ELEMENT = 'replay-element'
const CANVAS_ELEMENT = 'canvas-element'
const COMBINATION_ELEMENT = 'combination-element'

let video2CInterval: any = null

const Page = (): JSX.Element => {
  const { getLocalStream } = WebRtcHooks()
  const [imgList, setImgList] = useState<{ id: string; url: string }[]>([])
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | undefined>()
  const blobData = useRef<Blob[]>([])

  useEffect(() => {
    function initCanvasImage() {
      const canvasEl = document.getElementById(CANVAS_ELEMENT) as HTMLCanvasElement
      const ctx = canvasEl.getContext('2d')
      const img = new Image()
      img.src = canvasBgImg
      img.onload = function () {
        if (!ctx) return
        ctx.drawImage(img, 0, 0, canvasEl.width, canvasEl.height)
        const imgData = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height)
        console.log({ imgData })
      }
    }

    initCanvasImage()

    return () => {
      clearInterval(video2CInterval)
      video2CInterval = null
    }
  }, [])

  // 播放视频流
  const playLocalStream = (stream: MediaStream) => {
    const videoEl = document.getElementById(VIDEO_ELEMENT) as HTMLVideoElement
    videoEl.srcObject = stream
  }

  // 打开摄像头
  const start = () => {
    getLocalStream({
      audio: false,
      video: true
    }).then(stream => {
      playLocalStream(stream)
    })
  }

  const takePhotos = () => {
    const videoEl = document.getElementById(VIDEO_ELEMENT) as HTMLVideoElement
    const canvas = document.createElement('canvas')
    canvas.width = videoEl.videoWidth
    canvas.height = videoEl.videoHeight
    const ctx = canvas.getContext('2d')
    ctx?.drawImage(videoEl, 0, 0, canvas.width, canvas.height)
    const imgUrl = canvas.toDataURL('image/png')
    setImgList(l => [
      ...l,
      {
        id: getUniqueId(),
        url: imgUrl
      }
    ])
  }

  // 开始录制
  const startRecording = async () => {
    const kbps = 1024
    const mbps = kbps * kbps
    const options = {
      mimeType: 'video/webm'
    }
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    })

    const _mediaRecoreder = new MediaRecorder(stream, options)

    setMediaRecorder(_mediaRecoreder)

    _mediaRecoreder.start(0)

    _mediaRecoreder.ondataavailable = e => {
      blobData.current.push(e.data)
    }

    _mediaRecoreder.onstop = () => {
      console.log('stop recording..')
    }

    _mediaRecoreder.onerror = e => {
      console.log('recording eroror..', { e })
    }
  }

  // 结束录制
  const endRecording = () => {
    if (!mediaRecorder) {
      return message.error('未录制')
    }
    mediaRecorder.stop()
    setMediaRecorder(undefined)
  }

  // 开始回放
  const replay = () => {
    const blob = new Blob(blobData.current, { type: 'video/webm' })
    const blobUrl = URL.createObjectURL(blob)
    const videoEl = document.getElementById(REPLAY_ELEMENT) as HTMLVideoElement
    videoEl.src = blobUrl
    videoEl.play()
  }

  const downloadVideo = () => {
    if (!blobData.current.length) return
    const blob = new Blob(blobData.current, { type: 'video/webm' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = url
    a.click()
    URL.revokeObjectURL(url)
    blobData.current = []
  }

  // 共享屏幕
  const shareScreen = async () => {
    const localStream = await navigator.mediaDevices.getDisplayMedia({
      audio: false,
      video: true
    })
    playLocalStream(localStream)
  }

  // 将视频数据绘制到canvas上
  const draw2Canvas = () => {
    const canvasEl = document.getElementById(CANVAS_ELEMENT) as HTMLCanvasElement
    const videoEL = document.getElementById(VIDEO_ELEMENT) as HTMLVideoElement
    const canvasCtx = canvasEl.getContext('2d')
    if (!canvasCtx) return
    canvasCtx.drawImage(videoEL, 0, 0, canvasEl.width, canvasEl.height)
  }

  const captureFace = async () => {
    const canvasEl = document.getElementById(CANVAS_ELEMENT) as HTMLCanvasElement
    // console.log(import.meta.env.PROD)
    // FIXME: 暂时只在vite开发环境下支持
    const result = await Promise.all([
      faceApi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceApi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceApi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceApi.nets.faceExpressionNet.loadFromUri('/models')
    ])
    console.log({ result })
  }

  return (
    <div>
      <h1>this is webRTC</h1>

      <div>
        <Space wrap>
          <Button onClick={start}>开启摄像头</Button>
          <Button onClick={shareScreen}>开启屏幕共享</Button>
          <Button onClick={takePhotos}>拍照</Button>
          <Button onClick={startRecording}>开始录制</Button>
          <Button onClick={endRecording}>结束录制</Button>
          <Button onClick={replay}>回放</Button>
          <Button onClick={downloadVideo}>下载</Button>
          <Button onClick={draw2Canvas}>将视频绘制到canvas中</Button>
          <Button onClick={captureFace}>捕获人脸</Button>
        </Space>
      </div>

      <div>
        <Space wrap>
          <canvas id={CANVAS_ELEMENT} className={styles.playing} />
          <video id={VIDEO_ELEMENT} autoPlay playsInline muted className={styles.playing} />
          <video id={COMBINATION_ELEMENT} autoPlay playsInline muted className={styles.playing} />
        </Space>
      </div>

      <div>
        <h3>回放</h3>
        <video id={REPLAY_ELEMENT} autoPlay playsInline muted />
      </div>

      <div>
        <Space>
          {imgList.map(i => {
            return <img key={i.id} src={i.url} className={styles.img} />
          })}
        </Space>
      </div>
    </div>
  )
}

export default Page
