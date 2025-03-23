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

//******************PRIVATE APIs***********************/

///update profile Api call
const updateProfileService=async (user,token)=>{
    const {data}=await Axios.put("/users",user,{
        headers:{
            Authorization:`Bearer ${token}` ,
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

//get facorite movies
const getFavoriteMoviesService=async(token)=>{
    const{data}=await Axios.get("/users/fevorites",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return data;
}

//delete all favorite movies
const deleteAllFsvoriteMovies= async(token)=>{
    const{data}=await Axios.delete("/users/fevorites",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return data;
}

//like movies API call
const likedMoviesService = async (movieId, token)=>{
    const {data} =await Axios.post(`/users/fevorites`,movieId,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
    return data;
}


////******************ADMIN APIs***********************/




export {registerService,loginService,logoutService,updateProfileService, deleteProfileService,changePasswordService,getFavoriteMoviesService,deleteAllFsvoriteMovies,
    likedMoviesService
}