import React from 'react'
import {Link} from 'react-router-dom'
import {BiHomeAlt} from 'react-icons/bi'
const NotFound = () => {
  return (
    <div className='flex-colo w-full min-h-screen text-white bg-main lg:py-10 py-2 px-6 gap-8'>
      <img src="/images/404-error-page.png" className="w-full h-96 object-contain" alt='notfound'/>
      <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
      <p className='font-medium text-border leading-6'>The page you are looking for does not exist. You may have mistyped the URL </p>
      <Link
      to="/"
      className='bg-subMain gap-4 transitions text-white font-medium py-3 px-6 hover:text-main flex-rows  rounded-md'>
      <BiHomeAlt/> Back Home
      </Link>
    </div>
  )
}

export default NotFound