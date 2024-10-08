import express from 'express'
import * as categoryController from '../Controllers/Catagories.controlar.js'
import {protect,admin} from '../middlewares/Auth.js'
const router = express.Router()

//*****************PUBLIC ROUTES******************** */
router.get('/',categoryController.getCategories)


//*****************PRIVATE ADMIN ROUTES******************** */
router.post('/',protect,admin,categoryController.createCategory)
// router.put('/:id',protect,admin,categoryController.updateCatagory)
// router.delete('/:id',protect,admin,categoryController.deleteCatagory)
export default router;