// Задание 1 (тайминг 35 минут)
// Создать приложение на React длā отображения случайнýх шуток о Чаке Норрисе.
// Мы будем использовать Chuck Norris API, который предоставляет случайные шутки о Чаке Норрисе. Этот 
// API не требует ключа для доступа, что делает его идеальным для обучения.
// Инициализируйте новый проект с помощью Create React App.
// Разработайте интерфейс с кнопкой, при нажатии на которую будет отправляться запрос к API для 
// получения новой шутки.
// Используйте fetch вместе с Promise или async/await длā выполнениā запроса к Chuck Norris API и получения 
// случайной шутки.
// Отобразите полученную шутку в вашем интерфейсе. Можете добавить какой-нибудь элемент анимации или 
// визуализации при загрузке данных.


import '../App.css'
import { useState, useEffect } from 'react';

function ChuckJoke() {

    const url = 'https://api.chucknorris.io/jokes/random';

    const [joke, setJoke] = useState('');
    const [error, setError] = useState(false);
    const [jokes, setJokes] = useState([]);

    function clickHandler() {
        getCNJokes();
    }

    async function getCNJokes() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Запрос завершился со статусом: ${response.status}`);
            }
            const result = await response.json();
            setJoke(result);
            setJokes([...jokes, joke]);
        } catch (error) {
            setError(true);
            console.warn(error);
        }
    }

    useEffect(() => {
        getCNJokes();
    }, []);

    return (
        <div className='App'>
            <h2>Шутки про Чака Норриса!</h2>
            {error && (
                <>
                    <h2>Ошибка получения шутки!!!</h2>
                    <button onClick={clickHandler}>Попробовать еще раз</button>
                </>
            )}
            {joke && (
                <div key={joke.id}>
                    <p>Шутка: {joke.value}</p>
                    <button onClick={clickHandler}>Новая шутка</button>
                </div>
            )}
            {jokes.map((item) => (
                <div key={item.id}>
                    <p>{item.value}</p>
                </div>
            ))}
        </div>
    );
}

export default ChuckJoke;