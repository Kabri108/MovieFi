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
    userLikeMovie:User.userLikedMovieReducer,
    // Category REducer
    categoryGetAll:categories.getAllCategoriesReducer,
    categoryCreate:categories.createCategoryReducer,
    categoryUpdate:categories.updateCategoryReducer,
    categoryDelete:categories.deleteCategoryReducer,


    //Movies reducer
    getAllMovies:movies.getALlMoviesReducer,
    getRandomeMovies:movies.moviesRandomReducer,
    getMoviesById:movies.moviesDetailsReducer,
    getTopRatedMovies:movies.moviesTopRatedReducer,

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
