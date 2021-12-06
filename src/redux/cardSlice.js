import { createSlice } from "@reduxjs/toolkit";
// initial states
const initialState = {
    cardData:localStorage.getItem('cart_items') ? JSON.parse(localStorage.getItem('cart_items')) : [],
    total_items:0,
    total_amount:0,
    shipping_fee:1099,
    taxes:0
}
// cart slice 
const cartSlice = createSlice({
    name:'cart_slice',
    initialState,
    reducers:{
        // add to cart reducer
        addToCard(state , action){
            state.cardData.push(action.payload.data)
            console.log(state.cardData)
        },
        // update cart items amount reducer
        updateCartAmount(state , action){
            const {amount=1 , id , type , color} = action.payload
            let indexitem = state.cardData.findIndex((item)=>item.id === id && item.color === color)
            let newAmount = state.cardData[indexitem].amount
            // increase 
            if(type === 'increase'){
                newAmount += amount
                if(newAmount >= state.cardData[indexitem].stock){
                    newAmount = state.cardData[indexitem].stock
                }
                state.cardData[indexitem].amount = newAmount
            }
            // decrease
            if(type === 'decrease'){
                newAmount -= amount
                if(state.cardData[indexitem].amount === 1){
                    newAmount = 1
                }
                state.cardData[indexitem].amount = newAmount
            }
        },
        // remove items from cart reducer
        removeCartItem(state , action){
            const {newId} = action.payload
            let newCartData = state.cardData.filter((item)=> item.newId !== newId )
            state.cardData = newCartData
        },
        // clear cart reducer
        claerCart(state){
            state.cardData =[]
        },
        // update check out prices and subtotal
        updateCheckOutValues(state){
            const {total_items , total_amount} = state.cardData.reduce((total , cartItem)=>{
                const {amount , price} = cartItem
                total.total_items += amount
                total.total_amount += amount*price
                return total
            },{
                total_items:0,
                total_amount:0,
            })
            state.total_amount = total_amount
            state.total_items = total_items
            state.taxes = total_amount * (5/100)
        }
    }

})

export const cartSliceActions = cartSlice.actions
export default cartSlice