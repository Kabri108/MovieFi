import React, { useState } from 'react'
import Title from '../Title'
import { FaStar, FaHeart } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Movies } from '../../Data/MovieData';
import { Link } from 'react-router-dom';
import RatingStar from './RatingStar';
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs'
import Movie from '../Movie';


const TopRated = () => {
  const [nextEl, setNextEl] = useState(null)
  const [prevEl, setPrevEl] = useState(null)

  return (
    <>
      <div className='py-8'>
        <Title title='Top Rated' Icon={FaStar} />
        <div className="mt-10 relative">
          <button className='sliderbtn absolute z-10  translate-y-32 ' ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <Swiper
            navigation={{ nextEl, prevEl }}
            slidesPerView={5}
            spaceBetween={40}
            autoplay={true}
            speed={1000}
            loop={true}
            mousewheel={true}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              360:{
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480:{
                slidesPerView: 3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}

          >
            {
              Movies.map((movie, index) => (
                <SwiperSlide key={index}>
                  <div className='p-2 h-rate hovered border border-border bg-dry  rounded-lg overflow-hidden  '>
                    <img src={`/images/movies/${movie?.image}`} alt={movie.name} className='w-full h-full object-cover rounded-lg' />
                    <div className='px-4 gap-6 hoveres text-center absolute bg-black bg-opacity-70 top-0 bottom-0 left-0 right-0 '>
                      <button className='w-12 h-12  flex-colo transitions hover:bg-subMain rounded-lg bg-white bg-opacity-30 text-white '><FaHeart /></button>
                      <Link className='font-semibold text-xl' to={`/movies/${movie.name}`}>{movie.name}</Link>
                      <div className='flex gap-2 text-star'>
                        <RatingStar value={movie.rate} />
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
              ))
            }
          </Swiper>
          <button className='sliderbtn absolute right-0  -translate-y-40 z-10' ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </>
  )
}

export default TopRated