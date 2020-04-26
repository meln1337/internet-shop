import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import articleReducer from './reducers/article.reducer'
import categoryReducer from './reducers/category.reducer'
import cartReducer from './reducers/cart.reducer'

const rootReducer = combineReducers({
	articleReducer,
	categoryReducer,
	cartReducer
})

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

type TRootReducer = typeof rootReducer
export type TAppState = ReturnType<TRootReducer>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk)
)

const store = createStore(rootReducer, enhancer)

export default store