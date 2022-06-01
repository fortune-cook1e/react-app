import React, { useState } from 'react'
import ChannelList from './ChannelList'
import ChannelRoom from './ChannelRoom'
import { Channel, mock_channel_list } from './types'

/**
 * @description key 另一个方式使用
 * 给 channelRoom 增加key值 key不同时 channelRoom都需要重新render
 * 使用场景举例：
 * 1. 一个页面有3个板块 左侧列表 中间面板以及输入框 右侧列表数据
 * 2. 中间面板和右侧列表都有内部state
 * 3. 每次选择左侧列表项时，由于diff的作用 中间和右侧的state会被复用（也就是说内部状态不会重新初始化一轮）
 * 4. 如果不给 中间以及右侧加key，每次切换左侧列表时候 中间和右侧的状态 需要在切换列表时重新初始化一轮
 * 5. 加了key 由于 diff的效果 render的时候就会走移除->添加dom，组件内部逻辑就会重新执行
 */

const KeyPage = (): JSX.Element => {
	const [selectedChannel, setSelectedChannel] = useState<Channel | undefined>(undefined)
	const handleSelectChannel = (id: string) => {
		const _selectedChannel = mock_channel_list.find(c => c.id === id)
		setSelectedChannel(_selectedChannel)
	}

	return (
		<div>
			<h1>this is KeyPage</h1>
			<div style={{ display: 'flex' }}>
				<ChannelList onSelectChannel={handleSelectChannel} />
				{selectedChannel && <ChannelRoom key={selectedChannel.id} channel={selectedChannel} />}
			</div>
		</div>
	)
}

export default KeyPage
