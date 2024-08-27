import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Component/Home/Banner'
import PopularMovies from '../Component/Home/PopularMovies'
import TopRated from '../Component/Home/TopRated'
import Promos from '../Component/Home/Promos'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMoviesAction, getRandomeMoviesAction, getTopratedMoviesAction } from '../Redux/Actions/moviesAction'
import toast from 'react-hot-toast'

const HomeScreen = () => {

  const dispatch=useDispatch()
  const { isLoading:randomLoading, isError:randomError, movies:randomMovies } = useSelector(
    (state) => state.getRandomeMovies
  ); 
  const { isLoading:topLoading, isError:topError, movies:topMovies } = useSelector(
    (state) => state.getTopRatedMovies
  ); 

   const {isLoading,isError,movies}=useSelector((state)=>state.getAllMovies)
   
  //useEffect
  useEffect(()=>{
    //get random movies 
    dispatch(getRandomeMoviesAction())
    //get all movies
    dispatch(getAllMoviesAction({}))
    //get top rated movies
    dispatch(getTopratedMoviesAction())

    //error
    if(topError || randomError){
      toast.error("Something went wrong!")
    }
  },[dispatch,randomError,topError])
  
  return (
    <Layout>
      <div className=' mx-auto min-h-screen px-2 mb-4'> 
        <Banner movies={movies} isLoading={isLoading}/> 
        <PopularMovies movies={randomMovies} isLoading={randomLoading} /> 
        <Promos/>
        <TopRated movies={topMovies} isLoading={topLoading}/> 
      </div>
    </Layout>
  )
}

export default HomeScreen