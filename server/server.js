import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from "./config/dbConfig.js";
import userRouters from './Routes/User.router.js'
import moviesRouters from './Routes/Movies.router.js'
import { errorHandler } from "./middlewares/error.middleware.js";
import categoriesRouter from './Routes/Catagories.router.js'
import Uploadrouter from "./Controllers/UploadFile.js";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

connectDB();

// main route
app.get('/',(req,res)=>{
    res.send("API is running");
})
//other route
app.use('/api/users',userRouters)
app.use('/api/movies',moviesRouters)
app.use('/api/categories',categoriesRouter)
app.use('/api/upload',Uploadrouter)

//error handeling middleware
app.use(errorHandler)

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running in http://localhost:${PORT}`);
})