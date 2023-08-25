import { createSlice } from "@reduxjs/toolkit";

//This function needs object as an argument
export const loggedSlice = createSlice({
    
    name:"logged",
    initialState : {
        loggedIn : false

    },
    //on the occurance of certain actions the state is modifies
    reducers : {
        login: (state) => { console.log("in login action") ;return {loggedIn: true}},

        logout: (state) => { console.log("in logout action") ;return {loggedIn: false}}
    }

})

export const {login,logout} = loggedSlice.actions
export const loggedReducer= loggedSlice.reducer