import React, { useState } from 'react'
import HookChild from './HookChild'

const HookComponent = (): JSX.Element => {
	const [count, setCount] = useState<number>(0)

	const onClick = () => {
		setCount(count + 1)
		setCount(count + 2)
		setCount(count + 3)
	}

	return (
		<div>
			this is HookComponent
			<p>this is count:{count}</p>
			<div>
				<button onClick={onClick}>click me</button>
				<HookChild count={count} />
			</div>
		</div>
	)
}

export default HookComponent
