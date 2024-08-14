import {combineReducers,configureStore,} from '@reduxjs/toolkit'
import * as User from './Reducers/userReducers'
import * as movies from './Reducers/movieReducer'

import * as categories from './Reducers/categoriesReducer'
const rootReducer=combineReducers({
    //Add your reducers here
    //user reducer
    userLogin:User.userLoginReducer,
    userRegister:User.userRegisterReducer,
    userUpdateProfile:User.userupdateProfileReducer,
    userDeleteProfile:User.userDeleteProfileReducer,
    userChangepassword:User.userChangePasswordReducer,
    userGetFavoriteMovies:User.userGetFavoriteMoviesReducer,
    userDeleteFavoriteMovies:User.userDeleteFavoriteMoviesReducer,
    
    // Category REducer
    categoryGetAll:categories.getAllCategoriesReducer,


    //Movies reducer
    createMovie:movies.createMovieReducer,
    castsDeleteEditAdd:movies.CastReducer,
})

//get user info from localStorage
const userInfoFromStorage= localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo"))
:null;
//initialState
const initialState={
    userLogin:{userInfo:userInfoFromStorage}
};
export const store=configureStore({
    reducer:rootReducer,
    preloadedState:initialState
})
