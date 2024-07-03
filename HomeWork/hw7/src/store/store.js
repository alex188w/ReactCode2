import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from "../reducer/taskSlice";
import { thunk } from 'redux-thunk';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(thunk),
});