// Задание 4 (тайминг 25 минут)
// ● Создайте маленькое приложение со страницей списка 
// (ListPage) и страницей деталей (DetailPage).
// ● На ListPage отобразите список элементов (например, статей или 
// продуктов), где каждый элемент является ссылкой на 
// DetailPage, содержащую детальную информацию об элементе. 
// Используйте react-router-dom для настройки маршрутизации.
// ● На DetailPage используйте useParams для извлечения 
// параметра из URL (например, ID элемента) и отобразите 
// детальную информацию об элементе.

import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = ({ articles }) => {
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
export default DetailPage;