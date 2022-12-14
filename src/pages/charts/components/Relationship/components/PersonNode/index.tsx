import { useHover } from 'ahooks'
import classnames from 'classnames'
import { useRef } from 'react'

import { NodeData } from '../../types'

import styles from './index.module.less'

interface Props {
  node: NodeData
  isRoot?: boolean
}

const PersonNode = ({ node, isRoot }: Props): JSX.Element => {
  const {
    properties: { avatar = '', name = '', count = 0, role = '' },
    id = ''
  } = node

  const useImgRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(useImgRef)

  return (
    <div className={styles.custom}>
      <div
        className={classnames(styles.relation, {
          [styles.relation_root]: isRoot
        })}
      >
        {isRoot ? '当前客户' : role}
      </div>

      <div
        className={classnames(styles.count, {
          [styles.count_root]: isRoot
        })}
      >
        {count}+
      </div>

      <div
        ref={useImgRef}
        className={classnames(styles.avatar, {
          [styles.avatar_root]: isRoot,
          [styles.avatar_hovering]: isHovering
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

export default PersonNode
