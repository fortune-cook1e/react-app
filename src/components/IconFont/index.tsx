import classnames from 'classnames'
import React, { CSSProperties } from 'react'

import styles from './index.module.less'

type Props = {
  icon: 'success' | 'fail'
  className?: string
}

const IconFont: React.FC<Props> = ({ icon = '', className = '' }) => {
  return <i className={classnames(styles.iconfont, className, styles[`icon_${icon}`])} />
}
export default IconFont
