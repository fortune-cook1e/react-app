import React from 'react'
import { useNavigate } from 'react-router-dom'

const MENUS = [
	{
		name: 'theme',
		url: '/theme'
	},
	{
		name: 'login',
		url: '/login'
	}
]

const Home = (): JSX.Element => {
	const navigate = useNavigate()
	const go = (url: string) => {
		navigate(url)
	}

	return (
		<div>
			<h1>this is home page</h1>
			<ul>
				{MENUS.map(item => (
					<li onClick={() => go(item.url)} key={item.url}>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Home
