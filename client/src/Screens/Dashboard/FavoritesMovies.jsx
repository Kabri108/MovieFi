import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Table from '../../Component/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavoriteMovieAction, getFavoriteMoviesAction } from '../../Redux/Actions/userActions';
import Loader from '../../Component/Loader';
import toast from 'react-hot-toast';
import { Empty } from '../../Component/Notification/Empty';


function FavoritesMovies() {
  const dispatch=useDispatch()

  const {isLoading,isError,likedMovies}=useSelector((state)=>state.userGetFavoriteMovies)

  //delete
  const {isLoading:deleteLoading,isError:deleteError,isSuccess}=useSelector((state)=>state.userDeleteFavoriteMovies)

 //deletemovie handler
 const deleteMovieHandler=()=>{
  window.confirm("Are you sure you want to delete all movies") && dispatch(deleteFavoriteMovieAction())
 }
  //useEffect
  useEffect(()=>{
    dispatch(getFavoriteMoviesAction())
    if(isError || deleteError){
      toast.error(isError || deleteError);
      dispatch({type:isError? "GET_FAVORITE_MOVIES_RESET" :"DELETE_FAVORITE_MOVIES_RESET"})
    }
  },[dispatch,isError,deleteError])


  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <div className=" flex-btn gap-28">
          <h2 className="text-xl font-bold">Favorites Movies</h2>
          {
            likedMovies?.length > 0 &&
          <button
          disabled={deleteLoading}
          onClick={deleteMovieHandler}
          className="bg-main transitions hover:bg-subMain border border-subMain flex-rows gap-4 text-white py-3 px-6 rounded-sm w-full sm:w-auto font-semibold">
            {
              deleteLoading ? "Deleting... ":"Delete All"
            }
          </button>
          }
        </div>
          {
            isLoading ?( <Loader/>) :likedMovies.length >0 ? <Table data={likedMovies} admin={false} />:(<Empty message={"no movies found"}/>)
          }
      </div>
    </Sidebar>
  );
}

export default FavoritesMovies;
