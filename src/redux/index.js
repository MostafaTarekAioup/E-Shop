import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './ProductSlice'
import cartSlice from './cardSlice'
import userSlice from './userSlice'
import shippingSlice from './shippingDetailsSlice'
import { productsApi } from './apiSlice'

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    shipping: shippingSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(productsApi.middleware),
})

export default store
