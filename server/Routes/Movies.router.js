import express from 'express'
import * as moviesController from '../Controllers/Movies.controler.js'
import {protect,admin} from '../middlewares/Auth.js'

const router=express.Router();

// ***************PUBLIC ROUTES***************
router.post('/import',moviesController.importMovies)
router.get('/',moviesController.getMovies)
router.get('/:id',moviesController.getMovieById)
router.get('/rated/top',moviesController.getTopRatedMovies)
router.get('/random/all',moviesController.getRandomMovies)

// ***************PRIVATE ROUTES***************

router.post('/:id/reviews',protect,moviesController.createMovieReview)

// ***************PRIVATE ADMIN ROUTES***************

router.post('/:id/',protect,admin,moviesController.updateMovies)
router.post('/:id/',protect,admin,moviesController.deleteMovie)

export default router;
