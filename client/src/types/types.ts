export type ArticleProps = {
    id: string,
    name: string,
    description: string,
    price: number,
    discount: number,
    img: string,
    categories: Array<string>,
    timestamps: Date | number
}

export interface ArticlesProps {
    articles: ArticleProps[]
}