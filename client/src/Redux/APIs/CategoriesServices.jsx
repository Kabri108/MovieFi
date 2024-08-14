import Axios from "./Axios";

//Get all categories API function
const getAllCategoriesService=async()=>{
    const{data}=await Axios.get("/categories")
    return data
}

//create new category Api function
const createCategoryService=async(title,token)=>{
    const{data}=await Axios.post("/categories",title,{
        headers:{
            Authorization:`Bearer${token}`
        }
    })
    return data;
}

export {
    getAllCategoriesService,createCategoryService
}