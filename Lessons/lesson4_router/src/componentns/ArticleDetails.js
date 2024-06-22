import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetails = ({ articles }) => {
    const { id } = useParams();
    const article = articles.find(article => article.id === parseInt(id));
    if (!article) {
        return <div>Товар не найден</div>;
    }
    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    )
}
export default ArticleDetails;