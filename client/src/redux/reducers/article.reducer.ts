import { SET_ARTICLES, SET_ARTICLE } from '../types'
import { ArticleInitialState } from '../../types/initialStateTypes'

const initialState: ArticleInitialState = {
    articles: []
}

const articleReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_ARTICLES: {
            return {
                ...state,
                articles: action.payload
            }
        }
        case SET_ARTICLE: {
            return {
                ...state,
                articles: [
                    ...state.articles,
                    action.payload
                ]
            }
        }
        default: return state
    }
}

export default articleReducer