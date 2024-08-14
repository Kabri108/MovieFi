import React, { useState } from 'react';
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
const App = () => {
  Aos.init();

  const [showToasts, setShowToasts] = useState(false); // Example state for toast container

  const showToast = () => {
    // Logic to trigger toast notification
    setShowToasts(true);
  };
  return (
    <>
      {showToast && <ToastContainer />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/movies" element={<MoviesPage />} />
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
            {/* <Route path="/Favorites" element={<FavoritesMovies />} />
            <Route path="/Favorites" element={<FavoritesMovies />} />
            <Route path="/Favorites" element={<FavoritesMovies />} /> */}
          </Route>
        </Route>
      </Routes>
      {/* </ToastContainer> */}
    </>
  );
};

export default App;
