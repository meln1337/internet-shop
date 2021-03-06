import React from 'react';
import { TArticle, ArticlesProps } from '../types/types';
import Article from './Article';
import { Link } from 'react-router-dom';

const Articles: React.FC<ArticlesProps> = ({ articles }) => (
    <div className="articles">
        {articles.map((article: TArticle) => (
            <Link to={`/articles/${article.id}`}>
                <Article {...article} />
            </Link>
        ))}
    </div>
)

export default Articles;