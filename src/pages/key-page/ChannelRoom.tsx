import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import { Channel } from './types'

interface Props {
	channel: Channel
}

const inputStorage: any = {
	channelC: { data: 'C Channel Save Input' }
}

const style: CSSProperties = {
	width: '50px',
	height: '50px',
	border: '1px solid #000',
	background: '#fff'
}

const ChannelRoom = ({ channel }: Props): JSX.Element => {
	const [inputValue, setInputValue] = useState<string>(() => {
		const prevInputData = inputStorage[channel.id]?.data || ''
		console.log('prevInputData', prevInputData)
		return prevInputData
	})
	const inputSnapshotRef = useRef<string>(inputValue)

	useEffect(() => {
		console.log('mount')
		return () => {
			console.log('unmout')
			if (!inputStorage[channel?.id]?.data) {
				inputStorage[channel?.id] = {}
			}
			inputStorage[channel.id].data = inputSnapshotRef.current
		}
	}, [channel.id])

	const handleInputChange = (e: any) => {
		const value = e.target.value
		setInputValue(value)
		inputSnapshotRef.current = value
	}

	return (
		<div style={{ marginLeft: '10px' }}>
			<div style={style} />
			<input type='text' value={inputValue} onChange={handleInputChange} />
		</div>
	)
}

export default ChannelRoom
