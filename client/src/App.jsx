import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import NotFound from './Screens/NotFound'
import MoviesPage from './Screens/Movies'
import SingleMovie from './Screens/SingleMovie'
import WatchPage from './Screens/WatchPage'
import Login from './Screens/Login'
import Register from './Screens/Register'
import Profile from './Screens/Dashboard/Profile'
import Aos from 'aos'
import Password from './Screens/Dashboard/Password'
import FavoritesMovies from './Screens/Dashboard/FavoritesMovies'
const App = () => {
  Aos.init();
  return (
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='/movie/:id' element={<SingleMovie/>}/>
        <Route path='/watch/:id' element={<WatchPage/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/Password' element={<Password/>}/>
        <Route path='/Favorites' element={<FavoritesMovies/>}/>
      </Routes>
  )
}

export default App