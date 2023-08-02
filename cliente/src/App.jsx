import { useState } from 'react'

import './App.css'
import clsx from 'clsx'
import Home from './components/home'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className={clsx('min-h-screen h-full w-screen p-5 bg-blue-900')}>
			<Home />
		</div>
	)
}

export default App
