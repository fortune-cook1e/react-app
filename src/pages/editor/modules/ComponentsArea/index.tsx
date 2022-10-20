import { Space, Button } from 'antd'
import React from 'react'

import { useComponents } from '../../hooks/useComponents'
import styles from '../../index.module.less'

import DrapWrapper from './DrapWrapper'

const ComponentsArea = (): JSX.Element => {
  const { componentData } = useComponents()

  return (
    <div className={styles.components}>
      <Space>
        {componentData.map(c => {
          return (
            <DrapWrapper key={c.id} componentData={c}>
              <Button>{c.name}</Button>
            </DrapWrapper>
          )
        })}
      </Space>
    </div>
  )
}

export default ComponentsArea
