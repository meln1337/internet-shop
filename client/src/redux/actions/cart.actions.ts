import { Dispatch } from 'redux'
import { TArticle } from '../../types/types'
import { SET_CART } from '../types'

export const setCartAC = (articles: TArticle[]) => ({ type: SET_CART, articles })

export type TCartAC = {
    type: typeof SET_CART,
    articles: TArticle[]
}

export type TCartActions = TCartAC

export const setCart = () => (dispatch: Dispatch) => {
    const articles = localStorage.getItem('cart')
    if (!articles) {
        return dispatch(setCartAC([]))
    }
    const data = JSON.parse(articles)
    dispatch(setCartAC(data))
}