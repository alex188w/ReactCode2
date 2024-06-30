// Константы для типов действий
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// Создание задачи
export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
});

// Изменение статуса задачи (выполнено/не выполнено)
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
});