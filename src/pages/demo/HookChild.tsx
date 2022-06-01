import React, { useEffect, useState } from 'react'

interface Props {
	count: number
}

const HookChild: React.FC<Props> = props => {
	const { count } = props
	const [innerState, setInnerState] = useState<number>(count)

	useEffect(() => {
		setInnerState(count)
	}, [count])

	return <div>this is hooks children:{innerState}</div>
}

export default HookChild
