import { Router } from 'express'
import { AuthController } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { userValidation } from '../user/user.validation'

const authRouter = Router()

authRouter.post(
  '/register',
  validateRequest(userValidation.userValidationSchema),
  AuthController.register
)

export default authRouter
