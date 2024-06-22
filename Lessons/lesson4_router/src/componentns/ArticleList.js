import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => (
    <div>
        <h2>Список товаров</h2>
        <ul>
            {articles.map(article => (
                <li key={article.id}>
                    <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default ArticleList;