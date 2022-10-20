import { useRequest, useSafeState } from 'ahooks'
import { Spin } from 'antd'
import React, { useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { EngineContext, Mode } from './context'
import { useEngine } from './hooks/useEngine'
import styles from './index.module.less'
import AttributeArea from './modules/AttributeArea'
import ComponentsArea from './modules/ComponentsArea'
import Engine from './modules/Engine'
import HeaderArea from './modules/HeaderArea'

import { fetchVisualInfo } from '@/apis/visual'
import { useRouter } from '@/hooks'
import useEventEmitter from '@/hooks/useEventEmitter'
import { useForceUpdate } from '@/hooks/useForceUpdate'

const Visual = (): JSX.Element => {
  const globalEngine = useEngine()
  const forceUpdate = useForceUpdate()
  const eventEmitter = useEventEmitter()
  const [mode, setMode] = useSafeState<Mode>('add')
  const {
    query: { id = '' }
  } = useRouter()

  const { run: fetchVisualInfoRunner, loading } = useRequest(
    async () => {
      const data = await fetchVisualInfo(id as string)
      return data.data
    },
    {
      manual: true,
      onSuccess(result) {
        const { cmpList, pageConfig } = result
        const jsonCmpList = JSON.parse(cmpList)
        const jsonPageConfig = JSON.parse(pageConfig)
        globalEngine.updateCmps(jsonCmpList)
        globalEngine.updatePageConfig(jsonPageConfig)
      }
    }
  )

  useEffect(() => {
    if (id) {
      fetchVisualInfoRunner()
      setMode('edit')
    }
  }, [])

  useEffect(() => {
    // 订阅数据源的改变
    const unsubscribe = globalEngine.subscribe(() => {
      forceUpdate()
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <EngineContext.Provider value={{ globalEngine, eventEmitter, mode, editingId: id as string }}>
      <DndProvider backend={HTML5Backend}>
        <div className={styles.visual}>
          <HeaderArea />
          <div className={styles.emulator}>
            <div className={styles.emulator__left}>
              <ComponentsArea />
            </div>
            <div className={styles.emulator__middle}>
              <Engine engineInstance={globalEngine} />
            </div>
            <div className={styles.emulator__right}>
              <AttributeArea />
            </div>
          </div>
        </div>
      </DndProvider>
    </EngineContext.Provider>
  )
}

export default Visual
