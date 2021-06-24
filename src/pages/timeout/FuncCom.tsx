import React, { useState, CSSProperties } from 'react'

const btnStyle: CSSProperties = {
	width: '100px',
	height: '100px',
	border: '1px solid pink'
}

// 测试timeout在函数组件与class组件之间的区别
const FunCom = () => {
	const [count, setCount] = useState<number>(0)

	const timeoutClick = () => {
		setTimeout(() => {
			setCount(count + 1)
		}, 2000)
	}

	const handleClick = () => {
		setCount(count + 1)
	}
	return (
		<div>
			<h1>Fun com counter is:{count}</h1>
			<button style={btnStyle} onClick={handleClick}>
				click me
			</button>
			<button style={btnStyle} onClick={timeoutClick}>
				timeout click me
			</button>
		</div>
	)
}

export default FunCom
