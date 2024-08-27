import Axios from './Axios'

// *********PUBLIC APIs*************

//get all movies functions

export const getAllMoviesService=async(
    category,time,language,rate,year,search,pageNumber
)=>{
    const {data}=await Axios.get(`/movies?category=${category}&time=${time}&language=${language}&rate=${rate}&year=${year}&search=${search}&pageNumber=${pageNumber}`)

    return data
}

//get random movies function
export const getrandomeMovieServices=async()=>{
    const{data}=await Axios.get(`/movies/random/all`);
    return data;
}

//get random movies bu id
export const getMovieByIdServices=async(id)=>{
    const{data}=await Axios.get(`/movies/${id}`);
    return data;
}

//get top movies bu id
export const getTopRatedMovieServices=async()=>{
    const{data}=await Axios.get(`/movies/rated/top`);
    return data;
}




//create movie function 

export const createMovieService= async(token,movie)=>{
    const{data}=await Axios.post(`/movies`,movie,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return data;
}


