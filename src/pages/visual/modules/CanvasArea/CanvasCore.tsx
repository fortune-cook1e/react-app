import React, { useState, Suspense, lazy } from 'react'
import { useDrop } from 'react-dnd'
import { Draggable, Droppable, DragDropContext, DropResult } from 'react-beautiful-dnd'
import styles from '../../index.module.less'
import { CanvasComponentData, ComponentData, DndDropResult } from '../../types'
import { COMPONENT_LIST } from '../ComponentsArea/data'
import { getUniqueId } from '@/utils'

const CanvasCore = (): JSX.Element => {
	const [{ isOver }, dndDropRef] = useDrop(() => ({
		accept: COMPONENT_LIST.map(c => c.id),
		collect: monitor => {
			return {
				isOver: !!monitor.isOver()
			}
		},
		drop: ({ componentData }: DndDropResult) => {
			console.log('dnd drop add..', componentData)
			addComponent(componentData)
		}
	}))
	const [canvasData, setCanvasData] = useState<CanvasComponentData[]>([])

	const addComponent = (item: ComponentData) => {
		// FIXBUG: 这里只能用函数形式 否则每次都会只覆盖添加一条数据
		setCanvasData(prev => [
			...prev,
			{
				...item,
				uniqueId: getUniqueId()
			}
		])
	}

	const onDragStart = () => {
		console.log('dasda')
	}

	const onDragUpdate = () => {}

	const onDragEnd = (result: DropResult) => {
		console.log(result)
	}

	return (
		<div className={styles.canvas__core} ref={dndDropRef}>
			<DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
				<Droppable droppableId='canvasCore'>
					{dropProvided => (
						<div
							ref={dropProvided.innerRef}
							className={styles.canvas__core__content}
							{...dropProvided.droppableProps}
						>
							{/* {COMPONENT_LIST.map((item, index) => {
								return (
									<Draggable key={item.componentId} draggableId={item.componentId} index={index}>
										{dragProvided => (
											<div
												{...dragProvided.draggableProps}
												{...dragProvided.dragHandleProps}
												ref={dragProvided.innerRef}
											>
												哈哈哈哈
											</div>
										)}
									</Draggable>
								)
							})} */}
							<Suspense fallback={<>加载..</>}>
								{canvasData.map((c: CanvasComponentData, cIndex: number) => {
									const Component = lazy(() => import(`../../components/${c.componentId}`))
									return (
										<Draggable key={c.uniqueId} draggableId={c.uniqueId} index={cIndex}>
											{dragProvided => (
												<div
													{...dragProvided.draggableProps}
													{...dragProvided.dragHandleProps}
													ref={dragProvided.innerRef}
												>
													<Component />
												</div>
											)}
										</Draggable>
									)
								})}
							</Suspense>
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	)
}

export default CanvasCore
