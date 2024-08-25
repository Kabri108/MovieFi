import React, { useEffect } from 'react';
import Sidebar from '../Sidebar';
import Table from '../../../Component/Table';
import { Movies } from '../../../Data/MovieData';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMoviesAction } from '../../../Redux/Actions/moviesAction';
import toast from 'react-hot-toast';
import { Empty } from '../../../Component/Notification/Empty';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';

function MoviesList() {
  const dispatch = useDispatch();
  const sameClass = 'text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain'
  const { isLoading, isError, movies, pages, page } = useSelector(
    (state) => state.getAllMovies
  );

  useEffect(() => {
    //error
    if (isError) {
      toast.error(isError);
    }
    dispatch(getAllMoviesAction({}));
  }, [dispatch, isError]);

  const nextpage = () => {
    dispatch(
      getAllMoviesAction({
        pageNumber: page + 1,
      })
    );
  };
  const pevpage = () => {
    dispatch(
      getAllMoviesAction({
        pageNumber: page - 1,
      })
    );
  };
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Movies List</h2>
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
            Delete All
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : movies?.length > 0 ? (
          <>
            <Table data={movies} admin={true} />
            {/* loading more */}
            <div className="w-full flex-rows md:my-20 my-5 gap-6">
              <button
                onClick={pevpage}
                disabled={page === 1}
                className={sameClass}
              >
                <TbPlayerTrackPrev className="text-xl" />
              </button>
              <button
                onClick={nextpage}
                disabled={page === pages}
                className={sameClass}
              >
                <TbPlayerTrackNext className="text-xl" />
              </button>
            </div>
          </>
        ) : (
          <Empty message={'you have no movies'} />
        )}
      </div>
    </Sidebar>
  );
}

export default MoviesList;
