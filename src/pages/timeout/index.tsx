import React from 'react'
import ClassCom from './ClassCom'
import FunCom from './FuncCom'

// 测试timeout在函数组件与class组件之间的区别
const Timeout = () => {
	return (
		<div>
			<h1>Timeout test</h1>
			<ClassCom />
			<FunCom />
		</div>
	)
}

export default Timeout
