import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import { FaSearch,FaHeart,FaRegUserCircle } from "react-icons/fa";
import { TbUserHexagon } from "react-icons/tb";



const Navbar = () => {
  const hover='hover:text-subMain transitions t-white';
  const Hover=({isActive})=>(isActive? 'text-subMain' : hover)
  return (
    <>
    <div className='bg-main sticky top-0 z-20'>
      <div className="container mx-auto py-6 px-2 lg:grid gap-8 grid-cols-7 justify-between items-center">
        <div className='col-span-1 lg:block hidden'>
          <Link to='/'>
           <img src="/images/logo.png" alt="logo" className=' w-full h-12' />
          </Link>
        </div>
        <div className=' col-span-3'>
          <form className=' w-full text-sm bg-dryGray rounded flex-btn gap-4'>
            <button type='submit' className=' bg-subMain w-12 flex-colo h-12 rounded text-white'><FaSearch /></button>
            <input type="text" placeholder='Search movie name' className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent px-2 border-none text-black ' />
          </form>
        </div>
        <div className='col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'>
          <NavLink to='/movies' className={Hover}>Movies</NavLink>
          <NavLink to='/about-us' className={Hover}>About Us</NavLink>
          <NavLink to='/contact-us' className={Hover}>Contact Us</NavLink>
          <NavLink to='/login' className={Hover}>
            <TbUserHexagon className='w-8 h-8'/>
          </NavLink>
          <NavLink to='/login' className={`${Hover} relative`}>
            <FaHeart className='w-6 h-6 hover:subMain'/>
            <div className='w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1'>
              2
            </div>
          </NavLink>
        </div>
      </div>
      </div> 
    </>
  )
}

export default Navbar