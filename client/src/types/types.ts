export type TApp = {
    setCart: () => void
}

export type TAppMDTP = {
    setCart: () => void
}

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
    articlesCount: number,
    location: any,
    setOpenCart: () => void
}

export type THeaderMSTP = {
    articlesCount: number
}

export type THeaderMDTP = {
    setOpenCart: () => void
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
    addToCart: (article: TArticle) => any,
    id: string
}

export type FullArticleContainerMSTP = {
    article: TArticle | [] | undefined,
    id: string
}

export type FullArticleContainerMDTP = {
    setArticle: (id: string) => any,
    addToCart: (article: TArticle) => any
}

export type TCart = {
    articles: any
    open: boolean,
    setLockCart: () => void,
    addToCart: (article: TArticle) => void,
    minusFromCart: (article: TArticle) => void,
    deleteFromCart: (article: TArticle) => void
}

export type TCartMSTP = {
    articles: {}
    open: boolean
}

export type TCartMDTP = {
    setLockCart: () => void
    addToCart: (article: TArticle) => void,
    minusFromCart: (article: TArticle) => void,
    deleteFromCart: (article: TArticle) => void
}

export type TFullArticle = {
    id: string,
    name: string,
    description: string,
    price: number,
    discount: number,
    img: string,
    categories: string[],
    timestamps: Date | number,
    addToCart: (article: TArticle) => any
}

export type TCartArticle = {
    id: string,
    name: string,
    description: string,
    price: number,
    discount: number,
    img: string,
    categories: string[],
    timestamps: number | Date,
    count: number,
    addToCart: (article: TArticle) => any,
    minusFromCart: (articles: TArticle) => any,
    deleteFromCart: (article: TArticle) => void,
    setLockCart: () => void
}