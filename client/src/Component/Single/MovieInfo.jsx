import React from 'react';
import FlexMovieItems from '../FlexMovieItems';
import { FiLogIn } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';

function MovieInfo({ movie }) {
  return (
    <div className="w-full h-screen relative text-white">
      <img
        src={`/images/movies/${movie?.image}`}
        alt={movie.name}
        className="w-full hidden xl:inline-block  h-full object-cover "
      />
      <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 bottom-0 left-0 right-0">
        <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8 max-sm:gap-2 max-sm:py-4 ">
          <div className=" xl:col-span-1 w-full xl:order-none order-fast h-header bg-dry border border-gray-800 rounded-lg overflow-hidden  max-sm:h-56 ">
            <img
              src={`/images/movies/${movie?.image}`}
              alt={movie?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" col-span-2 md:grid grid-cols-5 gap-4 items-center ">
            <div className="col-span-3 flex flex-col gap-6 max-sm:gap-1">
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                {movie?.name}
              </h1>
              <div className="flex items-center gap-4 font-medium text-dryGray ">
                <FlexMovieItems movie={movie && movie} />
              </div>
              <p className="text-text text-sm leading-7">{movie.desc}</p>
              <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                <div className="col-span-1 flex-colo border-r border-border">
                  <button className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20">
                    <FaShareAlt />
                  </button>
                </div>
                <div className="col-span-2 flex-rows font-medium text-sm">
                  <p>Language :{' '}
                  <span className="ml-2 truncate">{movie?.language}</span>
                  </p>
                </div>
                <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-md">
                  <Link
                    to={`/watch/${movie?.name}`}
                    className="bg-dry hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3 max-sm:py-4  "
                  >
                    <FaPlay className="w-4 h-4" />
                    Watch
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-span-2 md:mt-2m flex justify-end '>
              <button className='md:w-1/4 w-full relative flex-colo  bg-subMain hover:bg-transparent border-2 border-subMain transitions md:h-64 h-20 rounded font-medium max-sm:h-14'>
                <div className='flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90'>
                  Download <FiLogIn className="w-6 h-6"/>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
