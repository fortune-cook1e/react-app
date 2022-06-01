import React from 'react'

class ClassComponent extends React.Component {
	state = {
		count: 0
	}

	handleClick = () => {
		this.setState({
			count: 4
		})
		this.setState({
			count: 6
		})
		this.setState({
			count: 8
		})
	}

	render() {
		return (
			<div>
				<p>this is class component</p>
				<p>this is count:{this.state.count}</p>
				<button onClick={this.handleClick}>click me</button>
			</div>
		)
	}
}

export default ClassComponent
