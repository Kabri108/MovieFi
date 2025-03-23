import toast from "react-hot-toast";
import { likedMovieAction } from "../Redux/Actions/userActions";
import { useSelector } from "react-redux";

//check if movie is added to favorites 

const IfMovieLiked = (movie)=>{
    const{likedMovies}= useSelector(state =>state.userGetFavoriteMovies)
    return likedMovies?.find(likedMovie=>likedMovie?.id === movie._id)
}


//like movie functionality
const LikeMovie =(movie,dispatch,userInfo)=>{
    return !userInfo
    ? toast.error("Please Login to add to favorites")
    : dispatch(
        likedMovieAction({
            movieId:movie._id,
        })
    )
}

export {IfMovieLiked,LikeMovie}