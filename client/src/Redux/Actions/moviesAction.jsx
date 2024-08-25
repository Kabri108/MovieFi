import { ErrorAction, tokenProtection } from '../Protection';
import * as moviesConstants from '../Constants/moviesConstants';
import * as moviesAPIs from '../APIs/MovieServices';

//get all movies action
export const getAllMoviesAction =
  ({
    category = '',
    time = '',
    language = '',
    rate = '',
    year = '',
    search = '',
    pageNumber = '',
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: moviesConstants.MOVIE_LIST_REQUEST });
      const responce = await moviesAPIs.getAllMoviesService(
        category,
        time,
        language,
        rate,
        year,
        search,
        pageNumber
      );
      dispatch({ type: moviesConstants.MOVIE_LIST_SUCCESS, payload: responce });
    } catch (error) {
      ErrorAction(error, dispatch, moviesConstants.MOVIE_LIST_FAIL);
    }
  };

///create movie action
export const createMovieAction = (movie) => async (dispatch, getState) => {
  try {
    dispatch({ type: moviesConstants.CREATE_MOVIE_REQUEST });
    const responce = await moviesAPIs.createMovieService(
      tokenProtection(getState),
      movie
    );
    dispatch({ type: moviesConstants.CREATE_MOVIE_SUCCESS, payload: responce });
    toast.success('Movie created successfull');
    dispatch(deleteAllCastAction());
  } catch (error) {
    ErrorAction(error, dispatch, moviesConstants.CREATE_MOVIE_FAIL);
  }
};

// / CASTS//////////////

// add casts
export const addCastAction = (id) => async (dispatch, getState) => {
  dispatch({ type: moviesConstants.ADD_CAST, payload: cast });
  localStorage.setItem('casts', JSON.stringify(getState().casts.casts));
};

// remove casts
export const removeCastAction = (id) => async (dispatch, getState) => {
  dispatch({ type: moviesConstants.DELETE_CAST, payload: id });
  localStorage.setItem('casts', JSON.stringify(getState().casts.casts));
};

// adeditd casts
export const editCastAction = (cast) => async (dispatch, getState) => {
  dispatch({ type: moviesConstants.EDIT_CAST, payload: cast });
  localStorage.setItem('casts', JSON.stringify(getState().casts.casts));
};

// /delete all cast
export const deleteAllCastAction = (id) => async (dispatch) => {
  dispatch({ type: moviesConstants.RESET_CAST });
  localStorage.setItem('casts');
};
