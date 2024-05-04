import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from '../../Data/MovieData'
import { Autoplay } from 'swiper/modules'
import FlexMovieItems from '../FlexMovieItems';
import { Link } from 'react-router-dom';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css/pagination'
import { FaHeart } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='relative w-full px-4 '>
      <Swiper
        direction='horizontal'
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay,Mousewheel,Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true
        }}
        mousewheel={true}
        className='w-full xl:h-96 lg:h-rate bg-dry h-48 mySwiper'
      >
        {
          Movies.slice(0, 6).map((movie, index) => (
            <SwiperSlide key={index} className=' relative rounded overflow-hidden'>
              <img src={`/images/movies/${movie.image}`}
                alt={movie.name}
                className='w-full h-full object-cover' />
              <div className=' absolute liner-bg xl:pl-52  sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center  lg:gap-8 md:gap-5 gap-4'>

                <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                  {movie.name}
                </h1>
                <div className='flex gap-5 items-center text-dryGray '>
                  <FlexMovieItems movie={movie}/>
                </div>
                <div className='flex flex-row gap-5 items-center'>
                  <Link to={`/movie/${movie.name}`}
                  className='bg-subMain transitions rounded font-medium px-6 py-3 hover:text-subMain hover:bg-transparent hover:border border-subMain text-'>Watch</Link>
                   <button className='w-12 h-12  flex-colo transitions hover:bg-subMain rounded-lg bg-white bg-opacity-30 text-white '><FaHeart /></button>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Banner