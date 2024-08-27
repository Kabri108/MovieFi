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

//Get randome movies
export const moviesRandomReducer=(state={movies:[]},action)=>{
    switch (action.type) {
        case moviesConstants.MOVIE_RANDOM_REQUEST:
            return{isLoading:true} ;
        case moviesConstants.MOVIE_RANDOM_SUCCESS:
            return{isLoading:false, movies:action.payload} ;
        case moviesConstants.MOVIE_RANDOM_FAIL:
            return{isLoading:false,isError:action.payload} ;
        default:
            return state;
    }
}

//Get movies by id 
export const moviesDetailsReducer=(state={movies:[]},action)=>{
    switch (action.type) {
        case moviesConstants.MOVIE_DETAILS_REQUEST:
            return{isLoading:true} ;
        case moviesConstants.MOVIE_DETAILS_SUCCESS:
            return{isLoading:false, movies:action.payload} ;
        case moviesConstants.MOVIE_DETAILS_FAIL:
            return{isLoading:false,isError:action.payload} ;
        case moviesConstants.MOVIE_DETAILS_RESET:
            return{movies:{}} ;
        default:
            return state;
    }
}

//Get Top rated movies 
export const moviesTopRatedReducer=(state={movies:[]},action)=>{
    switch (action.type) {
        case moviesConstants.MOVIE_TOP_RATED_REQUEST:
            return{isLoading:true} ;
        case moviesConstants.MOVIE_TOP_RATED_SUCCESS:
            return{isLoading:false, movies:action.payload} ;
        case moviesConstants.MOVIE_TOP_RATED_FAIL:
            return{isLoading:false,isError:action.payload} ;
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

