import React from 'react'
import { CSSTransition } from 'react-transition-group'

export type AnimateType =
	| 'fade'
	| 'alert'
	| 'slide-left'
	| 'slide-top'
	| 'slide-bottom'
	| 'slide-right'

interface Props {
	appear?: boolean
	TransitionComponent?: any
	open: boolean
	onEnter?: () => void
	onEntering?: () => void
	onEntered?: () => void
	onExit?: () => void
	onExited?: () => void
	onExiting?: () => void
	animate?: AnimateType
	// timeout?: number
	[propname: string]: any
}

const defaultTimeout = 300

const Transition: React.FC<Props> = props => {
	const {
		appear = true,
		TransitionComponent = CSSTransition,
		open = false,
		onEnter = () => {},
		onEntering = () => {},
		onEntered = () => {},
		onExit = () => {},
		onExited = () => {},
		onExiting = () => {},
		animate = 'fade',
		...other
	} = props

	return (
		<TransitionComponent
			in={open}
			appear={appear}
			onEnter={() => onEnter()}
			onEntered={() => onEntered()}
			onEntering={() => onEntering()}
			onExit={() => onExit()}
			onExited={() => onExited()}
			onExiting={() => onExiting()}
			timeout={defaultTimeout}
			classNames={animate}
			unmountOnExit
			{...other}
		>
			{props.children}
		</TransitionComponent>
	)
}

export default Transition
