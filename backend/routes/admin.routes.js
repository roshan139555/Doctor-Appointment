import express from 'express'
import { addDoctor,loginAdmin } from '../controllers/admin.controller.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/auth.middleware.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin ,upload.single('image'), addDoctor)
adminRouter.post('/admin-login', loginAdmin)


export default adminRouter