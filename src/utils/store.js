import { configureStore } from '@reduxjs/toolkit'
// import { createStore,  } from 'redux'
import userReduce from "./userSlice"
import moviesSlice from './moviesSlice';

 const store = configureStore({
     reducer: { 
         user: userReduce,
         movies : moviesSlice,
    },
 })

export default store;