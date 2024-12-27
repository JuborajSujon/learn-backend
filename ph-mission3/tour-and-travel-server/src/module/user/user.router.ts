import { NextFunction, Request, Response, Router } from 'express'
import { userController } from './user.controller'
import { userValidation } from './user.validation'
import auth from '../../middlewares/auth'

const userRouter = Router()

userRouter.post(
  '/create-user',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedBody = await userValidation.userValidationSchema.parseAsync(
        req.body
      )

      req.body = parsedBody
      next()
    } catch (error) {
      next(error)
    }
  },
  userController.createUser
)
userRouter.get('/:userId', userController.getSingleUser)
userRouter.put('/:userId', userController.updateUser)
userRouter.delete('/:userId', userController.deleteUser)
userRouter.get('/', auth('admin', 'user'), userController.getUser)

export default userRouter
