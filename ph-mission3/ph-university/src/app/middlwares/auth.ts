import { Request, Response, NextFunction } from 'express';
import catchAsync from '../utils/CatchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // if token does not exist
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not logged in !');
    }

    // check if token is valid
    jwt.verify(token, config.jwt_access_secret as string, (err, decoded) => {
      if (err) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid token !');
      }

      // decoded token
      req.user = decoded as JwtPayload;
      next();
    });
  });
};

export default auth;
