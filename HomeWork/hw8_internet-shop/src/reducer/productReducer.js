import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import products from '../data/productsData';

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: products }), 1000)
    );
});

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        productSlice: [],
        loadStatus: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loadStatus = "loading";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productSlice = action.payload.data;
                state.loadStatus = "success";
            })
            .addCase(getProducts.rejected, (state) => {
                state.loadStatus = "failed";
            });
    },
});

export default productSlice.reducer;