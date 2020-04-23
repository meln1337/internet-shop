import { ArticleProps } from './types'

export type FullArticleContainerProps = {
    article: ArticleProps | {} | any,
    history: any,
    location: any,
    match: any,
    staticContext: any,
    setArticle: (id: string) => any,
    id: string
}

export type FullArticleContainerMSTP = {
    article: ArticleProps | [],
    id: string
}

export type FullArticleContainerMDTP = {
    setArticle: (id: string) => any
}