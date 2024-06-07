import * as userConstants from '../Constants/userConstants'

//LOGIN

export const userLoginReducer=(state={},action)=>{

    switch(action.type){
        case userConstants.USER_LOGIN_REQUEST:
            return {isLoading:true};
        case userConstants.USER_LOGIN_SUCCESS:
            return {isLoading:false,userInfo:action.payload,isSuccess:true};
        case userConstants.USER_LOGIN_FAIL:
            return {isLoading:false,isError:action.payload};
        case userConstants.USER_LOGIN_RESET:
            return {};
        case userConstants.USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

//REGISTER

export const userRegisterReducer=(state={},action)=>{
    switch(action.type){
        case userConstants.USER_REGISTE_REQUEST:
            return {isLoading:true};
        case userConstants.USER_REGISTE_SUCCESS:
            return {isLoading:false,userInfo:action.payload,isSuccess:true};
        case userConstants.USER_REGISTE_FAIL:
            return {isLoading:false,isError:action.payload};
        case userConstants.USER_REGISTE_RESET:
            return {};
        default:
            return state;
    }
}

//UPDATE PROFILE 

export const updateProfileReducer=(state={},action)=>{
    switch(action.type){
        case userConstants.USER_UPDAT_PROFILE_REQUEST:
            return {isLoading:true};
        case userConstants.USER_UPDAT_PROFILE_SUCCESS:
            return {isLoading:false,userInfo:action.payload,isSuccess:true};
        case userConstants.USER_UPDAT_PROFILE_FAIL:
            return {isLoading:false,isError:action.payload};
        case userConstants.USER_UPDAT_PROFILE_RESET:
            return {};
        default:
            return state;
    }
}