import { ArticlesProps, ArticleProps } from './../types/types';
import { SET_ARTICLES, SET_ARTICLE } from './types'

export const setArticlesAC = (payload: ArticlesProps) => ({ type: SET_ARTICLES, payload })
export const setArticleAC = (payload: ArticleProps) => ({ type: SET_ARTICLE, payload })

export const setArticlesThunk = (): any => async (dispatch: any): Promise<any> => {
    const response = await fetch('/api/articles')
    const data = await response.json()
    dispatch(setArticlesAC(data))
}

export const setArticleThunk = (id: string) => async (dispatch: any): Promise<any> => {
    const response = await fetch(`/api/articles/${id}`)
    const data = await response.json()
    dispatch(setArticleAC(data))
}