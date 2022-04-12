import React from 'react'
import { mock_channel_list } from './types'
interface Props {
	onSelectChannel: (id: string) => void
}

const ChannelList = ({ onSelectChannel }: Props): JSX.Element => {
	return (
		<div>
			<ul>
				{mock_channel_list.map(c => {
					return (
						<li key={c.id} onClick={() => onSelectChannel(c.id)}>
							{c.name}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default ChannelList
