import * as moviesConstants from "../Constants/moviesConstants"

//Get all movies 
export const getALlMoviesReducer=(state={movies:[]},action)=>{
    switch (action.type) {
        case moviesConstants.MOVIE_LIST_REQUEST:
            return {isloading:true};
        case moviesConstants.MOVIE_LIST_SUCCESS:
            return {
                isloading:false,
                movies:action.payload.movies,
                pages:action.payload.pages,
                page:action.payload.page,
                totalMovies:action.payload.totalMovies
            };
        case moviesConstants.MOVIE_LIST_FAIL:
            return {isloading:false,isError:action.payload};
        default:
            return state;
    }
}

//create movies
export const createMovieReducer=(state={},action)=>{
    switch (action.type) {
        case moviesConstants.CREATE_MOVIE_REQUEST:
            return{isLoading:true};
        case moviesConstants.CREATE_MOVIE_SUCCESS:
            return{isLoading:false,isSuccess:true};
        case moviesConstants.CREATE_MOVIE_FAIL:
            return{isLoading:false,isError:action.payload};
        case moviesConstants.CREATE_MOVIE_RESET:
            return{};
        default:
            return state;
    }
} 

//CASTS
export const CastReducer=(state={casts:[]},action)=>{
    switch (action.type) {
        case moviesConstants.ADD_CAST:
            return{casts:[...state.casts,action.payload]};
        case moviesConstants.EDIT_CAST:
            const updatedCasts=state.casts.map((cast)=>
                cast.id===action.payload.id? action.payload :cast
            )
            return{
                casts:updatedCasts
            };
        case moviesConstants.DELETE_CAST:
            return{
                ...state,
                casts:state.casts.filter((cast)=>cast.id !== action.payload)
            };
        case moviesConstants.RESET_CAST:
            return {casts:[]}
        default:
            return state;
    }
} 

