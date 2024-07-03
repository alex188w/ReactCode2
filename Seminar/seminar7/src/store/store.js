import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from '../reducers/FavoritesSlice.js';
import { middleware } from"../middlewares/middleware.js";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducers/rootReducer.js";
import usersSaga from "../sagas/usersSaga.js";

// Задние 1
// export const store = configureStore({
//     reducer: {
//         favorites: favoritesReducer
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(middleware),
// });

// Задние 2
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware, sagaMiddleware)
});
sagaMiddleware.run(usersSaga);

export default store;