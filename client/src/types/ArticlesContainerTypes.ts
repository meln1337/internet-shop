import { ArticleProps } from './types';

export type ArticlesContainerProps = {
    articles: ArticleProps[]
    setArticles: () => any
}

export type ArticlesContainerMSTP = {
    articles: ArticleProps[]
}

export type ArticlesContainerMDTP = {
    setArticles: () => any
}