import { message, Button } from 'antd'
import React from 'react'

const Dashboard = (): JSX.Element => {
	const tip = () => {
		message.info('dasda', 0)
	}
	return (
		<div>
			this is Dashboard
			<Button onClick={tip}>click me</Button>
		</div>
	)
}

export default Dashboard
