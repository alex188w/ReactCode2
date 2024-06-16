// Задание 2: Список дел с Material UI

// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import { useState } from "react";
import { TextField, Button, Card, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
    // состояние для хранения списка задач
    const [todoList, setTodoList] = useState([]);
    // состояние для хранения текущего ввода в текстовом поле
    const [currentTodo, setCurrentTodo] = useState('');

    // обработчик добавления новогй задачи в список
    const addTodo = (event) => {
        // предотвращаем перезагрузку формы
        event.preventDefault();
        // игнорируем пустые строки
        if (!currentTodo.trim()) return;
        // добавляем текущую задачу в спиок        
        setTodoList([...todoList, currentTodo]);
        // очищаем текстовое поле
        setCurrentTodo('');
    };

    // удаление задачи из списка
    function removeTodo(index) {
        setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
    }

    // обработчик изменения текстового поля
    const handleInputChange = (event) => {
        setCurrentTodo(event.target.value);
    };

    return (
        <div>
            <div>
                <h2>Список дел для управления задачами</h2>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Введите задачу"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={currentTodo}
                />
                <Button
                    variant="contained" color="primary"
                    onClick={addTodo}>Добавить задачу</Button>
            </div>
            <ul>
                {todoList.map((todo, index) => (
                    <Card variant="outlined" style={{ marginTop: "1rem" }}>
                        <CardContent>
                            <Typography>{todo}</Typography>
                            <IconButton aria-label="delete" onClick={() => removeTodo(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </CardContent>
                    </Card>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
