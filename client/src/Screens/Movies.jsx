import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import Filters from '../Component/Home/Filters'
import Movie from '../Component/Movie'
import {Movies} from '../Data/MovieData'
import {CgSpinner} from 'react-icons/cg'
function MoviesPage() {
  const maxpage=10
  const[page,setPage]=useState(maxpage)
  const HandelLoadingMore=()=>{
    setPage(page + maxpage)
  }
  return (
   <Layout>
    <div className='min-height-screen container mx-auto px-2 my-2'>
      <Filters/>
      <p className='text-lg font-medium my-6'>
        Total <span className=' font-bold text-subMain '> 
          {Movies?.length} Items found
        </span>

        <div className='mt-6 sm:mt-10 grid xl:grid-cols-4 2xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 '>
          {
            Movies.slice(0,page)?.map((movie,index)=>(
              <Movie key={index} movie={movie}/>
            ))
          }
        </div>
        <div className='w-full flex-colo md:my-20 my-10'>
          <button
          onClick={HandelLoadingMore}
          className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold'>
            Loading More<CgSpinner className=' animate-spin'/>
          </button>
        </div>
      </p>
    </div>
   </Layout>
  )
}

export default MoviesPage

