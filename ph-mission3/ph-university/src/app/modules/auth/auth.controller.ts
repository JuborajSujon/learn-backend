import status from 'http-status';
import catchAsync from '../../utils/CatchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';
import { JwtPayload } from 'jsonwebtoken';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: result,
  });
});

const changePassword = catchAsync(async (req, res) => {
  const { ...passwordData } = req.body;
  await AuthService.changePassword(req?.user as JwtPayload, passwordData);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User is changed password succesfully!',
    data: null,
  });
});

export const AuthControllers = {
  loginUser,
  changePassword,
};
