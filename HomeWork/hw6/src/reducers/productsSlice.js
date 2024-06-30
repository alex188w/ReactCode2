import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [
        { id: 1, name: "Телефон", description: "Samsung", price: 100, available: true },
        { id: 2, name: "Телевизор", description: "Toshiba150", price: 150, available: true },
        { id: 3, name: "Ноутбук", description: 'MSI-250', price: 250, available: true },

    ],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push({
                id: Date.now(),
                name: action.payload.name,
                description: action.payload.description,
                price: action.payload.price,
                available: true,
            })
        },

        deleteProduct: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            )
        },

        updateProduct: (state, action) => {
            const { id, name, description, price, available } = action.payload
            const product = state.products.find((product) => product.id === id)
            if (product) {
                product.name = name
                product.description = description
                product.price = price
                product.available = available
            }
        },

        changeAvailable: (state, action) => {
            state.products.forEach(product => {
                if (product.id === action.payload) {
                    product.available = !product.available;
                }
            });
        },
    }
},
)

export const { addProduct, deleteProduct, updateProduct, changeAvailable } =
    productsSlice.actions
export default productsSlice.reducer