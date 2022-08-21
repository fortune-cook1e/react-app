import React from 'react'
import { Space } from 'antd'
import styles from '../../index.module.less'
import { AndroidOutlined } from '@ant-design/icons'
import DndDragWrapper from './DndDragWrapper'
import { COMPONENT_LIST } from '../../constants'

const ComponentsArea = (): JSX.Element => {
	return (
		<div className={styles.components}>
			<Space wrap>
				{COMPONENT_LIST.map(c => {
					return (
						<DndDragWrapper key={c.id} componentData={c}>
							<div className={styles.components__item}>
								<div className={styles.components__item__icon}>
									<AndroidOutlined />
								</div>
								<span className={styles.components__item__title}>{c.name}</span>
							</div>
						</DndDragWrapper>
					)
				})}
			</Space>
		</div>
	)
}

export default ComponentsArea
