import { TArticle } from '../../types/types'
import { Dispatch } from 'redux'
import { SET_ARTICLES_BY_CATEGORY } from '../types'

const setArticlesByCategoryAC = (articles: TArticle[], category: string) => ({ type: SET_ARTICLES_BY_CATEGORY, articles, category })

type TArticlesAC = {
    type: typeof SET_ARTICLES_BY_CATEGORY,
    articles: TArticle[],
    category: string
}

export type TCategoryActions = TArticlesAC

export const setArticlesByCategoryThunk = (category: string) => async (dispatch: Dispatch) => {
    const response = await fetch(`/api/category/${category}`)
    const data = await response.json()
    dispatch(setArticlesByCategoryAC(data.articles, data.category))
}