import React, { useState, Suspense, lazy } from 'react'

const Button = lazy(() => import('reactComponent/Button'))
const ChartDemo = lazy(() => import('reactComponent/ChartDemo'))

console.log({ Button })

const Home = () => {
	const [visible, setVisible] = useState<boolean>(false)
	return (
		<div>
			<p>haha</p>
			<button onClick={() => setVisible(!visible)}>click me </button>
			<Suspense fallback='loading...'>
				{/* <Demo text='heiheihie' /> */}
				{visible && (
					<div>
						<Button text='haha' />
						<ChartDemo />
					</div>
				)}
			</Suspense>
		</div>
	)
}

export default Home
