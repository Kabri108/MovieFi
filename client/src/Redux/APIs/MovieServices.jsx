import Axios from './Axios'

// *********PUBLIC APIs*************

//get all movies functions

export const getAllMoviesService=async({
    category,time,language,rate,year,search,pageNumber
})=>{
    const {data}=await Axios.get('/movies')

    return data
}