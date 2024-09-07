import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { BsCollectionFill } from 'react-icons/bs';
import MovieCasts from '../Component/Single/MovieCasts';
import MovieInfo from '../Component/Single/MovieInfo';
import MovieRates from '../Component/Single/MovieRates';
import Title from '../Component/Title';
import ShareMovieModal from '../Component/modals/ShareModal';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Component/Loader';
import { RiMovie2Line } from 'react-icons/ri';
import {
  getAllMoviesAction,
  getMoviesByIdAction,
} from '../Redux/Actions/moviesAction';
import Movie from '../Component/Movie';

function SingleMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const sameClass = 'w-full gap-6 flex-colo min-h-screen';
  const dispatch = useDispatch();
  ///use Selector
  const { isLoading, isError, movie } = useSelector(
    (state) => state.getMoviesById
  );

  const { movies } = useSelector((state) => state.getAllMovies);
  //related movies
  const RelatedMovies = movies?.filter((m) => m.category === movie?.category);

  //useEffect
  useEffect(() => {
    //movie id
    dispatch(getMoviesByIdAction(id));
    //get all movies
    dispatch(getAllMoviesAction({}));
  }, [dispatch, id]);

  return (
    <Layout>
      {isLoading ? (
        <div className={sameClass}>
          <Loader />
        </div>
      ) : isError ? (
        <div className={sameClass}>
          <div className="flex-colo w-24 h-25 p-5 mb-4 rounded-full bg-dry text-subMain text-4xl">
            <RiMovie2Line />
          </div>
          <p className="text-border text-sm">Something went wrong</p>
        </div>
      ) : (
        <>
          <ShareMovieModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            movie={movie}
          />
          <MovieInfo movie={movie} setModalOpen={setModalOpen} />
          <div className="container mx-auto min-h-screen px-2 my-6">
            {/* movie cast */}
            {/* <MovieCasts /> */}
            {/* rate */}
            {/* <MovieRates movie={movie} /> */}
            {/* related */}
            {RelatedMovies?.length > 0 && (
              <div className="my-16">
                <Title title="Related Movies" Icon={BsCollectionFill} />
                <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                  {RelatedMovies?.map((movie) => (
                    <Movie key={movie?._id} movie={movie} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </Layout>
  );
}

export default SingleMovie;
