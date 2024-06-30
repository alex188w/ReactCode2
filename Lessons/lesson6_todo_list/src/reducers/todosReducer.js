import { ADD_TODO, TOGGLE_TODO } from '../actions/todoActions';

const initialState = [];

// Редьюсер для обработки действий с задачами
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            // Добавляем новую задачу в список
            return [...state, { id: Date.now(), text: action.payload.text, completed: false }];
        case TOGGLE_TODO:
            // Изменяем статус задачи
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
};

export default todosReducer;