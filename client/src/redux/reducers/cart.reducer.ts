import { ISCart } from "../../types/ISTypes"
import { TCartActions } from "../actions/cart.actions"

const initialState: ISCart = {
    articles: []
}

type TInitialState = typeof initialState

const cartReducer = (state = initialState, action: TCartActions): TInitialState => {
    switch(action.type) {
        default: return state
    }
}

export default cartReducer