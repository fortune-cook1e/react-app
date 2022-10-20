import { Empty } from 'antd'
import React from 'react'

import { useEngineContext } from '../../context'

import AttrComponentMap from './AttrComponentMap'
import styles from './index.module.less'

const AttributeArea = (): JSX.Element => {
  const { globalEngine } = useEngineContext()

  const currentSeletedCmp = globalEngine.getSelectedCmp()

  return (
    <div className={styles.attribute}>
      {currentSeletedCmp ? (
        <AttrComponentMap />
      ) : (
        <div className={styles.empty}>
          <Empty description='请选择组件' />
        </div>
      )}
    </div>
  )
}

export default AttributeArea
