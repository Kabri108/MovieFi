import React from 'react'
import Title from '../Title'
import { IoMdFilm } from 'react-icons/io';
import Movie from '../Movie';
import { Movies } from '../../Data/MovieData';
const PopularMovies = () => {
  return (
    <div className="my-16">
      <Title title='Popular Movies' Icon={IoMdFilm} />
      <div className='grid sm:mt-12 mt-6 xl:grid-col-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {
          Movies.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default PopularMovies