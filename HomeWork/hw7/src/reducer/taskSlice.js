import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasksData from '../data/data';

export const getTasks = createAsyncThunk("tasks/getTasks", async () => {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: tasksData }), 3000)
    );
});

const tasksSlice = createSlice({
    name: "taskSlice",
    initialState: {
        taskSlice: [],
        loadStatus: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.pending, (state) => {
                state.loadStatus = "loading";
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.taskSlice = action.payload.data;
                state.loadStatus = "success";
            })
            .addCase(getTasks.rejected, (state) => {
                state.loadStatus = "failed";
            });          
    },
});

export default tasksSlice.reducer;

