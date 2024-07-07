import React, { useEffect, useState, useCallback } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export const API_URL_PUBLIC = "https://api.github.com/gists/public";



export const GistsList2 = () => {
    const [gists, setGists] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);



    const requestGists = async () => {
        try {
            setLoading(true); // устанавливаем loading - true перед началом запроса
            const response = await fetch(API_URL_PUBLIC);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            const result = await response.json();
            setGists(result);
        } catch (err) {
            setError(true); // устанавливаем error в true если произошла ошибка
            console.warn(err);
        } finally {
            setLoading(false);
            // устанавливаем setLoading в false , когда запрос завершен
        }
    };

    // вызываем requestGists при монтировании компонента
    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || 'Без описания'}</li>,
        // Используем без описания, если gist.description - отсутствует
        []
    );
    // Обработка различных состояний
    if (loading) return <CircularProgress />;
    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Попробуй еще раз</button>
            </>
        );
    }
    if (gists.length === 0) return <p>No gists avaliable</p>;

    return <ul>{gists.map(renderGist)}</ul>;
};
export default GistsList2;