import * as CategoriesConstants from "../Constants/CategoriesConstants"
import * as categoriesAPIs from "../APIs/CategoriesServices"
import toast from 'react-hot-toast'
import {ErrorAction, tokenProtection } from '../Protection'

//GET ALL CATEGORIES ACTION
export const getAllCategoriesAction=()=>async(dispatch)=>{
    try {
        dispatch({type:CategoriesConstants.GET_ALL_CATEGORIES_REQUEST});
        const data=await categoriesAPIs.getAllCategoriesService();
        dispatch({type:CategoriesConstants.GET_ALL_CATEGORIES_SUCCESS,payload:data})
    } catch (error) {
        ErrorAction(error,dispatch,CategoriesConstants.GET_ALL_CATEGORIES_FAIL)
    }
}

//CREATE CATEGORIES ACTION
export const createCategoriesAction=(title)=>async(dispatch,getState)=>{
    try {
        dispatch({type:CategoriesConstants.CREATE_CATEGORIES_REQUEST});
        await categoriesAPIs.createCategoryService(title,tokenProtection(getState));
        dispatch({type:CategoriesConstants.CREATE_CATEGORIES_SUCCESS})
        toast.success("Category create successfully")
    } catch (error) {
        ErrorAction(error,dispatch,CategoriesConstants.CREATE_CATEGORIES_FAIL)
    }
}

//UPDATE CATEGORIES ACTION
export const updateCategoriesAction=(id,title)=>async(dispatch,getState)=>{
    try {
        dispatch({type:CategoriesConstants.UPDATE_CATEGORIES_REQUEST});
        await categoriesAPIs.updateCategoryService(id,title,tokenProtection(getState));
        dispatch({type:CategoriesConstants.UPDATE_CATEGORIES_SUCCESS})
        toast.success("Category update successfully")
    } catch (error) {
        ErrorAction(error,dispatch,CategoriesConstants.UPDATE_CATEGORIES_FAIL)
    }
}
//DELETE CATEGORIES ACTION
export const deleteCategoriesAction=(id)=>async(dispatch,getState)=>{
    try {
        dispatch({type:CategoriesConstants.DELETE_CATEGORIES_REQUEST});
        await categoriesAPIs.deleteCategoryService(id,tokenProtection(getState));
        dispatch({type:CategoriesConstants.DELETE_CATEGORIES_SUCCESS})
        toast.success("Category deleted successfully")
    } catch (error) {
        ErrorAction(error,dispatch,CategoriesConstants.DELETE_CATEGORIES_FAIL)
    }
}