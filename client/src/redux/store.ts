import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import articleReducer from './reducers/article.reducer'

const rootReducer = combineReducers({
  articleReducer
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)

const store = createStore(rootReducer, enhancer)

export default store