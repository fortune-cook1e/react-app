import { Button, message, Space } from 'antd'
import * as faceApi from 'face-api.js'
import React, { useEffect, useRef, useState } from 'react'

import WebRtcHooks from './hooks'
import styles from './index.module.less'

import canvasBgImg from '@/assets/images/canvas.jpg'
import { getUniqueId } from '@/utils'

const COMBINATION_ELEMENT = 'combination-element'

let video2CInterval: any = null

const Page = (): JSX.Element => {
  const { getLocalStream, initFaceApi } = WebRtcHooks()
  const [imgList, setImgList] = useState<{ id: string; url: string }[]>([])
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | undefined>()
  const [loading, setLoading] = useState<boolean>(false)
  const blobData = useRef<Blob[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const replayRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    initFaceApi()
  }, [])

  useEffect(() => {
    function initCanvasImage() {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d')
        const img = new Image()
        img.src = canvasBgImg
        img.onload = function () {
          if (!ctx || !canvasRef.current) return
          ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height)
          // const imgData = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)
        }
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
    if (videoRef.current) {
      videoRef.current.srcObject = stream
    }
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
    if (videoRef.current) {
      const canvas = document.createElement('canvas')
      canvas.width = videoRef.current.videoWidth
      canvas.height = videoRef.current.videoHeight
      const ctx = canvas.getContext('2d')
      ctx?.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
      const imgUrl = canvas.toDataURL('image/png')
      setImgList(l => [
        ...l,
        {
          id: getUniqueId(),
          url: imgUrl
        }
      ])
    }
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
    if (replayRef.current) {
      replayRef.current.src = blobUrl
      replayRef.current.play()
    }
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
    if (canvasRef.current && videoRef.current) {
      const canvasCtx = canvasRef.current.getContext('2d')
      if (!canvasCtx) return
      canvasCtx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
    }
  }

  // 识别人脸
  const captureFace = async () => {
    try {
      setLoading(true)
      // FIXME: 这里执行时间会有点久 会出现页面丢帧 后面用service-worker 来做
      if (imgRef.current && canvasRef.current) {
        const detections = await faceApi
          .detectSingleFace(imgRef.current, new faceApi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions()
        faceApi.matchDimensions(canvasRef.current, {
          width: 480,
          height: 300
        })

        const resized: any = faceApi.resizeResults(detections, {
          width: 480,
          height: 300
        })

        // to draw the detection onto the detected face i.e the box
        faceApi.draw.drawDetections(canvasRef.current, resized)
        // to draw the the points onto the detected face
        faceApi.draw.drawFaceLandmarks(canvasRef.current, resized)
        // to analyze and output the current expression by the detected face
        faceApi.draw.drawFaceExpressions(canvasRef.current, resized)
      }
    } finally {
      setLoading(false)
    }
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
          <Button onClick={captureFace} loading={loading}>
            捕获人脸
          </Button>
        </Space>
      </div>

      <div>
        <Space wrap>
          <img src={canvasBgImg} ref={imgRef} className={styles.playing} />
          <canvas ref={canvasRef} className={styles.playing} />
          <video ref={videoRef} autoPlay playsInline muted className={styles.playing} />
          <video id={COMBINATION_ELEMENT} autoPlay playsInline muted className={styles.playing} />
        </Space>
      </div>

      <div>
        <h3>回放</h3>
        <video ref={replayRef} autoPlay playsInline muted />
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
