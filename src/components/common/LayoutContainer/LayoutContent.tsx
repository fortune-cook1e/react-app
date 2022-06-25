import React from 'react'
import styles from './index.module.less'

interface Props {
	children: React.ReactNode
}

const LayoutContent = ({ children }: Props): JSX.Element => {
	return <div className={styles.content}>{children}</div>
}

export default LayoutContent
