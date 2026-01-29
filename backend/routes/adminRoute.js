import express from 'express'
import{addDoctor} from '../contollers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRouter=express.Router()

adminRouter.post('/add-docter',upload,single('image'),addDoctor)

export default adminRouter