import React from 'react'
import styles from './index.module.less'

interface Props {
	title: string
	children: React.ReactNode
}

const Layout = ({ title, children }: Props): JSX.Element => {
	return (
		<div className={styles.layout}>
			<h3 className={styles.layout__title}>{title}</h3>
			<div className={styles.layout__content}>{children}</div>
		</div>
	)
}

export default Layout
