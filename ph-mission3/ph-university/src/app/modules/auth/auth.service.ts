import status from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import bcrypt from 'bcrypt';

const loginUser = async (payload: TLoginUser) => {
  // check if the user exists
  const isUserExist = await User.findOne({ id: payload?.id });

  if (!isUserExist) {
    throw new AppError(status.NOT_FOUND, 'This user is not found !');
  }

  // checking if  the  user is already deleted
  const isDeleted = isUserExist?.isDeleted;
  if (isDeleted) {
    throw new AppError(status.FORBIDDEN, 'This user is already deleted !');
  }

  // checking if the user is blocked
  const userStatus = isUserExist?.status;
  if (userStatus === 'blocked') {
    throw new AppError(status.FORBIDDEN, 'This user is blocked !');
  }

  // checking if the password is correct
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    isUserExist?.password,
  );

  console.log(isPasswordMatched);

  // Access Granted : Send Access Token and Refresh Token

  return {};
};

export const AuthService = {
  loginUser,
};
