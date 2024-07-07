import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "../reducer/productReducer";
import { thunk } from 'redux-thunk';

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(thunk),
});