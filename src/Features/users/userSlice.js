import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'0',name:'Shristi Gupta'},
    {id:'1', name: 'Neil bhatt'},
    {id:'2', name: 'aish ray'}
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers =(state)=> state.users;
export default userSlice.reducer