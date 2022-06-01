import React, { useState } from 'react'
import HookComponent from './HookComponent'
import ClassComponent from './ClassComponent'

const Demo = (): JSX.Element => {
	return (
		<div>
			this is demo
			<HookComponent />
			<ClassComponent />
		</div>
	)
}

export default Demo
