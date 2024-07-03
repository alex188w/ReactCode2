// Задание 2 (45 минут)
// В этом примере мы создадим базовое приложение, используя Redux Saga
// для выполнения асинхронного запроса данных.
// ● npm install redux-saga
// ● Создайте файл саги. Например, src/sagas/usersSaga.js
// function fetchUsersApi() {
//  return fetch('https://jsonplaceholder.typicode.com/users')
//  .then(response => response.json());
// }
// ● Рабочая сага: должна выполняться, когда сага перехватит
// действие `FETCH_USERS_REQUEST`
// ● Настройте Redux Saga middleware. В файле, где вы создаете ваш
// store
// ● Теперь, когда сага подключена к вашему приложению, вы
// можете инициировать загрузку пользователей, отправив
// действие FETCH_USERS_REQUEST

import { put, takeEvery, call } from 'redux-saga/effects';

async function fetchUsersApi() {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}

function* fetchUsers() {
    try {
        const users = yield call(fetchUsersApi);
        yield put({ type: 'FETCH_USERS_SUCCESS', payload: users });
    } catch (error) {
        yield put({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
}

function* usersSaga() {
    yield takeEvery('FETCH_USERS_REQUEST', fetchUsers);
}

export default usersSaga;