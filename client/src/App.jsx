import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoriesAction } from './Redux/Actions/CategoriesAction';
import MoviesList from './Screens/Dashboard/Admin/MovieList';
import { getFavoriteMoviesAction } from './Redux/Actions/userActions';
import toast from 'react-hot-toast';
import { getAllMoviesAction } from './Redux/Actions/moviesAction';

const App = () => {
  Aos.init();
  
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { isError, isSuccess } = useSelector((state) => state.userLikeMovie);
  const { isError: catError } = useSelector((state) => state.categoryGetAll);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllMoviesAction());
    
    if (userInfo) {
      dispatch(getFavoriteMoviesAction());
    }
    
    if (isError) {
      toast.error("Something went wrong with liking the movie.");
      dispatch({ type: "LIKE_MOVIE_RESET" });
    }
    
    if (catError) {
      toast.error("Something went wrong with fetching categories.");
    }

    if (isSuccess) {
      dispatch({ type: "LIKE_MOVIE_RESET" });
    }
  }, [dispatch, userInfo, isError, catError, isSuccess]);

  return (
    <>
      <ToastContainer />
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
          
          {/* Private Routes */}
          <Route element={<ProtectedRouter />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/password" element={<Password />} />
            <Route path="/favorites" element={<FavoritesMovies />} />
            
            {/* Admin Routes */}
            <Route element={<AdminRouterProtection />}>
              <Route path="/addmovie" element={<AddMovie />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/users" element={<Users />} />
              <Route path="/movieslist" element={<MoviesList />} />
            </Route>
          </Route>
        </Routes>
      </DrawerContext>
    </>
  );
};

export default App;
