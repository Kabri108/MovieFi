
import jwt from 'jsonwebtoken'
import User from '../Models/User.model.js';
import asyncHandler from 'express-async-handler'

//@desc Aythenticate user anfd get token  Token
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}

//protection middleware
const protect =asyncHandler(async(req,res,next)=>{
    let token;
    //check if token exists in headers
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){//set token from bearer token from header
        try {
            token=req.headers.authorization.split(" ")[1];
            //verify token and get user id
            const decoded=jwt.verify(token, process.env.JWT_SECRET);
            //get user id from decode token 

            req.user =await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized,token faild")

        }
    }
    if(!token){
        res.status(401)
        throw new Error("Not authorized, no token ")
    }
})

///admin middleware
const admin=(req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401);
        throw new Error("Not authorized as an admin")
    }
}

export {generateToken,protect,admin}