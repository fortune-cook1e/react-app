import React, { useState, Suspense, lazy } from 'react'
import { useDrop } from 'react-dnd'
import CanvasComponent from './CanvasComponent'
import { Draggable, Droppable, DragDropContext, DropResult } from 'react-beautiful-dnd'
import styles from '../../index.module.less'
import { CanvasComponentData, ComponentData, DndDropResult } from '../../types'
import { getUniqueId } from '@/utils'
import { getComponentByType } from '../../utils'
import { COMPONENT_LIST } from '../../constants'
import { useCanvasContext } from '../../context'

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
	const { globalCanvas } = useCanvasContext()

	const addComponent = (item: ComponentData) => {
		const cmp = {
			...item,
			uniqueId: getUniqueId()
		}
		globalCanvas.addCmp(cmp)
	}

	const canvasData = globalCanvas.getCanvasData()

	const onDragStart = () => {
		console.log('drag start')
	}

	const onDragUpdate = () => {}

	const onDragEnd = (result: DropResult) => {
		const canvasData = globalCanvas.getCanvasData()
		const { draggableId, destination, source } = result
		const dragItem = canvasData.find(c => c.uniqueId === draggableId)
		if (!destination || !dragItem || !source) return
		if (destination.droppableId === source.droppableId && destination.index === source.index) return
		const { index: destIndex } = destination
		const { index: sourceIndex } = source
		const newCmps: CanvasComponentData[] = JSON.parse(JSON.stringify(canvasData))
		// 先插入后删除旧数据
		// 插入待加入
		newCmps.splice(sourceIndex, 1)
		newCmps.splice(destIndex, 0, dragItem)
		globalCanvas.updateCmps(newCmps)
	}

	console.log('render...')

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
							{canvasData.map((c: CanvasComponentData, cIndex: number) => {
								return (
									<Draggable key={c.uniqueId} draggableId={c.uniqueId} index={cIndex}>
										{dragProvided => (
											<div
												{...dragProvided.draggableProps}
												{...dragProvided.dragHandleProps}
												ref={dragProvided.innerRef}
											>
												<CanvasComponent canvasCmpData={c} />
											</div>
										)}
									</Draggable>
								)
							})}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	)
}

export default CanvasCore
