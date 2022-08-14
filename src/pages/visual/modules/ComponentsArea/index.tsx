import React from 'react'
import { Space } from 'antd'
import styles from '../../index.module.less'
import { COMPONENT_LIST } from './data'
import { AndroidOutlined } from '@ant-design/icons'
import { Draggable, Droppable } from 'react-beautiful-dnd'

const ComponentsArea = (): JSX.Element => {
	return (
		<Droppable droppableId='componentsArea'>
			{provided => (
				<div className={styles.components} {...provided.droppableProps} ref={provided.innerRef}>
					<Space wrap>
						{COMPONENT_LIST.map((c, index) => {
							return (
								<Draggable key={c.componentId} draggableId={c.componentId} index={index}>
									{dragProvided => (
										<div
											className={styles.components__item}
											{...dragProvided.draggableProps}
											{...dragProvided.dragHandleProps}
											ref={dragProvided.innerRef}
										>
											<div className={styles.components__item__icon}>
												<AndroidOutlined />
											</div>
											<span className={styles.components__item__title}>{c.name}</span>
										</div>
									)}
								</Draggable>
							)
						})}
					</Space>
				</div>
			)}
		</Droppable>
	)
}

export default ComponentsArea
