import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    apiUrl:'https://course-api.com/react-store-products',
}
const productsSlice = createSlice({
    name:'products_slice',
    initialState:initialState,
    reducers:{
        fetchData(state,action){
            state.products = action.payload.data
        }
    }

})

export const productsSliceActions = productsSlice.actions

export default productsSlice