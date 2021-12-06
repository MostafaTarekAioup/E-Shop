import { createSlice } from "@reduxjs/toolkit";
import { useAuth0 } from "@auth0/auth0-react";

const initialState = {
    user:'mostafa'
}

const userSlice = createSlice({
    name : 'user_slice',
    initialState,
    reducers:{
        getUser(state){
            console.log(state.user)
        }
    }
})
export const userSliceActions = userSlice.actions

export default userSlice