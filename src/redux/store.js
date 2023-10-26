import {configureStore} from '@reduxjs/toolkit';
import counterReducer, { counterSlice } from '../Features/Counter/CounterSlice';
import postsReducer from '../Features/post/postsSlice'
import userReducer from '../Features/users/userSlice';
export const store=configureStore({
    reducer:{
      counter: counterReducer,
      posts:  postsReducer,
      users: userReducer
    }
})