import { EngineCmpProps, PageConfig } from '@/pages/visual/types'
import React from 'react'
import styles from './index.module.less'

const Page = (props: EngineCmpProps): JSX.Element => {
	const { values } = props
	const { title } = values as PageConfig

	const onPageClick = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation()
	}

	return <div className={styles.page}>{title}</div>
}

export default Page
