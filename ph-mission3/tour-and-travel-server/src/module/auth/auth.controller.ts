import { StatusCodes } from 'http-status-codes'
import sendResponse from '../../utils/sendResponse'

const register = async (req, res) => {
  const result = await AuthService.register(req.body)

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'User created successfully',
    data: result,
  })
}

export const AuthController = {
  register,
}
