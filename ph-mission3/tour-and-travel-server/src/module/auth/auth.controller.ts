import { StatusCodes } from 'http-status-codes'
import sendResponse from '../../utils/sendResponse'
import { AuthService } from './auth.service'
import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'

const register = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body
  const result = await AuthService.register(payload)

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'User created successfully',
    data: result,
  })
})

export const AuthController = {
  register,
}
