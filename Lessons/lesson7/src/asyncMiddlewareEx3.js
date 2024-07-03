const asyncMiddlewareEx3 = store => next => action => {
    if (action.type === 'FETCH_DATA_REQUEST') {
        //запрос к API
        fetch('http://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                // самое главное для нас - диспетчеризуйте новое действие с полученными данными
                store.dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data })
            })
            .catch(error => {
                // диспетчеризуйте действие об ошибке, если что то пошло нетак
                store.dispatch({ type: 'FETCH_DATA_ERROR', payload: error.toString() })
            });
    }
    return next(action);
}

export default asyncMiddlewareEx3;