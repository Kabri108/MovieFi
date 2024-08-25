import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import AboutUs from './Screens/AboutUs';
import NotFound from './Screens/NotFound';
import MoviesPage from './Screens/Movies';
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Profile from './Screens/Dashboard/Profile';
import Aos from 'aos';
import Password from './Screens/Dashboard/Password';
import FavoritesMovies from './Screens/Dashboard/FavoritesMovies';
import ToastContainer from './Component/Notification/ToastContainer';
import ContactUs from './Screens/ContactUs';
import { AdminRouterProtection, ProtectedRouter } from './ProtectedRouter';
import AddMovie from './Screens/Dashboard/Admin/AddMovie';
import Dashboard from './Screens/Dashboard/Admin/Dashboard';
import DrawerContext from './Context/DrawerContext';
import Categories from './Screens/Dashboard/Admin/Catagories';
import Users from './Screens/Dashboard/Admin/Users';
import { useDispatch } from 'react-redux';
import { getAllCategoriesAction } from './Redux/Actions/CategoriesAction';
import MoviesList from './Screens/Dashboard/Admin/MovieList';
const App = () => {
  Aos.init();

  const [showToasts, setShowToasts] = useState(false); // Example state for toast container

  const showToast = () => {
    // Logic to trigger toast notification
    setShowToasts(true);
  };
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getAllCategoriesAction())
},[dispatch])

  return (
    <>
      {showToast && <ToastContainer />}
      <DrawerContext>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:search" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* PRIVATE PUBLIC ROUTES */}
        <Route element={<ProtectedRouter />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Favorites" element={<FavoritesMovies />} />
          {/* ADMIN ROUTES */}
          <Route element={<AdminRouterProtection />}>
            <Route path="/addmovie" element={<AddMovie/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/users" element={<Users/>} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/movieslist" element={<MoviesList />} />
            
          </Route>
        </Route>
      </Routes>
      </DrawerContext>
      {/* </ToastContainer> */}
    </>
  );
};

export default App;
