import { Request, Response, NextFunction } from 'express';
import catchAsync from '../utils/CatchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/user/user.interface';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // if token does not exist
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorizated!');
    }

    // check if token is valid
    jwt.verify(token, config.jwt_access_secret as string, (err, decoded) => {
      if (err) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid token !');
      }

      const role = (decoded as JwtPayload)?.role;

      // check if user has required role
      if (requiredRoles && !requiredRoles.includes(role)) {
        throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized!');
      }

      // decoded token
      req.user = decoded as JwtPayload;
      next();
    });
  });
};

export default auth;
