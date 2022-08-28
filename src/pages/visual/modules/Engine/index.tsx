import React, { CSSProperties } from 'react'
import { useDrop } from 'react-dnd'
import { Draggable, Droppable, DragDropContext, DropResult } from 'react-beautiful-dnd'
import { EngineComponentData, MaterialComponentData, DndDropResult } from '../../types'
import EngineComponentMap from './EngineComponentMap'
import { MATERIAL_LIST } from '../../constants'
import styles from './index.module.less'
import { Engine } from '../../instance/engine'
import { getUniqueId } from './utils'

interface Props {
	engineInstance: Engine
	engineData?: EngineComponentData[]
	engineStyle?: CSSProperties
}

const ENGINE_DROP_ID = 'engine'

const RenderEngine = ({ engineInstance, engineStyle }: Props): JSX.Element => {
	const [{ isOver }, dndDropRef] = useDrop(() => ({
		accept: MATERIAL_LIST.map(c => c.id),
		collect: monitor => {
			return {
				isOver: !!monitor.isOver()
			}
		},
		drop: ({ componentData }: DndDropResult) => {
			addComponent(componentData)
		}
	}))

	const addComponent = (item: MaterialComponentData) => {
		const cmp = {
			...item,
			uniqueId: getUniqueId()
		}
		engineInstance.addCmp(cmp)
	}

	const engineRenderData = engineInstance.getEngineData()

	const onDragStart = () => {}

	const onDragEnd = (result: DropResult) => {
		const canvasData = engineInstance.getEngineData()
		const { draggableId, destination, source } = result
		const dragItem = canvasData.find(c => c.uniqueId === draggableId)
		if (!destination || !dragItem || !source) return
		if (destination.droppableId === source.droppableId && destination.index === source.index) return
		const { index: destIndex } = destination
		const { index: sourceIndex } = source
		const newCmps: EngineComponentData[] = JSON.parse(JSON.stringify(canvasData))
		// 先插入后删除旧数据
		// 插入待加入
		newCmps.splice(sourceIndex, 1)
		newCmps.splice(destIndex, 0, dragItem)
		engineInstance.updateCmps(newCmps)
	}

	return (
		<div className={styles.engine} style={engineStyle} ref={dndDropRef}>
			<DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
				<Droppable droppableId={ENGINE_DROP_ID}>
					{dropProvided => (
						<div
							ref={dropProvided.innerRef}
							className={styles.canvas__core__content}
							{...dropProvided.droppableProps}
						>
							{engineRenderData.map((c: EngineComponentData, cIndex: number) => {
								return (
									<Draggable key={c.uniqueId} draggableId={c.uniqueId} index={cIndex}>
										{dragProvided => (
											<div
												{...dragProvided.draggableProps}
												{...dragProvided.dragHandleProps}
												ref={dragProvided.innerRef}
											>
												<EngineComponentMap canvasCmpData={c} />
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

export default RenderEngine
