import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';
import { FilterContext } from '../contexts/FilterContext';
import withFilter from '../hoc/withFilter';

const TodoList = () => {
    // получаем список задач из Redux хранилища
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const { filter } = useContext(FilterContext);

    // Применяем фильтр к задачам
    const filteredTodos = withFilter(todos, filter);

    const handleToggleTodo = (id) => {
        // Отправляем действие для изменения статуса задачи
        dispatch(toggleTodo(id));
    };
    let todoStatus = 'не определено';

    return (
        <ul>
            {filteredTodos.map(todo => {
                return (
                    <div>
                        <li
                            key={todo.id}
                            onClick={() => handleToggleTodo(todo.id)}

                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        >
                            {todo.text}
                        </li>
                        <p>{todoStatus = todo.completed ? 'выполнено' : 'не выполнено'}</p>
                    </div>
                )
            })}
        </ul>
    );
};

export default TodoList;