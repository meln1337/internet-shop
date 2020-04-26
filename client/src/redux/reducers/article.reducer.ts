import { TArticle } from '../../types/types'
import { ArticleInitialState } from '../../types/ISTypes'
import { TArticleActions } from '../actions/article.actions'
import { SET_ARTICLES, SET_ARTICLE } from '../types'

const initialState: ArticleInitialState = {
    articles: [] as TArticle[] | []
}

type TInitialState = typeof initialState

const articleReducer = (state = initialState, action: TArticleActions): TInitialState => {
    switch(action.type) {
        case SET_ARTICLES: {
            return {
                ...state,
                articles: action.articles
            }
        }
        case SET_ARTICLE: {
            return {
                ...state,
                articles: [
                    ...state.articles,
                    action.article
                ]
            }
        }
        default: return state
    }
}

export default articleReducer