import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaSearch, FaHeart, FaRegUserCircle } from "react-icons/fa";
import { TbUserHexagon } from "react-icons/tb";
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [search,setSearch]=useState("");
  const navigate=useNavigate()
  const { userInfo } = useSelector((state) => state.userLogin)
  const hover = 'hover:text-subMain transitions t-white';
  const Hover = ({ isActive }) => (isActive ? 'text-subMain' : hover)

const handelSearch=(e)=>{
  e.preventDefault();
  if(search.trim()){
    navigate(`/movies/${search}`)
    setSearch(search)
  }
  else{
    navigate(`/movies`)
  }
}

  return (
    <>
      <div className='bg-main sticky top-0 z-20'>
        <div className="container mx-auto py-6 px-2 lg:grid gap-8 grid-cols-7 justify-between items-center">
          <div className='col-span-1 lg:block hidden'>
            <Link to='/'>
              <img src="/images/logo.png" alt="logo" className=' w-full h-12' />
            </Link>
          </div>
          {/* search from */}
          <div className=' col-span-3'>
            <form onSubmit={handelSearch}className=' w-full text-sm bg-dryGray rounded flex-btn gap-4'>
              <button type='submit' className=' bg-subMain w-12 flex-colo h-12 rounded text-white'  aria-label='Search'><FaSearch /></button>
              <input type="search" 
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder='Search movie name' className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent px-2 border-none text-black ' />
            </form>
          </div>
          <div className='col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'>
            <NavLink to='/movies' className={Hover}>Movies</NavLink>
            <NavLink to='/aboutUs' className={Hover}>About Us</NavLink>
            <NavLink to='/contactUs' className={Hover}>Contact Us</NavLink>
            <NavLink to={
              userInfo?.isAdmin ? "/dashboard" : userInfo ? "/profile" : "/login"
            } className={{Hover}}>
              {
                userInfo ? (
                  <img src={userInfo?.image ? userInfo?.image : "/images/ai.jpg"} alt={userInfo?.fullName} className='w-8 h-8 rounded-full border border-subMain object-cover'/>
                ):
                <TbUserHexagon className='w-8 h-8' />
              }
            </NavLink>
            <NavLink to="/favorites" className={`${Hover} relative`}>
            <FaHeart className='w-6 h-6 hover:subMain' />
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