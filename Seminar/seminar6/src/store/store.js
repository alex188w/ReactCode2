import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../reducers/TodoListslice";
 
export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
    },
});

