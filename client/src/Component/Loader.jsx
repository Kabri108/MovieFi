import React from 'react'
import {PuffLoader} from 'react-spinners'
export default function Loader() {
  return (
    <div className='w-full py-4 px-2 flex-colo'>
      <PuffLoader color='#FFB000'/>
    </div>
  )
}
