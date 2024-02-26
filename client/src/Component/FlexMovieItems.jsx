import React from 'react';
import { IoIosTime } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { MdMovieFilter } from 'react-icons/md';
const FlexMovieItems = ({ movie }) => {
  return (
    <>
      <div className="flex-colo bg-subMain text-xs px-2 py-1 font-bold">
        HD 4K
      </div>
      <div className="flex flex-row items-center gap-2 ">
        <MdMovieFilter className="text-subMain h-4 w-4" />
        <span className="text-sm font-medium">{movie.category}</span>
      </div>
      <div className="flex flex-row items-center gap-2 ">
        <MdDateRange className="text-subMain h-4 w-4" />
        <span className="text-sm font-medium">{movie.year}</span>
      </div>
      <div className="flex flex-row items-center gap-2 ">
        <IoIosTime className="text-subMain h-4 w-4" />
        <span className="text-sm font-medium">{movie.time}Hr</span>
      </div>
    </>
  );
};

export default FlexMovieItems;
