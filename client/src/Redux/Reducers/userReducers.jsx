import * as userConstants from '../Constants/userConstants';

//LOGIN

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_REQUEST:
      return { isLoading: true };
    case userConstants.USER_LOGIN_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case userConstants.USER_LOGIN_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_LOGIN_RESET:
      return {};
    case userConstants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

//REGISTER

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTE_REQUEST:
      return { isLoading: true };
    case userConstants.USER_REGISTE_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case userConstants.USER_REGISTE_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_REGISTE_RESET:
      return {};
    default:
      return state;
  }
};

//UPDATE PROFILE

export const userupdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_UPDAT_PROFILE_REQUEST:
      return { isLoading: true };
    case userConstants.USER_UPDAT_PROFILE_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case userConstants.USER_UPDAT_PROFILE_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_UPDAT_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

//DELETE PROFILE

export const userDeleteProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_DELETE_PROFILE_REQUEST:
      return { isLoading: true };
    case userConstants.USER_DELETE_PROFILE_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case userConstants.USER_DELETE_PROFILE_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_DELETE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

//CHANGE PASSWORD

export const userChangePasswordReducer = (state = {}, action) => {
  switch (action.payload) {
    case userConstants.USER_CHANGE_PASSWORD_REQUEST:
      return { isLoading: true };
    case userConstants.USER_CHANGE_PASSWORD_SUCCESS:
      return { isLoading: false,isSuccess:true,message:action.payload };
    case userConstants.USER_CHANGE_PASSWORD_FAIL:
      return { isLoading: false,isError:action.payload };
    case userConstants.USER_CHANGE_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};
