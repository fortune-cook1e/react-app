import { Tooltip } from 'antd'
import classnames from 'classnames'
import { FC } from 'react'

import { DataNode } from './data'
import styles from './index.module.less'

interface Props {
  node: DataNode
}

const CustomNode: FC<Props> = ({ node }) => {
  const { meta } = node
  const { avatar, channel, name, isRoot = false } = meta

  return (
    <div className={styles.custom}>
      <div
        className={classnames(styles.relation, {
          [styles.relation_root]: isRoot
        })}
      >
        {isRoot ? '当前客户' : channel}
      </div>

      <div
        className={classnames(styles.avatar, {
          [styles.avatar_root]: isRoot
        })}
      >
        <img src={avatar} alt='avatar' />
      </div>
      <span
        className={classnames(styles.name, {
          [styles.name_root]: isRoot
        })}
      >
        {name}
      </span>
    </div>
  )
}

export default CustomNode
