import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../async/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});