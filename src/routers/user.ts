import { Router } from 'express'
import * as userControllers from '../controllers/user'
const router = Router()

// /user
router.post('/', userControllers.createUser)

export default router
