import React from 'react'
import Title from '../Title'
import {FaStar} from 'react-icons/fa'
const TopRated = () => {
  return (
    <>
    <div className='py-16'>
      <Title title='Top Rated' Icon={FaStar}/>
    </div>
    </>
  )
}

export default TopRated