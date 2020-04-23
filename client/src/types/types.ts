export type ArticleProps = {
    id: string,
    name: string,
    description: string,
    price: number,
    discount: number,
    img: string,
    categories: string[],
    timestamps: Date | number
}

export interface ArticlesProps {
    articles: ArticleProps[]
}