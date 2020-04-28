import React, { useEffect } from 'react'
import useRoutes from './routes'
import { connect } from 'react-redux'
import { TApp } from './types/types'
import { setCartThunk } from './redux/actions/cart.actions'

const routes = useRoutes({})

const App: React.FC<TApp> = ({ setCart }) => {
	useEffect(() => {
		setCart()
	}, [])

	return (
		<div className="grid">
			{routes}
		</div>
	)
}

const mapDispatchToProps = {
	setCart: () => setCartThunk()
}

export default connect(null, mapDispatchToProps)(App)