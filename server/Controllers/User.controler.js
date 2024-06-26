import asyncHandler from "express-async-handler"
import User from "../Models/User.model.js"
import bcrypt from 'bcryptjs'
import { generateToken } from "../middlewares/Auth.js"


// express-async-handler
// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

//@desc Register user
//route POST /api/users/
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, password, image } = req.body
    try {
        const userExists = await User.findOne({ email })
        //check user exists
        if (userExists) {
            res.status(400)
            throw new Error("User alredy exists")
        }
        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        //create user in DB

        const user = await User.create({
            fullName,
            email,
            password: hashPassword,
            image,
        })
        //if user created successfully then user data and token to client
        if (user) {
            res.status(201).json({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                image: user.image,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            })
        }
        else {
            res.status(400);
            throw new Error("Invalid user date")
        }

    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
})

//@desc login user
//route POST /api/users/
//@access Public

const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    try {
        // find user in DB
        const user =await User.findOne({email});
    //    if user exists compare password with hashpassword then send user data and token to the client

    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            image: user.image,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }
    else{
        res.status(401);
        throw new Error("Invalid email or password")
    }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

// PRIVATE CONTROLAR//////////////////////////

//@desc update profle user
//route PUT /api/users
//@access PRIVATE
const updateUserProfile=asyncHandler(async (req,res)=>{
    const {fullName,email,image}=req.body;

    try {
        //find user in db
        const user =await User.findById(req.user._id);
        //if user exists update user data and save it in db
        if (user){
            user.fullName=fullName || user.fullName;
            user.email=email|| user.email;
            user.image=image|| user.image;

            const updateUser=await user.save()
            // saved update user data and token to client 
            res.json({
                _id:updateUser._id,
                fullName:updateUser.fullName,
                email:updateUser.email,
                image:updateUser.image,
                isAdmin:updateUser.isAdmin,
                token:generateToken(updateUser._id)
            })
        }
        //else send error message
        else{
            res.status(400)
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//@desc delete user profle 
//route DELETE /api/users
//@access PRIVATE
const deleteUserProfile=asyncHandler(async(req,res)=>{
   try {
     //find user in db
     const user =await User.findById(req.user._id)
     //if user exixts delete user from db
     if (user){
         //if user is admin throw error message
         if(user.isAdmin ){
             res.status(400);
             throw new Error("Can't deleted Admin user");
         }
         // else user delete from db 
         await user.remove();
         res.json({message:"User deleted successfully"})
     }
     else{
        res.status(404);
        throw new Error("User not found")
     }
   } catch (error) {
        res.status(400).json({message:error.message})
   }
})

//@desc change user password
//route PUT  /api/users/password
//@access PRIVATE
const changeUserPassword=asyncHandler(async(req,res)=>{
    const{oldPassword,newPassword}=req.body
    try {
        //find user in db
        const user=await User.findById(req.user._id)
        if(user &&( bcrypt.compare(oldPassword,user.password))){
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(newPassword,salt);
            user.password=hashedPassword;
            await user.save();
            res.json({message:"Password changed successfully"})
        }
        else{
            res.status(401)
            throw new Error("Invalid old password")
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }

})

//@desc get all liked movies
//route GET  /api/users/fevorits
//@access PRIVATE
const getLikedMovies=asyncHandler(async(req,res)=>{
    try {
        //find user in DB
        const user=await User.findById(req.user._id).populate("likedMovies")
        //if user exist send liked movies to client
        if(user){
            res.json(user.likedMovies)
        }
        //else send error movies
        else{
            res.status(404)
            throw new Error("user not found")
        }

    } catch (error) {
        
    }

})

//@desc add movies to liked movies
//route DELETE  /api/users/fevorits
//@access PRIVATE
const addLikedMovie=asyncHandler(async(req,res)=>{
    const{movieId}=req.body
    try {
        //find user in DB
        const user=await User.findById(req.user._id)
        //if user is exist then daa movies to likedMovies and saved in DB
        if(user){
            //if movie alredy liked
            //if movie alredy liked send error message
            if(user.likedMovies.push(movieId)){
                res.status(400);
                throw new Error("Movie alredy liked")
            }
            //else add movie to liked movies and saved it in db
            user.likedMovies.push(movieId);
            await user.save();
            res.json(user.likedMovies)
        }   
        // else send error message
        else{
            res.status(400);
            throw new Error("Movie not found")
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//@desc delete movies to liked movies
//route POST  /api/users/fevorits
//@access PRIVATE
const deleteLikedMovies=asyncHandler(async(req,res)=>{
    try {
            //find user in DB
    const user=await User.findById(req.user._id);
    //idf user exists deelete all liked movies and save it in DB
    if(user){
        user.likedMovies=[];
        await user.save();
        res.json({message:"All liked movies deleted successfully"})
    }
    // else send error message
    else{
        res.status(404);
        throw new Error("User not found")
    }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})



// ***********Admin Controllers**************

//@desc Get all users
//@route GET /api/users
//@access Private/Admin

const getUser=asyncHandler(async(req,res)=>{
    try {
        //find all users in DB
        const users=await User.find({})
       res.json(users)
    } catch (error) {
        res.json(400).json({message:error.message})
    }
})

//@desc delete all users
//@route GET /api/users/:id
//@access Private/Admin
const deleteUser=asyncHandler(async(req,res)=>{
    try {
        // ..find user in db
        const user =await User.findById(req.params.id);
        // if user exists delete user in Db
        if(user){
            //if user is admin throw error message
            if(user.isAdmin){
                res.status(400)
                throw new Error("Can't delete admin user")
            }
            //else user delete from db
            await user.remove();
            res.json({message:"User deleted successfully"})
        }
        else{
            res.status(404)
            throw new Error("User not found")
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
export { registerUser,loginUser,updateUserProfile,deleteUserProfile,changeUserPassword,getLikedMovies,addLikedMovie,deleteLikedMovies,getUser,deleteUser }


