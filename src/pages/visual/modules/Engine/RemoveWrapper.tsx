import { DeleteOutlined } from '@ant-design/icons'
import { useHover } from 'ahooks'
import React, { useRef } from 'react'

import { useEngineContext } from '../../context'

import styles from './index.module.less'

interface Props {
  id: string
  children: React.ReactNode
}

const RemoveWrapper = ({ id, children }: Props): JSX.Element => {
  const { globalEngine } = useEngineContext()
  const hoverdRef = useRef(null)
  const isHovering = useHover(hoverdRef)

  const removeCmp = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation()
    console.log('clcik me ...')
    globalEngine.removeCmp(id)
  }

  return (
    <div ref={hoverdRef} className={styles.remove}>
      {isHovering ? (
        <div className={styles.remove__icon}>
          <DeleteOutlined onClick={removeCmp} />
        </div>
      ) : null}
      {isHovering ? <div className={styles.remove__border} /> : null}
      <div className={styles.remove__content}>{children}</div>
    </div>
  )
}

export default RemoveWrapper
