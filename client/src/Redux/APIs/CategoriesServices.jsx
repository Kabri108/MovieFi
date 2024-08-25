import Axios from "./Axios";

//Get all categories API function
const getAllCategoriesService=async()=>{
    const{data}=await Axios.get("/categories")
    return data
}

///******************ADMIN APIs***********************/
//create new category Api function
const createCategoryService=async(title,token)=>{
    const{data}=await Axios.post("/categories",title,{
        headers:{
            Authorization:`Bearer${token}`
        }
    })
    return data;
}

//delete category API function 
const deleteCategoryService=async(id,token)=>{

    const{data}=await Axios.delete(`/categories/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
    return data;
}

//update category API function 
const updateCategoryService=async(id,token,title)=>{

    const{data}=await Axios.put(`/categories/${id}`,title,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
    return data;
}




export {
    getAllCategoriesService,createCategoryService,deleteCategoryService,updateCategoryService
}