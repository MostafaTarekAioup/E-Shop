import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName:'',
    lastName:'',
    city:'',
    adress:'',
    postalCode:'',
    email:'',
    country:'',
    phoneNumber:'',
    cardHolderName:'',
    cardNumber:'',
    cardType:'',
    expire:'',
    ccv:''

}

const shippingSlice = createSlice({
    name:'shipping',
    initialState,
    reducers:{
        ubdateShippingValues(state,action){
            const {name , value} = action.payload
            state[name] = value
            console.log(state[name])
        },
        clearShipping(state){
            state.firstName = ''
            state.lastName = ''
            state.email = ''
            state.phoneNumber = ''
            state.postalCode=''
            state.expire=''
            state.cardHolderName = ''
            state.cardType = ''
            state.ccv = ''
            state.city = ''
            state.country = ''
            state.adress=''
        }
    }
})
export const shippingSliceActions = shippingSlice.actions
export default shippingSlice