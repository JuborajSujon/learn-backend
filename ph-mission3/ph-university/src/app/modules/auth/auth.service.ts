import status from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import jwt, { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../../config';
import { createToken } from './auth.utils';
import { sendEmail } from '../../utils/sendEmail';

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

  // Access Granted : Send Access Token and Refresh Token

  // create token and send to the client
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  // refresh token
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
    needsPasswordChange: user?.needsPasswordChange,
  };
};

const changePassword = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string },
) => {
  // check if the user exists
  const user = await User.isUserExistByCustomId(userData?.userId);
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
  if (!(await User.isPasswordMatched(payload?.oldPassword, user?.password))) {
    throw new AppError(status.FORBIDDEN, 'Password does not match !');
  }

  // hash new password
  const newhashedPassword = await bcrypt.hash(
    payload?.newPassword,
    Number(config.bcrypt_salt_rounds),
  );

  await User.findOneAndUpdate(
    {
      id: userData?.userId,
      role: userData?.role,
    },
    {
      password: newhashedPassword,
      needsPasswordChange: false,
      passwordChangedAt: new Date(),
    },
    { new: true },
  );

  return null;
};

const refreshToken = async (token: string) => {
  // checking if token is valid
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string,
  ) as JwtPayload;

  const { userId, iat } = decoded;

  // check if the user exists
  const user = await User.isUserExistByCustomId(userId);
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

  // check if jwt issued timestamp less then password change timestamp

  if (
    user.passwordChangedAt &&
    User.isJwtIssuedBeforePasswordChange(user.passwordChangedAt, iat as number)
  ) {
    throw new AppError(
      status.UNAUTHORIZED,
      "You're unauthrized to perform this action!",
    );
  }

  const jwtPayload = {
    userId: user?.id,
    role: user?.role,
  };

  // Access Granted : Send Access Token and Refresh Token

  // create token and send to the client
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

const forgetPassword = async (userId: string) => {
  // check if the user exists
  const user = await User.isUserExistByCustomId(userId);
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

  const jwtPayload = {
    userId: user?.id,
    role: user?.role,
  };

  // Access Granted : Send Access Token and Refresh Token

  // create token and send to the client
  const resetToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    '10m',
  );

  const resetUILink = `${config.reset_password_ui_link}?id=${user.id}&token=${resetToken}`;

  sendEmail(user.email, resetUILink);
};

const resetPassword = async (
  payload: { id: string; newPassword: string },
  token: string,
) => {
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
};
export const AuthService = {
  loginUser,
  changePassword,
  refreshToken,
  forgetPassword,
  resetPassword,
};
