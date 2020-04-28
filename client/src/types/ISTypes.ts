import { TArticle } from './types'

export type ArticleInitialState = {
    articles: TArticle[] | []
}

export type ISCategory = {
    articles: any
}

export type ISArticle = {
    articles: TArticle[] | []
}

export type ISCart = {
    articles: any,
    open: boolean
}