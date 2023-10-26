import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState=[
    {id:'1',title:'learn redux toolkit', content:"i am learning"},
    {id:'2',title:'slices it is', content:"the more I say slice"}
]; 

const postsSlice= createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
        reducer(state,action){
            state.push(action.payload)
        },
        prepare(title,content,userId){
            return{
                payload:{
                    title,
                    content,
                    id:nanoid()
                }
            }
        }
    }
    }
})
export const selectAllPosts =(state)=> state.posts; 
export const {postAdded}= postsSlice.actions
export default postsSlice.reducer
