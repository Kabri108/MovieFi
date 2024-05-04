import React from 'react';
import Sidebar from './Sidebar';
import Table from '../../Component/Table';
import { Movies } from '../../Data/MovieData';

function FavoritesMovies() {
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <div className=" flex-btn gap-28">
          <h2 className="text-xl font-bold">Favorites Movies</h2>
          <button className="bg-main transitions hover:bg-subMain border border-subMain flex-rows gap-4 text-white py-3 px-6 rounded-sm w-full sm:w-auto font-semibold">
            {' '}
            Delete All
          </button>
        </div>
          <Table data={Movies} />
      </div>
    </Sidebar>
  );
}

export default FavoritesMovies;
