import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { Movies } from '../Data/MovieData'
import MovieInfo from '../Component/Single/MovieInfo'
import MovieCasts from '../Component/Single/MovieCasts'
import MovieRates from '../Component/Single/MovieRates'
import TopRated from '../Component/Home/TopRated'
function SingleMovie() {
  const {id}=useParams()
  const movie=Movies.find((movie)=>movie.name===id)
  return (
    <Layout>
      <MovieInfo movie={movie}/>
      <div className='container mx-auto px-2 my-6 gap-2 bg-green-400  '>
        {/* <MovieCasts/> */}
        {/* <TopRated/> */}
        {/* <MovieRates/> */}
      </div>
    </Layout>
   
  )
}

export default SingleMovie
