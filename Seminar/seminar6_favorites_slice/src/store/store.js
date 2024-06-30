import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from '../reducers/FavoritesSlice.js';

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer
    }
});