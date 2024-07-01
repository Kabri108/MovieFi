import Axios from "./Axios";

//register new user API call

const registerService= async(user)=>{
    
  try {
    const{data}=await Axios.post('/users',user);
    if(data){
        localStorage.setItem("userInfo",JSON.stringify(data))
    }
    return data;
  } catch (error) {
    console.error('Error during registration:', error.response ? error.response.data : error.message);
    throw error;
  }
}


//Login user API call

const loginService=async(user)=>{
    const {data}=await Axios.post('users/login',user);
    if(data){
        localStorage.setItem('userInfo',JSON.stringify(data))
    }
    return data
}
//logout user Function

const logoutService=()=>{
    localStorage.removeItem('userInfo');
    return null;
}

///update profile Api call
const updateProfileService=async (user,token)=>{
    const {data}=await Axios.put("/users",user,{
        headers:{
            Authorization:`Bearer${token}` ,
        }
    });
    if(data){
        localStorage.setItem("userInfo",JSON.stringify(data));
    }
    return data;
}

//delete profile API call
const deleteProfileService=async (token)=>{
    const{data}=await Axios.delete("/users",{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
    if(data){
        localStorage.removeItem("userInfo")
    }
    return data;
}

//change password Api call

const changePasswordService=async(user,token)=>{
    const{data}=await Axios.put("/users/password",user,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
    return data;

}

export {registerService,loginService,logoutService,updateProfileService, deleteProfileService,changePasswordService}