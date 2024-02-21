import React from 'react'
import Title from '../Title'
import { IoMdFilm } from 'react-icons/io';
import Movie from '../Movie';
import { Movies } from '../../Data/MovieData';
const PopularMovies = () => {
  return (
    <div className="my-16 mx-2">
      <Title title='Popular Movies' Icon={IoMdFilm} />
      <div className='grid sm:mt-12 mt-6 xl:grid-col-6 lg:grid-cols-5 sm:grid-cols-4 grid-cols-3 lg:gap-6 sm:gap-4 gap-2 '>
        {
          Movies.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default PopularMovies