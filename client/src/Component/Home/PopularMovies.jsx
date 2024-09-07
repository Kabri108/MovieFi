import React from 'react'
import Title from '../Title'
import { IoMdFilm } from 'react-icons/io';
import Movie from '../Movie';
import Loader from '../Loader';
import { Empty } from '../Notification/Empty';

const PopularMovies = ({movies,isLoading}) => {
  return (
    <div className="my-8 mx-2">
      <Title title='Popular Movies' Icon={IoMdFilm} />
      {
        isLoading ? <Loader/> :
        movies?.length > 0 ? (
          <div className='grid sm:mt-12 mt-6 xl:grid-col-6 lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 lg:gap-6 sm:gap-4 gap-2 '>
        {
          movies?.slice(0, 12).map((movie, index) => (
            <Movie key={index} movie={movie}/>
        ))}
      </div>
        )
        :(
          <div className="mt-6">
            <Empty message=" It seem's like we dont have any movie"/>
          </div>
        )
      }
      
      
    </div>
  )
}

export default PopularMovies