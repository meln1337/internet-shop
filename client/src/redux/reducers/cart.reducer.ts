import { ISCart } from '../../types/ISTypes'
import { TCartActions } from '../actions/cart.actions'
import { SET_OPEN_CART, SET_LOCK_CART, SET_CART } from '../types'

const initialState: ISCart = {
    articles: {},
    open: false
}

type TInitialState = typeof initialState

const cartReducer = (state = initialState, action: TCartActions): TInitialState => {
    switch(action.type) {
        case SET_CART: {
            return {
                ...state,
                articles: action.articles
            }
        }
        case SET_OPEN_CART: {
            return {
                ...state,
                open: true
            }
        }
        case SET_LOCK_CART: {
            return {
                ...state,
                open: false
            }
        }
        default: return state
    }
}

export default cartReducer