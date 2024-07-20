import * as userConstants from '../Constants/userConstants'
import * as userApi from '../APIs/userService'
import { ErrorAction, tokenProtection } from '../Protection';
import toast from 'react-hot-toast'

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

//update profile action
const updateProfileAction=(user)=> async(dispatch,getState)=>{
    try {
        dispatch({type:userConstants.USER_UPDAT_PROFILE_REQUEST})
        const responce=await userApi.updateProfileService(user,tokenProtection(getState))
        dispatch({type:userConstants.USER_UPDAT_PROFILE_SUCCESS,
            payload:responce
        })
       toast.success("Profile Updated")
       dispatch({type:userConstants.USER_LOGIN_SUCCESS,
        payload:responce
       })
        
    } catch (error) {
        ErrorAction(error,dispatch,userConstants.USER_UPDAT_PROFILE_FAIL)
    }
}

//delete profile action
const deleteProfileAction=()=>async(dispatch,getState)=>{
    try {
        dispatch({type:userConstants.USER_DELETE_PROFILE_REQUEST})
        await userApi.deleteProfileService(tokenProtection(getState));
        dispatch({type:userConstants.USER_DELETE_PROFILE_SUCCESS})
        toast.success("Profile Deleted")
        dispatch(logoutAction())
    } catch (error) {
        ErrorAction(error,dispatch,userConstants.USER_DELETE_PROFILE_FAIL)
    }
}

//changr password action
const changePasswordAction=(passwords)=>async(dispatch,getState)=>{
    try {
        dispatch({type:userConstants.USER_DELETE_PROFILE_REQUEST})
        const responce = await userApi.changePasswordService(
            passwords,
            tokenProtection(getState)
        );
        dispatch({
            type:userConstants.USER_CHANGE_PASSWORD_SUCCESS,
        payload:responce
        })
    } catch (error) {
        ErrorAction(error,dispatch,userConstants.USER_CHANGE_PASSWORD_FAIL)
    }
}

//get all favorite movies action
const getFavoriteMoviesAction=(dispatch,getState)=>async()=>{
    try {
        dispatch({type:userConstants.GET_FAVORITE_MOVIES_REQUEST})
        const responce=await userApi.getFavoriteMovies(tokenProtection(getState))
        dispatch({
            type:userConstants.GET_FAVORITE_MOVIES_SUCCESS,
            payload:responce,
        })
    } catch (error) {
        ErrorAction(error,dispatch,userConstants.GET_FAVORITE_MOVIES_FAIL)
    }
}
//delete all favorite movies action
export {loginAction,logoutAction,registerAction,updateProfileAction,deleteProfileAction,changePasswordAction,getFavoriteMoviesAction}