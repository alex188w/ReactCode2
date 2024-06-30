import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({

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

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;