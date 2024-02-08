import React from 'react'
import Title from '../Title'
import { FaUserFriends } from "react-icons/fa"
import {Swiper,  SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import {UsersData} from '../../Data/MovieData'
function MovieCasts() {
  return (
    <div className='my-12 '>
      <Title title="Casts" Icon={FaUserFriends} />
      <div className='mt-10'>
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1080: {
              slidesPerView: 5,
              spaceBetween:30,
            },
          }}>
            {
              UsersData.map((user,i)=>(
                <SwiperSlide key={i}>
                  <div className='w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800'>
                    <img src={`/images/${user.image}`} 
                    alt={user.name}
                    className='w-full h-64 object-cover rounded mb-4' />
                    <p className='text-sm'>{user?.name}</p>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
    </div>
    </div>
  )
}
export default MovieCasts
