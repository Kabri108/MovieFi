import asyncHandler from 'express-async-handler'
import Movie from '../Models/Movies.model.js'
import {MoviesData} from '../Data/MovieData.js'
//************PUBLIC CONTROLLERS */

// @desc   import movies
// @route  POST/api/movies/import
// @access Public

const importMovies=asyncHandler(async(req,res)=>{
    await Movie.deleteMany({})
    const movies=await Movie.insertMany(MoviesData);
    res.status(201).json(movies)
})

// @desc   get all movies
// @route  GET/api/movies
// @access Public

const getMovies= asyncHandler(async(req,res)=>{
    try {
        //filter movies bu category,time,language, rate, year and search
        const {category,time,rate ,language,year,search}=req.query
        
        let query={
            ...(category && {category}),
            ...(time && {time}),
            ...(language && {language}),
            ...(rate && {rate}),
            ...(year && {year}),
            ...(search && {name:{$regex:search,$options:"i"}}),
        }

        //load more movies functionality
        const page=Number(req.query.pageNumber) || 1;//if page number is not provided in query we set it to 1
        const limit=12; //2 movies per page
        const skip=(page-1)*limit //skip 2 movies per page

        // find movies by query, skip and limit

        const movies=await Movie.find(query)
        .skip(skip)
        .limit(limit)
        // .sort({createdAt:-1})

       

        //get total number of movies
        const count =await Movie.countDocuments(query)
        //The countDocuments() function is used to count the number of documents that match the filter in a database collection.
        //send responce with movies and total number of movies

        res.json({
            movies,
            page,
            pages:Math.ceil(count/limit), //total number of pages
            totlalMovies:count,// total number of movies
        })

    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//@desc get movie by  id
//@route GET /api/movies/:id
// @access public

const getMovieById=asyncHandler(async(req,res)=>{
    try {
        //find movie by id in database

        const movie=await Movie.findById(req.params.id);
        //if the movie if found send it to the client
        if(movie){
            res.json(movie);
        }
        else{
            res.status(404);
            throw new Error("Movie not found")
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//@desc get top rated movies
//@route GET /api/movies/rated/top
// @access public

const getTopRatedMovies=asyncHandler(async(req,res)=>{
   try {
    const movies=await Movie.find({}).sort({rate:-1});
    res.json(movies);
   } catch (error) {
    res.status(400).json({message:error.message})
   }
})

//@desc get top random movies
//@route GET /api/movies/random
// @access public
const getRandomMovies=asyncHandler(async(req,res)=>{
    try {
        //find random movies
        const movies=await Movie.aggregate([{$sample:{size:10}}])
        res.json(movies)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})



// *************PRIVATE CONTROLLERS**************


////@desc create movies review
//@route POST /api/movies/:id/reviews
// @access Private
const createMovieReview=asyncHandler(async(req,res)=>{
    const {rating,comment}=req.body;
    try {
        //find movies by id in database
        const movie=await Movie.findById(req.params.id);

        //check if the user alredy reviews this movies
        if(movie){
            const alredyReview=movie.reviews.find((r)=>r.userId.toString()===req.user._id.toString())
            //if user alredy review this movie sen 400 error 
            if(alredyReview){
                throw new Error("You are alredy review this movie")
            }
            //else create a new review

            const review={
                userName:req.user.fullNmae,
                userId:req.user._id,
                userImage:req.user.image,
                rating: Number(rating),
                comment,
            }
            //push the teviews to the reviews array
            movie.reviews.push(review)
            //increment the number of reviews
            movie.numberOfReviews=movie.reviews.length;
            //calculate the new rate
            movie.rate=new movie.reviews.reduce((acc,item)=>item.rating+acc,0)/movie.reviews.length;

            //save the movies in database
            await movie.save();
            //send the movie to the client
            res.status(201).json({message:"Review added"});
            
        }else{
            res.status(404);
            throw new Error("Movies not found")
        }

    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//************ADMIN CONTROLLERS************** */

////@desc Update movies
//@route PUT /api/movies/:id
// @access Private/Admin

const updateMovies=asyncHandler(async(req,res)=>{
    try {
        //get data from request body
        const{
            name,
            desc,
            image,
            titleImage,
            rate,
            numberOfReviews,
            category,
            time,
            language,
            year,
            video,
            casts
        }=req.body;

        // find movie by id in database
        const movie=await Movie.findById(req.params.id)

        if(movie){
            //upload movie data
            movie.name=name || movie.name
            movie.desc=desc || movie.desc
            movie.image=image || movie.image
            movie.titleImage=titleImage || movie.titleImage
            movie.rate=rate || movie.rate
            movie.numberOfReviews=numberOfReviews || movie.numberOfReviews
            movie.category=category || movie.category
            movie.time=time || movie.time
            movie.language=language || movie.language
            movie.year=year || movie.year
            movie.video=video || movie.video
            movie.casts=casts || movie.casts

            //save the movie in database
            const updatedMovie=await movie.save()
            //send the update movie to the client
            res.status(291).json(updatedMovie)
        }else{
            res.status(404);
            throw new Error("Movie not found")
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})


const deleteMovie=asyncHandler(async(req,res)=>{
    try {
        //find movie in DB
        const movie=await Movie.findById(req.params.id);
        //if the movie is found delete it
        if(movie){
            await movie.remove();
            res.json({message:"Movie removed"})
        }
        //if the movie is not found send 404 error
        else{
            res.status(404);
            throw new Error("Movie not found")
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

export {importMovies,getMovies,getMovieById,getRandomMovies,getTopRatedMovies,createMovieReview,updateMovies,deleteMovie}



//dfjoem fngjirk 

//.aggregate([...]): This method is used to perform aggregation operations on the MongoDB collection. Aggregatipathor ta boro hoeaon pipelines allow you to process data and return computed results.
        // [{$sample:{size:10}}]: This is an aggregation stage within the array passed to aggregate. The $sample stage is used for randomly selecting a specified number of documents from the collection. In this case, it is set to select 10 random documents (size: 10).