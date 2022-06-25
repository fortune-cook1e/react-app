import React from 'react'
import styles from './index.module.less'

interface Props {
	children: React.ReactNode
}

const LayoutHeader = ({ children }: Props): JSX.Element => {
	return <div className={styles.header}>{children}</div>
}

export default LayoutHeader
