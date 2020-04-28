import { Dispatch } from 'redux'
import { TArticle } from '../../types/types'
import { SET_CART, SET_OPEN_CART, SET_LOCK_CART, ADD_TO_CART } from '../types'

export const setCartAC = (articles: {}) => ({ type: SET_CART, articles })
export const setOpenCartAC = () => ({ type: SET_OPEN_CART })
export const setLockCartAC = () => ({ type: SET_LOCK_CART })
export const addToCartAC = (article: TArticle) => ({ type: ADD_TO_CART, article })

type TCartAC = {
    type: typeof SET_CART,
    articles: TArticle[]
}

type TSetOpenAC = {
    type: typeof SET_OPEN_CART
}

type TSetLockAC = {
    type: typeof SET_LOCK_CART
}

type TAddToCart = {
    type: typeof ADD_TO_CART,
    article: TArticle
}

export type TCartActions = TCartAC | TSetOpenAC | TSetLockAC | TAddToCart

export const setCartThunk = () => (dispatch: Dispatch) => {
    const articles = localStorage.getItem('cart')
    if (!articles) {
        return dispatch(setCartAC({}))
    }
    const data = JSON.parse(articles)
    dispatch(setCartAC(data))
}

export const addToCartThunk = (article: TArticle) => (dispatch: Dispatch) => {
    const articles = localStorage.getItem('cart')
    if (!articles) {
        dispatch(addToCartAC(article))
        localStorage.setItem('cart', JSON.stringify({
            [article.id]: {
                article: article,
                count: 1
            }
        }))
        return setCartThunk()
    }
    const data = JSON.parse(articles)
    console.log(data)
    if (data[article.id]) {
        debugger
        data[article.id].count++
        localStorage.setItem('cart', JSON.stringify(data))
        return dispatch(setCartAC(data))
    }
    data[article.id] = {
        article: article,
        count: 1
    }
    localStorage.setItem('cart', JSON.stringify(data))
    dispatch(setCartAC(data))
}

export const minusFromCartThunk = (article: TArticle) => (dispatch: Dispatch) => {
    const articles = localStorage.getItem('cart')
    if (!articles) {
        return dispatch(setCartAC({}))
    }
    const data = JSON.parse(articles)
    if (data[article.id]) {
        if (data[article.id].count === 1) {
            delete data[article.id]
            localStorage.setItem('cart', JSON.stringify(data))
            return dispatch(setCartAC(data))
        }
        data[article.id].count--
        localStorage.setItem('cart', JSON.stringify(data))
        return dispatch(setCartAC(data))
    }
}

export const deleteFromCartThunk = (article: TArticle) => (dispatch: Dispatch) => {
    const articles = localStorage.getItem('cart')
    if (!articles) {
        return dispatch(setCartAC({}))
    }
    const data = JSON.parse(articles)
    if (data[article.id]) {
        delete data[article.id]
        localStorage.setItem('cart', JSON.stringify(data))
        return dispatch(setCartAC(data))
    }
}