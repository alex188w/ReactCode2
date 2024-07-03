import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function GetUsers() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    const handleFetchUsers = () => {
        dispatch({ type: 'FETCH_USERS_REQUEST' });
    }

    return (
        <div>
            <h3>Запрос пользователей через SAGA</h3>
            <button onClick={handleFetchUsers}>SAGA Button</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default GetUsers;