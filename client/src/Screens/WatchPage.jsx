import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { Movies } from '../Data/MovieData'
import {FaPlay} from 'react-icons/fa'

function WatchPage() {
    let {id}=useParams()
    const movie=Movies.find((movie)=>movie.name===id)
    const [play,setPlay]=useState(false)

  return (
    <Layout>
      <div className='container h-screen mx-auto bg-dry p-6 mb-12'>
      {
        play ? (
          <video controls autoPlay={play} className='w-full h-screen rounded'>
            <source src="/images/movie.mp4" type='video/mp4' title={movie?.name}/>
          </video>
        ):(
        <div className='w-full h-screen rounded-lg  overflow-hidden relative'>
          <div className='absolute top-0 bottom-0 right-0 left-0 h-full bg-main bg-opacity-30 flex flex-colo justify-center items-center'>
            <button onClick={()=>setPlay(true)} className='bg-white text-subMain rounded-full w-20 h-20 font-medium  text-xl flex-colo'>
              <FaPlay/>
            </button>
          </div>
          <img src={movie?.image ?`/images/movies/${movie.image}`
        : 'images/user.png'  
        } 
          alt={movie?.name} 
          className='w-full h-full object-cover'
          
          />
        </div>
        )
      }
      </div>
    </Layout>
  )
    }  

export default WatchPage
