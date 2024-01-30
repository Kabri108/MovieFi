import {combineReducers,configureStore,} from '@reduxjs/toolkit'
import * as User from './Reducers/userReducers'
const rootReducer=combineReducers({
    //Add your reducers here
    //user reducer
    userLogin:User.userLoginReducer,
    userRegister:User.user
})

//initialState
const initialState={};
export const store=configureStore({
    reducer:rootReducer,
    preloadedState:initialState
})