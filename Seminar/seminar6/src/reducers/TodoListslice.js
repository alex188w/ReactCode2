import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        array: [
            {
                id: 1,
                text: "Todo 1",
            },
            {
                id: 2,
                text: "Todo 2",
            },
            {
                id: 3,
                text: "Todo 3",
            },
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            if (state.array.some((item) => item.id === action.payload.id)) {
                return;
            }
            state.array.push(action.payload);
        },
        deleteTodo: (state, { payload: todoItem }) => {
            state.array = state.array.filter((item) => {
                return item.id !== todoItem.id;
            });
        }
    }
});

export const { addTodo, deleteTodo } = todoListSlice.actions;
export default todoListSlice.reducer;