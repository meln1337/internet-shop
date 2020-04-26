export type TArticle = {
    id: string,
    name: string,
    description: string,
    price: number,
    discount: number,
    img: string,
    categories: string[],
    timestamps: Date | number
}

export type ArticlesProps = {
    articles: TArticle[]
}

export type THeader = {
    location: any
}

export type TSidebar = {
    match: any
}

export type TArticlesByCategoryContainer = {
    articles: TArticle[],
    category: string
    history: any,
    location: any,
    match: any,
    staticContext: any,
    setArticlesByCategory: (category: string) => void
}

export type ArticlesByCategoryContainerMSTP = {
    articles: TArticle[],
    category: string
}

export type ArticlesByCategoryContainerMDTP = {
    setArticlesByCategory: (category: string) => void
}

export type ArticlesContainerProps = {
    articles: TArticle[]
    setArticles: () => any
}

export type ArticlesContainerMSTP = {
    articles: TArticle[]
}

export type ArticlesContainerMDTP = {
    setArticles: () => any
}

export type FullArticleContainerProps = {
    article: TArticle | {} | any,
    history: any,
    location: any,
    match: any,
    staticContext: any,
    setArticle: (id: string) => any,
    id: string
}

export type FullArticleContainerMSTP = {
    article: TArticle | [] | undefined,
    id: string
}

export type FullArticleContainerMDTP = {
    setArticle: (id: string) => any
}