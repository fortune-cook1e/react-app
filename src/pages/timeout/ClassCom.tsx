import React, { CSSProperties, useState } from 'react'

const btnStyle: CSSProperties = {
	width: '100px',
	height: '100px',
	border: '1px solid #000'
}

// 测试timeout在函数组件与class组件之间的区别
export default class ClassCom extends React.Component {
	state = {
		count: 0
	}

	timeoutClick = () => {
		setTimeout(() => {
			this.setState({
				count: this.state.count + 1
			})
		}, 2000)
	}

	handleClick = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		return (
			<div>
				<h1>ClassCom count is : {this.state.count}</h1>
				<button style={btnStyle} onClick={this.handleClick}>
					click
				</button>
				<button style={btnStyle} onClick={this.timeoutClick}>
					timeout click
				</button>
			</div>
		)
	}
}
