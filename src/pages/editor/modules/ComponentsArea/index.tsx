import React from 'react'
import { Space, Button } from 'antd'
import styles from '../../index.module.less'
import { useComponents } from '../hooks/useComponents'
import DrapWrapper from './DrapWrapper'

const ComponentsArea = (): JSX.Element => {
	const { componentData } = useComponents()

	return (
		<div className={styles.components}>
			<Space>
				{componentData.map(c => {
					return (
						<DrapWrapper key={c.id} componentData={c}>
							<Button>{c.name}</Button>
						</DrapWrapper>
					)
				})}
			</Space>
		</div>
	)
}

export default ComponentsArea
