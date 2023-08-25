import { createSlice } from "@reduxjs/toolkit";
export const loggedslice =createSlice({
    name:"logged",
    initialState :{
        loggedIn:false
    },
    reducers :{
        login: (state)=> {console.log("in login action");return{loggedIn: true}},
        
       logout: (state)=> {console.log("in logout action");return{loggedIn: false}}

    }

})
export const{login,logout}=loggedslice.actions
export default loggedslice.reducer