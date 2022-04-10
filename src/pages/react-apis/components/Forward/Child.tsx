import React, { forwardRef, useImperativeHandle } from 'react'

interface Props {
	name: string
}

type RefHandle = {
	say: () => void
}

const Child = forwardRef<RefHandle, Props>(({ name }, ref) => {
	const say = () => {
		console.log(name)
	}
	useImperativeHandle(ref, () => {
		return {
			say
		}
	})
	return <div>this is child</div>
})

Child.displayName = 'Child'

export default Child
