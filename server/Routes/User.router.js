import express from 'express'
import { addLikedMovie, changeUserPassword, deleteLikedMovies, deleteUser, deleteUserProfile, getLikedMovies, getUser, loginUser, registerUser, updateUserProfile } from '../Controllers/User.controler.js';
import { admin, protect } from '../middlewares/Auth.js';

const router=express.Router();
/////////////PUBLIC ROUTES/////////////
router.post('/',registerUser);
router.post('/login',loginUser);
// ////////PRIVATE ROUTES//////////////////
router.put('/',protect,updateUserProfile)
router.delete("/",protect,deleteUserProfile)
router.put("/password",protect,changeUserPassword)
router.get('/fevorites',protect,getLikedMovies)
router.post('/fevorites',protect,addLikedMovie)
router.delete('/fevorites',protect,deleteLikedMovies)


// ////// ADMIN ROUTES/////////////
router.get('/',protect,admin,getUser)
router.delete('/:id',protect,admin,deleteUser)


export default router;
 


////export default  router