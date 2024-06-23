// import { createSlice } from "@reduxjs/toolkit";
// import { configureStore } from '@reduxjs/toolkit';

// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         value: 0
//     },
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//         },
//         decrement: (state) => {
//             state.value -= 1;
//         },
//         incrementByAmount: (state, action) => {
//             state.value += action.payload
//         }
//     }
// });

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// });

import { configureStore } from '@reduxjs/toolkit';
function reducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

// Создание хранилища (store)
const store = configureStore({
    reducer: reducer,
});

export default store;