import { TArticle } from '../../types/types'
import { SET_ARTICLES, SET_ARTICLE } from '../types'
import { Dispatch } from 'redux'

export const setArticlesAC = (articles: TArticle[]) => ({ type: SET_ARTICLES, articles })
export const setArticleAC = (article: TArticle) => ({ type: SET_ARTICLE, article })

type TArticlesAC = {
    type: typeof SET_ARTICLES,
    articles: TArticle[]
}

type TArticleAC = {
    type: typeof SET_ARTICLE,
    article: TArticle
}
 
export type TArticleActions = TArticlesAC | TArticleAC

export const setArticlesThunk = () => async (dispatch: Dispatch) => {
    const response = await fetch('/api/articles')
    const data = await response.json()
    dispatch(setArticlesAC(data))
}

export const setArticleThunk = (id: string) => async (dispatch: Dispatch) => {
    const response = await fetch(`/api/articles/${id}`)
    const data = await response.json()
    dispatch(setArticleAC(data))
}