import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './ProductSlice'

const store = configureStore({
    reducer:{
        products:productsSlice.reducer,
    }
})

export default store