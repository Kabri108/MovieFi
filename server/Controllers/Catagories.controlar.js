
import Categories from '..//Models/Catagories.model.js'
import asyncHandler from 'express-async-handler'    

// ***********PUBLIC CONTROLLER****************
// @desc get all categories
// @route  GET/api/categories
//@access public

const getCategories=asyncHandler(async(req,res)=>{
    try {
        //find all categories in database
        const categories=await Categories.find({})
        //send all xategories to the client
        res.json(categories);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})


///************ADMIN CONTROLLERS************** */
// @desc  create new categories
//@route POST/api/categories
//@access Privste /Admin

const createCategory=asyncHandler(async(req,res)=>{
    try {
        //get title from request body 

        const {title}=req.body;
        //create new category
        const category=new Categories({
            title,
        })
        // save the category in database
        const createCategory=await category.save()
        //send the new category to the client 
        res.status(201).json(createCategory)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})