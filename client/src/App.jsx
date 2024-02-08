import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import NotFound from './Screens/NotFound'
import MoviesPage from './Screens/Movies'
import SingleMovie from './Screens/SingleMovie'
import WatchPage from './Screens/WatchPage'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='/movie/:id' element={<SingleMovie/>}/>
        <Route path='/watch/:id' element={<WatchPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  )
}

export default App