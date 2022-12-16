import { useHover } from 'ahooks'
import classnames from 'classnames'
import { useRef, useState, MouseEvent } from 'react'

import { RelationshipNodeData } from '../../types'
import PersonRelationshipModal from '../PersonRelationshipModal'

import styles from './index.module.less'

interface Props {
  node: RelationshipNodeData
  isRoot?: boolean
}

const PersonNode = ({ node, isRoot }: Props): JSX.Element => {
  const {
    properties: { avatar = '', name = '', count = 0, role = '' },
    id = ''
  } = node
  const [visible, setVisible] = useState<boolean>(false)

  const useImgRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(useImgRef)

  const handleCountClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setVisible(true)
  }

  return (
    <div className={styles.custom}>
      <PersonRelationshipModal visible={visible} cstId={id} onCancel={() => setVisible(false)} />

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
        onClick={handleCountClick}
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
