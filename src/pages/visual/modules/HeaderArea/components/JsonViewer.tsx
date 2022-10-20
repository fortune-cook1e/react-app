import { Drawer } from 'antd'
import React from 'react'
import ReactJson from 'react-json-view'

import styles from '../index.module.less'

import { useEngineContext } from '@/pages/visual/context'

interface Props {
  visible: boolean
  onClose: () => void
}

const JsonViewer = ({ visible, onClose }: Props): JSX.Element => {
  const { globalEngine } = useEngineContext()

  const engineData = globalEngine.getEngineData()

  const engineDataStr = JSON.stringify(engineData, null, 2)

  return (
    <Drawer title='画布数据' placement='right' width={500} onClose={onClose} visible={visible}>
      <pre className={styles.viewer}>
        <ReactJson src={engineData} />
      </pre>
    </Drawer>
  )
}

export default JsonViewer
