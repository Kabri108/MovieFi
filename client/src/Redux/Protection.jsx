import { logoutAction } from './Actions/userActions';

export const ErrorAction = (error, dispatch, action) => {
  const message =
    error.responce && error.responce.data.message
      ? error.responce.data.message
      : error.message;

  if (message === 'Not authorized , token failed') {
    //we are going to logout if token failed
    dispatch(logoutAction());
  }
  return dispatch({ type: action, payload: message });
};

//api token protection

export const tokenProtection = (getState) => {

  const {userLogin: { userInfo },} = getState();
  if(!userInfo?.token){
    return null;
  }
  else{
    return userInfo?.token
  }
};
