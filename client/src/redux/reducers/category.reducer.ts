import { ISCategory } from '../../types/ISTypes';
import { SET_ARTICLES_BY_CATEGORY } from '../types'
import { TCategoryActions } from '../actions/category.actions'

const initialState: ISCategory = {
    articles: {}
}

type TInitialState = typeof initialState

const categoryArticle = (state = initialState, action: TCategoryActions): TInitialState => {
    switch(action.type) {
        case SET_ARTICLES_BY_CATEGORY: {
            return {
                ...state,
                articles: {
                    ...state.articles,
                    [action.category]: action.articles
                }
            }
        }
        default: return state
    }
}

export default categoryArticle