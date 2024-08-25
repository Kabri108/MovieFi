import * as CategoriesConstants from '../Constants/CategoriesConstants'

//Get ALL CATEGORIES
export const getAllCategoriesReducer=(state={categories:[]},action)=>{
    switch(action.type){
        case CategoriesConstants.GET_ALL_CATEGORIES_REQUEST:
            return {isLoading:true};
        case CategoriesConstants.GET_ALL_CATEGORIES_SUCCESS:
            return { isLoading:false,categories:action.payload}    
        case CategoriesConstants.GET_ALL_CATEGORIES_FAIL:
            return {isLoading:false, isError:action.payload} 
        default:
            return state;       
    }
}


//create category
export const createCategoryReducer=(state={},action)=>{
    switch(action.type){
        case CategoriesConstants.CREATE_ALL_CATEGORIES_REQUEST:
            return {isLoading:true};
        case CategoriesConstants.CREATE_ALL_CATEGORIES_SUCCESS:
            return { isLoading:false, isSuccess:true}    
        case CategoriesConstants.CREATE_ALL_CATEGORIES_FAIL:
            return {isLoading:false, isError:action.payload} 
        case CategoriesConstants.CREATE_ALL_CATEGORIES_RESET:
            return {} 
        default:
            return state;       
    }
}


//UPDATE category
export const updateCategoryReducer=(state={},action)=>{
    switch(action.type){
        case CategoriesConstants.UPDATE_ALL_CATEGORIES_REQUEST:
            return {isLoading:true};
        case CategoriesConstants.UPDATE_ALL_CATEGORIES_SUCCESS:
            return { isLoading:false, isSuccess:true}    
        case CategoriesConstants.UPDATE_ALL_CATEGORIES_FAIL:
            return {isLoading:false, isError:action.payload} 
        case CategoriesConstants.UPDATE_ALL_CATEGORIES_RESET:
            return {} 
        default:
            return state;       
    }
}

//DELETE category
export const deleteCategoryReducer=(state={},action)=>{
    switch(action.type){
        case CategoriesConstants.DELETE_ALL_CATEGORIES_REQUEST:
            return {isLoading:true};
        case CategoriesConstants.DELETE_ALL_CATEGORIES_SUCCESS:
            return { isLoading:false, isSuccess:true}    
        case CategoriesConstants.DELETE_ALL_CATEGORIES_FAIL:
            return {isLoading:false, isError:action.payload} 
        case CategoriesConstants.DELETE_ALL_CATEGORIES_RESET:
            return {} 
        default:
            return state;       
    }
}



