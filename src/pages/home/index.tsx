import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (): JSX.Element => {
	const navigate = useNavigate()
	const go = () => {
		navigate('/theme')
	}

	return (
		<div>
			this is home page <button onClick={go}>go theme page</button>
		</div>
	)
}

export default Home
