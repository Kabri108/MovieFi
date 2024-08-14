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
