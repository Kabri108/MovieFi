import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../Layout/Layout';
import Filters from '../Component/Home/Filters';
import Movie from '../Component/Movie';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { getAllMoviesAction } from '../Redux/Actions/moviesAction';
import Loader from '../Component/Loader';
import { RiMovie2Line } from 'react-icons/ri';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';
import { LanguageData, RatesData, TimesData, YearData } from '../Data/FilterData';
import { useParams } from 'react-router-dom';

function MoviesPage() {
  const {search}=useParams()
  const dispatch = useDispatch();
  const [category, setCategory] = useState({ title: 'All Categories' })
  const [year, setYear] = useState(YearData[0])
  const [times, setTimes] = useState(TimesData[0])
  const [rates, setRates] = useState(RatesData[0])
  const [language, setLanguage] = useState(LanguageData[0])

  const sameClass = 'text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain'
  //all  movies
  const { isLoading, isError, movies, pages, page } = useSelector(
    (state) => state.getAllMovies
  );
  //get alll categories
  const { categories } = useSelector((state) => state.categoryGetAll);

// queries
const queries=useMemo(()=>{
  const query={
    category:category?.title === "All Categories" ? "": category?.title,
    time:times?.title.replace(/\D/g,""),
    language:language?.title === "Sort By Language" ? "": language?.title,
    rate:rates?.title.replace(/\D/g,""),
    year:year?.title.replace(/\D/g,""),
    search:search ? search :"",
  };
  return query
},[category,times,language,rates,year,search])
  // useEffect
  useEffect(() => {
    //error
    if (isError) {
      toast.error(isError);
    }
    //get all movies
   dispatch(getAllMoviesAction(queries))
  }, [dispatch, isError,queries]);


  // useEffect(() => {
  //   //error
  //   if (isError) {
  //     toast.error(isError);
  //   }
  //   //get all movies with parameters
  //   dispatch(getAllMoviesAction({
  //     category:'', // or set default category
  //     time: '',       // Add appropriate default values or state variables
  //     language: '',
  //     rate: '',
  //     year: '',
  //     search: '',
  //     pageNumber: 1    // Assuming pageNumber starts from 1
  //   }));
  // }, [dispatch, isError, categories]);  // Add categories to the dependency array
  
  //pagination next and pev page
  const nextpage=()=>{
    dispatch(getAllMoviesAction({
      ...queries,
      pageNumber:page +1
    }))
  }
  const pevpage=()=>{
    
    dispatch(getAllMoviesAction({
      ...queries,
      pageNumber:page -1
    }))
  }

const datas={
  categories:categories,
  category:category,
  setCategory:setCategory,
  language:language,
  setLanguage:setLanguage,
  rates:rates,
  setRates:setRates,
  times:times,
  setTimes:setTimes,
  year:year,
  setYear:setYear

}

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-2 ">
        <Filters data={datas} />
        <p className="text-lg font-medium my-6">
          Total{' '}
          <span className=" font-bold text-subMain ">
            {movies ? movies?.length : 0} 
          </span>{" "}
          Items found{
            search  && `for "${search}"`
          }
        </p>
        {
          isLoading ? (
            <div className="w-full gap-6 flex-colo min-h-screen">
              <Loader />
            </div>
          )
            :
            movies?.length > 0 ? (
              <>
               <div className="mt-6 sm:mt-10 grid xl:grid-cols-4 2xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 ">
          {movies?.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
        {/* loading more */}
        <div className="w-full flex-rows md:my-20 my-10 gap-6">
          <button 
          onClick={pevpage}
          disabled={page ===1} className={sameClass}>
            <TbPlayerTrackPrev className='text-xl'/>
          </button>
          <button
          onClick={nextpage}
          disabled={page === pages} className={sameClass}>
            <TbPlayerTrackNext className='text-xl'/>
          </button>
        </div>
              </>
            ) :
              (
                <div className="w-full gap-6 flex-colo min-h-screen">
                  <div className='w-24 h-24 p-5 rounded-full mb-4 bg-main text-subMain text-4xl text-colo'>
                    <RiMovie2Line/>
                  </div>
                  <p className='text-bold text-sm'>It seem's like we dont have any movie</p>
                </div>
              )
        }
       
      </div>
    </Layout>
  );
}

export default MoviesPage;

//////npm run dev
Filters