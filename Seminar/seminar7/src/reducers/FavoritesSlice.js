import { createSlice } from "@reduxjs/toolkit";

const favoritesReducer = createSlice({

    name: 'favorites',
    initialState: {
        array: []
    },
    reducers: {
        addFavorite: (state, action) => {
            if (state.array.some((item) => item.id === action.payload.id)) {
                return;
            }
            state.array.push(action.payload);
        },
        removeFavorite: (state, { payload: todoItem }) => {
            state.array = state.array.filter((item) => item.id !== todoItem.id);
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesReducer.actions;
export default favoritesReducer.reducer;