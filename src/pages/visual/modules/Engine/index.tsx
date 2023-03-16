import { message } from 'antd'
import { toPng } from 'html-to-image'
import { CSSProperties, useEffect, useRef } from 'react'
import { useDrop } from 'react-dnd'

import { EVENT_MAP, MATERIAL_LIST } from '../../constants'
import { useEngineContext } from '../../context'
import { Engine } from '../../instance/engine'
import { EngineComponentData, MaterialComponentData, DndDropResult } from '../../types'

import styles from './index.module.less'
import DroppableArea from './modules/DroppableArea'
import { getUniqueId } from './utils'

interface Props {
  engineData?: EngineComponentData[]
  engineStyle?: CSSProperties
}

const RenderEngine = ({ engineStyle }: Props): JSX.Element => {
  const { eventEmitter, globalEngine } = useEngineContext()
  const [{ isOver }, dndDropRef] = useDrop(() => ({
    accept: MATERIAL_LIST.map(c => c.id),
    collect: monitor => {
      return {
        isOver: !!monitor.isOver()
      }
    },
    drop: ({ componentData }: DndDropResult) => {
      addComponent(componentData)
    }
  }))

  const ref = useRef<HTMLDivElement>(null)

  const onEngineToImg = () => {
    const engineData = globalEngine.getEngineData()

    if (!ref.current || !engineData.length) {
      message.info('请先填充画布')
      return
    }
    const _height = ref.current?.scrollHeight
    toPng(ref.current, { cacheBust: true, height: _height })
      .then(dataUrl => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch(err => {
        console.log(err)
      })
  }

  // 订阅下载图片事件
  eventEmitter.useSubscription(EVENT_MAP.saveAsPic, () => {
    onEngineToImg()
  })

  const addComponent = (item: MaterialComponentData) => {
    const cmp = {
      ...item,
      uniqueId: getUniqueId()
    }
    globalEngine.addCmp(cmp)
  }

  return (
    <div className={styles.engine} style={engineStyle} ref={dndDropRef}>
      <div className={styles.engine__container} ref={ref}>
        <DroppableArea />
      </div>
    </div>
  )
}

export default RenderEngine
