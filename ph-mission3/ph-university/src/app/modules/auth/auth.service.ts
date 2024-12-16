import status from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import jwt from 'jsonwebtoken';
import config from '../../config';

const loginUser = async (payload: TLoginUser) => {
  // check if the user exists
  const user = await User.isUserExistByCustomId(payload?.id);
  if (!user) {
    throw new AppError(status.NOT_FOUND, 'This user is not found !');
  }

  // checking if  the  user is already deleted
  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(status.FORBIDDEN, 'This user is already deleted !');
  }

  // checking if the user is blocked
  const userStatus = user?.status;
  if (userStatus === 'blocked') {
    throw new AppError(status.FORBIDDEN, 'This user is blocked !');
  }

  // checking if the password is correct
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(status.FORBIDDEN, 'Password does not match !');
  }

  const jwtPayload = {
    userId: user?.id,
    role: user?.role,
  };

  // create token and send to the client
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '30d',
  });

  // Access Granted : Send Access Token and Refresh Token

  return {
    accessToken,
    needsPasswordChange: user?.needsPasswordChange,
  };
};

export const AuthService = {
  loginUser,
};