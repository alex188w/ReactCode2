// ● Создать компонент TodoList, который позволяет добавлять 
// элементы в список дел через текстовое поле ввода. Список 
// должен обновляться при добавлении нового дела.

import { useState } from "react";
const TodoList = () => {
    // состояние для хранения списка дел
    const [todos, setTodos] = useState([]);
    // состояние для хранения текущего ввода в текстовом поле
    const [currentTodo, setCurrentTodo] = useState('');

    // обработчик добавления нового дела в список
    const addTodo = (event) => {
        // предотвращаем перезагрузку формы
        event.preventDefault();
        // игнорируем пустые строки
        if (!currentTodo.trim()) return;
        // добавляем текущее дело в спиок
        setTodos([...todos, currentTodo]);
        // очищаем текстовое поле
        setCurrentTodo('');
    };

    // обработчик изменения текстового поля
    const handleInputChange = (event) => {
        setCurrentTodo(event.target.value);
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" value={currentTodo} onChange={handleInputChange} />
                <button type="submit">Добавить дело</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                    // использкем индекс как ключ
                ))}
            </ul>
        </div>
    )
}
export default TodoList;
