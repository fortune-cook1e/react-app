import React from 'react'
import { TestComponent, Button } from 'cookie-react-component'

const Rollup: React.FC = () => {
	return (
		<div>
			<h1>tihs is rollup</h1>

			<TestComponent theme='primary' />

			<Button color='orange' tip='wowowo' />
		</div>
	)
}

export default Rollup
