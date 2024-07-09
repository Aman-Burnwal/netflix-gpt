import { configureStore } from '@reduxjs/toolkit'
// import { createStore,  } from 'redux'
import userReduce from "./userSlice"

 const store = configureStore({
     reducer: { 
        user : userReduce
    },
 })

export default store;