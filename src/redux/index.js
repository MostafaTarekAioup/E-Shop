import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './ProductSlice'
import cartSlice from './cardSlice'
import userSlice from './userSlice'
import shippingSlice from './shippingDetailsSlice'

const store = configureStore({
    reducer:{
        products:productsSlice.reducer,
        cart:cartSlice.reducer,
        user:userSlice.reducer,
        shipping:shippingSlice.reducer
    }
})

export default store