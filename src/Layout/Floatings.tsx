// import { CloseOutlined, SettingOutlined } from '@ant-design/icons'
import { ConfigProvider, Drawer } from 'antd'
import React, { FC } from 'react'

import styles from './index.module.less'

const COLORS = ['#1890ff', '#faad14', '#13c2c2']

interface Props {
  visible: boolean
  onClose: () => void
}

const Floatings: FC<Props> = ({ visible, onClose }) => {
  const handleColorClick = (c: string) => {
    ConfigProvider.config({
      theme: {
        primaryColor: c
      }
    })
  }

  return (
    <Drawer
      title='全局配置'
      onClose={onClose}
      open={visible}
      width={300}
      closable={false}
      style={{
        zIndex: 999
      }}
    >
      <div className={styles.floating__item}>
        <h3>主题色</h3>
        <div className={styles.colors}>
          {COLORS.map((c: string) => {
            return (
              <span
                key={c}
                className={styles.colors__item}
                style={{ backgroundColor: c }}
                onClick={() => handleColorClick(c)}
              />
            )
          })}
        </div>
      </div>
    </Drawer>
  )
}

export default Floatings
