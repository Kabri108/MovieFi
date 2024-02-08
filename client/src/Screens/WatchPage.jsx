import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { Movies } from '../Data/MovieData'

function WatchPage() {
    let {id}=useParams()
    const movie=Movies.find((movie)=>movie.name===id)
    const [play,setPlay]=useState(false)

  return (
    <Layout>
      <div className='container h-screen mx-auto bg-dry p-6 mb-12'>
      play
      </div>
    </Layout>
  )
}

export default WatchPage
