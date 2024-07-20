import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Table from '../../Component/Table';
import { Movies } from '../../Data/MovieData';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteMoviesAction } from '../../Redux/Actions/userActions';

function FavoritesMovies() {
  const dispatch=useDispatch()

  const {isLoading,isError,likedMovies}=useSelector((state)=>state.userGetFavoriteMovies)

  //useEffect

  useEffect(()=>{
    dispatch(getFavoriteMoviesAction())
    if(isError){
      toast.error(isError);
      dispatch({type:"GET_FAVORITE_MOVIES_RESET"})
    }
  },[dispatch,isError])
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <div className=" flex-btn gap-28">
          <h2 className="text-xl font-bold">Favorites Movies</h2>
          <button className="bg-main transitions hover:bg-subMain border border-subMain flex-rows gap-4 text-white py-3 px-6 rounded-sm w-full sm:w-auto font-semibold">
            {' '}
            Delete All
          </button>
        </div>
          {
            isLoading ? <Loader/> :likedMovies.length >0 ? <Table data={likedMovies} admin={false} />: <p>Empty</p>
          }
      </div>
    </Sidebar>
  );
}

export default FavoritesMovies;
