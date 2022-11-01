import { message } from 'antd'
import * as faceApi from 'face-api.js'

export interface WebRtcHooksResponse {
  getSupportedMimeTypes: () => string[]
  getALlCameraDevices: () => Promise<MediaDeviceInfo[]>
  getLocalStream: (constraints: MediaStreamConstraints) => Promise<MediaStream>
  initFaceApi: () => Promise<void>
}

const WebRtcHooks = (): WebRtcHooksResponse => {
  // 获取当前浏览器支持的媒体类型
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

  // 获取所有媒体设备
  async function getALlCameraDevices() {
    return await await navigator.mediaDevices.enumerateDevices()
  }

  // 获取摄像头视频流
  const getLocalStream = async (constraints: MediaStreamConstraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints)
    return stream
  }

  // 初始化faceApi
  const initFaceApi = async () => {
    // FIXME: 暂时只在vite开发环境下支持
    await Promise.all([
      faceApi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceApi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceApi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceApi.nets.faceExpressionNet.loadFromUri('/models')
      // faceApi.nets.ssdMobilenetv1.loadFromUri('/models')
    ])
    message.success('face-api init done')
  }

  return {
    getSupportedMimeTypes,
    getALlCameraDevices,
    getLocalStream,
    initFaceApi
  }
}

export default WebRtcHooks
