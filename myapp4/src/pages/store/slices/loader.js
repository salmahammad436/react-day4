
import { createSlice } from "@reduxjs/toolkit"





export const loaderSlice=createSlice({
name:'Loader',
initialState:{Loader:false},
reducers:{changeLoader:(state,action)=>{
    state.Loader=action.payload
}}


})

export const {changeLoader}=loaderSlice.actions
export default loaderSlice.reducer

