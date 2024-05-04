import * as userConstants from '../Constants/userConstants'
import * as userApi from '../APIs/userService'
import { ErrorAction } from '../Protection';

//login action 

const loginAction =(data)=>async(dispatch)=>{
    try {
        dispatch({type:userConstants.USER_LOGIN_REQUEST});
        const responce=await userApi.loginService(data)
        dispatch({type:userConstants.USER_LOGIN_SUCCESS,payload:responce})
    } catch (error) {
        ErrorAction(error,dispatch,userConstants.USER_LOGIN_FAIL)
    }
}

//register action 

const registerAction=(data)=>async(dispatch)=>{
    try {
        dispatch({type:userConstants.USER_REGISTE_REQUEST})
        const responce=await userApi.registerService(data)
        dispatch({type:userConstants.USER_REGISTE_SUCCESS,payload:responce})
        dispatch({type:userConstants.USER_LOGIN_SUCCESS,payload:responce})
        
    } catch (error) {
        ErrorAction(error,dispatch,userConstants.USER_REGISTE_FAIL)
    }
}

//logOut action

const logoutAction=()=>(dispatch)=>{
    userApi.logoutService();
    dispatch({type:userConstants.USER_LOGOUT})
    dispatch({type:userConstants.USER_LOGIN_RESET})
    dispatch({type:userConstants.USER_REGISTE_RESET})
}

export {loginAction,logoutAction,registerAction}