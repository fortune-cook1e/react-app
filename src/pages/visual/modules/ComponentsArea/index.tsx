import { AndroidOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

import { MATERIAL_LIST } from '../../constants'
import styles from '../../index.module.less'

import DndDragWrapper from './DndDragWrapper'

const ComponentsArea = (): JSX.Element => {
  return (
    <div className={styles.components}>
      <Space wrap>
        {MATERIAL_LIST.map(c => {
          return (
            <DndDragWrapper key={c.id} componentData={c}>
              <div className={styles.components__item}>
                <div className={styles.components__item__icon}>
                  <AndroidOutlined />
                </div>
                <span className={styles.components__item__title}>{c.name}</span>
              </div>
            </DndDragWrapper>
          )
        })}
      </Space>
    </div>
  )
}

export default ComponentsArea
