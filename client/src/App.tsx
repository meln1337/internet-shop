import React from 'react'
import useRoutes from './routes'

const routes = useRoutes({})

const App: React.FC = () => (
	<div className="grid">
		{routes}
	</div>
)

export default App