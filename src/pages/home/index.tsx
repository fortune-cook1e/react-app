import React, { useState, Suspense, lazy } from 'react'

const Rbutton = lazy(() => import('cookieComponent/Button'))
const ChartDemo = lazy(() => import('cookieComponent/ChartDemo'))

const Home = () => {
	const [visible, setVisible] = useState<boolean>(false)
	const [visible2, setVisible2] = useState<boolean>(false)
	return (
		<div>
			<p>haha</p>
			<button onClick={() => setVisible(!visible)}>click me </button>
			<button onClick={() => setVisible2(!visible)}>
				click me get rbutton{' '}
			</button>

			<Suspense fallback='loading~~'>
				{visible2 && (
					<div>
						<Rbutton text='rbutton' />
						<ChartDemo />
					</div>
				)}
			</Suspense>
		</div>
	)
}

export default Home
