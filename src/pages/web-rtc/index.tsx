import { Button, Space } from 'antd'
import React, { useEffect, useRef, useState } from 'react'

import styles from './index.module.less'

import { getUniqueId } from '@/utils'

const VIDEL_ELEMENT = 'localVideo'

const Page = (): JSX.Element => {
  const [imgList, setImgList] = useState<{ id: string; url: string }[]>([])
  const blobData = useRef<Blob[]>([])

  useEffect(() => {
    function getSupportedMimeTypes(): string[] {
      const media = 'video'
      const types = ['webm', 'mp4', 'mov', 'avi', 'wmv', 'flv', 'mkv']
      const codes = ['vp9', 'vp9.0', 'vp8', 'vp8.0', 'avcl', 'av1', 'h265', 'h264']
      const supported: string[] = []
      const isSupported = MediaRecorder.isTypeSupported

      types.forEach((type: string) => {
        const mimeType = `${media}/${type}`
        codes.forEach((code: string) => {
          ;[`${mimeType};codecs=${code}`, `${mimeType};codecs=${code.toUpperCase()}`].forEach(
            variation => {
              if (isSupported(variation)) {
                supported.push(variation)
              }
            }
          )
        })
        if (isSupported(mimeType)) {
          supported.push(mimeType)
        }
      })
      return supported
    }

    const supportedMineTypes = getSupportedMimeTypes()
    console.log({ supportedMineTypes })
  }, [])

  // 获取摄像头视频流
  const getLocalStream = async (constraints: MediaStreamConstraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints)
    playLocalStream(stream)
  }

  // 播放视频流
  const playLocalStream = (stream: MediaStream) => {
    const videoEl = document.getElementById(VIDEL_ELEMENT) as HTMLVideoElement
    videoEl.srcObject = stream
  }

  // 开始获取媒体设备使用权限
  const onGetVideoStream = () => {
    getLocalStream({
      audio: false,
      video: true
    })
  }

  // 获取所有媒体设备
  const getALlCameraDevices = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices()
  }

  const takePhotos = () => {
    const videoEl = document.getElementById(VIDEL_ELEMENT) as HTMLVideoElement
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

    console.log({ stream })
    const mediaRecoreder = new MediaRecorder(stream, options)

    mediaRecoreder.start(0)

    mediaRecoreder.ondataavailable = e => {
      blobData.current.push(e.data)
    }

    mediaRecoreder.onstop = () => {
      console.log('stop recording..')
    }

    mediaRecoreder.onerror = e => {
      console.log('recording eroror..', { e })
    }
  }

  const downloadBlob = () => {
    const blob = new Blob(blobData.current, { type: 'video/webm' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = url
    a.click()
    URL.revokeObjectURL(url)
  }

  // 共享屏幕
  const shareScreen = async () => {
    const localStream = await navigator.mediaDevices.getDisplayMedia({
      audio: false,
      video: true
    })
    playLocalStream(localStream)
  }

  return (
    <div>
      <h1>this is webRTC</h1>

      <div>
        <Space>
          <Button onClick={onGetVideoStream}>Get Stream</Button>
          <Button onClick={takePhotos}>take photos</Button>
          <Button onClick={getALlCameraDevices}>Get all Devices</Button>
          <Button onClick={shareScreen}>shareScreen</Button>
          <Button onClick={startRecording}>recording..</Button>
          <Button onClick={downloadBlob}>下载</Button>
        </Space>
      </div>

      <div>
        <video id={VIDEL_ELEMENT} autoPlay playsInline muted />
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
