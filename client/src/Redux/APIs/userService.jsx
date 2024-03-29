import Axios from "./Axios";

//register new user API call

const registerService= async(user)=>{
    const{data}=await Axios.post('/users',user);
    if(data){
        localStorage.setItem("userInfo",JSON.stringify(data))
    }
    return data;
}

//logout user Function

const logoutService=()=>{
    localStorage.removeItem('userInfo');
    return null;
}

//Login user API call

const loginService=async(user)=>{
    const {data}=await Axios.post('/user/login',user);
    if(data){
        localStorage.setItem('userInfo',JSON.stringify(data))
    }
    return data
}

export {registerService,loginService,logoutService}